import { useId, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

import { Paragraph } from "@components/ui/Typography";


const DIAGRAM_BRANCHES = [
  { id: "user", inputs: ["userGraph", "userReviews"], output: "userFusion" },
  { id: "product", inputs: ["productGraph", "productReviews"], output: "productFusion" }
];
const DIAGRAM_PIPELINE = ["concatenate", "score", "ranking"];
const DIAGRAM_NODES = [...DIAGRAM_BRANCHES.flatMap((branch) => [...branch.inputs, branch.output]), ...DIAGRAM_PIPELINE];
const DIAGRAM_EDGES = [
  ...DIAGRAM_BRANCHES.flatMap((branch) => branch.inputs.map((from) => ({ from, to: branch.output, route: "branch" }))),
  ...DIAGRAM_BRANCHES.map((branch) => ({ from: branch.output, to: DIAGRAM_PIPELINE[0], route: "merge" })),
  ...DIAGRAM_PIPELINE.slice(1).map((to, index) => ({ from: DIAGRAM_PIPELINE[index], to, route: "pipeline" }))
];

interface DiagramConnection {
  from: string;
  to: string;
  path: string;
  arrow: string;
}

function ResearchDiagram() {
  const { t } = useTranslation();
  const [selectedNode, setSelectedNode] = useState(DIAGRAM_NODES[0]);
  const descriptionId = useId();
  const flowRef = useRef<HTMLDivElement>(null);
  const [connections, setConnections] = useState<{ width: number; height: number; edges: DiagramConnection[] }>({ width: 1, height: 1, edges: [] });

  useLayoutEffect(() => {
    const flow = flowRef.current;
    if (!flow) {
      return;
    }

    function updateConnections() {
      if (!flow) {
        return;
      }

      const bounds = flow.getBoundingClientRect();

      if (!bounds.width || !bounds.height) {
        return;
      }

      const nodes = new Map(Array.from(flow.querySelectorAll<HTMLButtonElement>("[data-node]"), (node) => {
        const rect = node.getBoundingClientRect();

        return [node.dataset.node, { left: rect.left - bounds.left, right: rect.right - bounds.left, top: rect.top - bounds.top, bottom: rect.bottom - bounds.top, x: rect.left + rect.width / 2 - bounds.left, y: rect.top + rect.height / 2 - bounds.top }] as const;
      }));
      const pipelineTop = (flow.querySelector(".research-pipeline")?.getBoundingClientRect().top ?? bounds.top) - bounds.top;
      const fusionBottom = Math.max(...DIAGRAM_BRANCHES.map((branch) => nodes.get(branch.output)?.bottom ?? 0));
      const edges = DIAGRAM_EDGES.flatMap((edge) => {
        const source = nodes.get(edge.from);
        const target = nodes.get(edge.to);

        if (!source || !target) {
          return [];
        }

        let path: string;
        let arrow: string;

        if (edge.route === "pipeline") {
          path = `M${source.right} ${source.y}H${target.left}`;
          arrow = `M${target.left - 6} ${target.y - 5}L${target.left} ${target.y}L${target.left - 6} ${target.y + 5}`;
        } else {
          const junction = edge.route === "merge" ? (fusionBottom + pipelineTop) / 2 : (source.bottom + target.top) / 2;
          path = `M${source.x} ${source.bottom}V${junction}H${target.x}V${target.top}`;
          arrow = `M${target.x - 5} ${target.top - 6}L${target.x} ${target.top}L${target.x + 5} ${target.top - 6}`;
        }
        return [{ from: edge.from, to: edge.to, path, arrow }];
      });
      setConnections((previous) => previous.width === bounds.width && previous.height === bounds.height && previous.edges.length === edges.length && previous.edges.every((edge, index) => edge.path === edges[index].path && edge.arrow === edges[index].arrow)
        ? previous
        : { width: bounds.width, height: bounds.height, edges });
    }

    updateConnections();
    const observer = new ResizeObserver(updateConnections);

    observer.observe(flow);
    flow.querySelectorAll(".research-node, .research-branch-body, .research-pipeline").forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  function renderNode(node: string) {
    const title = t(`about.diagram.nodes.${node}.title`);
    const subtitle = t(`about.diagram.nodes.${node}.subtitle`);

    return (
      <Button key={node} data-node={node} className="research-node" aria-label={`${title} · ${subtitle}`} aria-pressed={selectedNode === node} aria-describedby={selectedNode === node ? descriptionId : undefined} onClick={() => setSelectedNode(node)} onFocus={(event) => { setSelectedNode(node); event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" }); }}>
        <span>{title}</span>
        <span className="research-node-subtitle">{subtitle}</span>
      </Button>
    );
  }

  return (
    <Box className="research-diagram" sx={{ mt: "var(--about-item-gap)", p: "var(--about-heading-gap)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", bgcolor: "var(--color-surface-subtle)" }}>
      <Paragraph sx={{ color: "var(--text-sub)", fontSize: "14px", mb: "var(--about-copy-gap)" }}>{t("about.diagram.caption")}</Paragraph>
      <Box className="research-scroll" tabIndex={0} role="region" aria-label={t("about.diagram.label")}>
        <Box ref={flowRef} className="research-flow" role="group" aria-label={t("about.diagram.label")}>
          <svg className="research-connections" viewBox={`0 0 ${connections.width} ${connections.height}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
            {connections.edges.map((edge) => <g key={`${edge.from}-${edge.to}`} data-from={edge.from} data-to={edge.to}><path d={edge.path} /><path d={edge.arrow} /></g>)}
          </svg>
          <Box className="research-branches">
            {DIAGRAM_BRANCHES.map((branch) => (
              <Box key={branch.id} className="research-branch" role="group" aria-labelledby={`${descriptionId}-${branch.id}`}>
                <Paragraph id={`${descriptionId}-${branch.id}`} sx={{ color: "var(--color-accent)", fontSize: "14px", mb: "var(--about-copy-gap)" }}>{t(`about.diagram.branches.${branch.id}`)}</Paragraph>
                <Box className="research-branch-body">
                  <Box className="research-inputs">{branch.inputs.map(renderNode)}</Box>
                  {renderNode(branch.output)}
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="research-pipeline" role="group" aria-label={t("about.diagram.pipelineLabel")}>{DIAGRAM_PIPELINE.map(renderNode)}</Box>
        </Box>
      </Box>
      <Paragraph sx={{ color: "var(--text-sub)", fontSize: "13px", lineHeight: 1.7, mt: "var(--about-copy-gap)" }}>{t("about.diagram.reviewNote")}</Paragraph>
      <Box id={descriptionId} role="status" sx={{ display: "grid", mt: "var(--about-copy-gap)", pt: "var(--about-copy-gap)", borderTop: "1px solid var(--color-border-subtle)" }}>
        {DIAGRAM_NODES.map((node) => (
          <Box key={node} aria-hidden={selectedNode !== node} sx={{ gridArea: "1 / 1", visibility: selectedNode === node ? "visible" : "hidden" }}>
            <Paragraph sx={{ color: "var(--color-accent)", fontWeight: 600, mb: 1 }}>{t(`about.diagram.nodes.${node}.title`)}</Paragraph>
            <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.8 }}>{t(`about.diagram.nodes.${node}.description`)}</Paragraph>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ResearchDiagram;
