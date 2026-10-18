import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";

import { H3, Paragraph } from "@components/ui/Typography";
import { PROJECT_FALLBACK_IMAGE, PROJECT_IMAGE_SIZE } from "@assets/data/featuredProjects";
import type { PostSummary } from "@services/notionApi";
import { selectSummary } from "@/utils/postSummaries";


const HOME_PROJECT_LINK_STYLES = {
  display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, minWidth: 0, maxWidth: "100%", minHeight: 44, pl: 0, pr: 1, py: 0, textAlign: "left",
  fontSize: "14px", fontWeight: 500, lineHeight: 1.5, textDecoration: "none", bgcolor: "transparent",
  WebkitTapHighlightColor: "transparent", transition: "color var(--motion-fast) var(--ease-standard)",
  "&:is(:hover, :active, :focus, :focus-visible)": { bgcolor: "transparent", textDecoration: "none" },
  "&[href]:active": { color: "var(--project-hover-color)" },
  "&:focus-visible": { outline: "2px solid var(--color-accent)", outlineOffset: "-5px", borderRadius: "var(--radius-sm)" },
  "& .project-action-arrow": {
    display: "grid", placeItems: "center", flexShrink: 0, width: 18, height: 18, lineHeight: 0,
    transition: "transform var(--motion-fast) var(--ease-standard)"
  },
  "& svg": { display: "block" },
  "@media (hover: hover) and (pointer: fine)": {
    "&[href]:hover": { color: "var(--project-hover-color)", "& .project-action-arrow": { transform: "var(--project-arrow-shift)" } }
  },
  "@media (prefers-reduced-motion: reduce)": { transition: "none", "& .project-action-arrow": { transition: "none", transform: "none !important" } }
};

interface ProjectPreviewProps {
  project: PostSummary;
  priority?: boolean;
}

function ProjectPreview({ project, priority = false }: ProjectPreviewProps) {
  const { t, i18n } = useTranslation();
  const [hasImageError, setHasImageError] = useState(false);
  const hasCover = Boolean(project.cover) && !hasImageError;
  const language = i18n.resolvedLanguage || i18n.language;
  const title = project.title || t("projects.untitled");
  const summary = selectSummary(project.summaries, language);

  return (
    <Box component="article" className="project-preview" sx={{ minWidth: 0 }}>
      <Box className="project-visual">
        <Box className="project-image" sx={{ aspectRatio: `${PROJECT_IMAGE_SIZE.width} / ${PROJECT_IMAGE_SIZE.height}`, position: "relative" }}>
          <img
            src={hasCover && project.cover ? project.cover : PROJECT_FALLBACK_IMAGE}
            alt={hasCover ? title : ""}
            width={PROJECT_IMAGE_SIZE.width}
            height={PROJECT_IMAGE_SIZE.height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setHasImageError(true)}
          />
          {!hasCover && <Paragraph sx={{ position: "absolute", inset: "65% 16px auto", textAlign: "center", color: "var(--color-moon)", fontSize: "14px" }}>{t("projects.coverUnavailable")}</Paragraph>}
        </Box>
      </Box>
      <Box className="project-caption" sx={{ pt: { xs: 3, md: 4 }, pb: 1 }}>
        <Box className="project-copy" sx={{ px: 1.5 }}>
          <H3 sx={{ fontSize: "clamp(28px, 2.8vw, 40px)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", mb: 2, textWrap: "balance", overflowWrap: "anywhere" }}>{title}</H3>
          {summary && <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.85, overflowWrap: "anywhere" }}>{summary}</Paragraph>}
          {project.tags.length > 0 && (
            <Box component="ul" className="project-tags" sx={{ display: "flex", flexWrap: "wrap", columnGap: 2, rowGap: 1, mt: 2.5, mb: 0, listStyle: "none" }}>
              {project.tags.map((tag) => <Box component="li" key={tag.id || tag.name}>{tag.name}</Box>)}
            </Box>
          )}
          <Box className="home-project-actions" sx={{
            display: "flex", mt: { xs: 2.5, md: 3 }
          }}>
            <Box component={Link} to={`/projects/${project.id}`} className="project-entry" aria-label={`${title} · ${t("projects.viewProject")}`} sx={{
              ...HOME_PROJECT_LINK_STYLES, color: "var(--color-accent)",
              "--project-hover-color": "var(--text-main)", "--project-arrow-shift": "translateX(3px)"
            }}>
              <Box component="span" sx={{ minWidth: 0, overflowWrap: "anywhere" }}>{t("projects.viewProject")}</Box>
              <Box component="span" className="project-action-arrow"><FaArrowRight size={18} aria-hidden="true" /></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectPreview;
