import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Box } from "@mui/material";

import { H2, H3, Paragraph } from "@components/ui/Typography";


export interface TimelineEntry {
  period: string;
  heading: string;
  subheading: string;
  content: ReactNode;
}

interface ObservationTimelineProps {
  id: string;
  title: string;
  entries: TimelineEntry[];
}

interface ObservationEntryProps {
  entry: TimelineEntry;
}

function ObservationEntry({ entry }: ObservationEntryProps) {
  return (
    <Box component="li" className="observation-entry" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(160px, 0.35fr) minmax(0, 1fr)" }, gap: { xs: 1.5, md: 5 }, pl: { xs: 4, md: 6 }, position: "relative" }}>
      <span className="timeline-node" aria-hidden="true" />
      <Paragraph sx={{ color: "var(--color-accent)", fontSize: "14px", fontVariantNumeric: "tabular-nums", pt: 0.5 }}>{entry.period}</Paragraph>
      <Box sx={{ minWidth: 0 }}>
        <H3 sx={{ fontSize: { xs: "23px", md: "28px" }, lineHeight: 1.4, fontWeight: 600, mb: 1 }}>{entry.heading}</H3>
        <Paragraph sx={{ color: "var(--text-sub)", mb: "var(--about-copy-gap)", fontSize: "16px", lineHeight: 1.7 }}>{entry.subheading}</Paragraph>
        {entry.content}
      </Box>
    </Box>
  );
}

function ObservationTimeline({ id, title, entries }: ObservationTimelineProps) {
  const reducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollY } = useScroll();
  const [scrollRange, setScrollRange] = useState({ start: 0, end: 1 });
  const progress = useTransform(scrollY, [scrollRange.start, scrollRange.end], [0, 1], { clamp: true });

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) {
      return;
    }
    function updateScrollRange() {
      if (!timeline) {
        return;
      }

      const rect = timeline.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const viewportAnchor = window.innerHeight * 0.75;
      const start = Math.max(0, top - viewportAnchor);
      const end = Math.max(start + 1, top + rect.height - viewportAnchor);

      setScrollRange((previous) => previous.start === start && previous.end === end ? previous : { start, end });
    }

    updateScrollRange();

    const observer = new ResizeObserver(updateScrollRange);

    observer.observe(timeline);

    const notebook = timeline.closest(".about-notebook");

    if (notebook) {
      observer.observe(notebook);
    }

    window.addEventListener("resize", updateScrollRange);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScrollRange);
    };
  }, [entries]);

  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`} className="portfolio-section">
      <H2 id={`${id}-title`} className="portfolio-heading" sx={{ mb: "var(--about-heading-gap)" }}>{title}</H2>
      <Box ref={timelineRef} component="ol" sx={{ display: "grid", gap: "var(--about-item-gap)", listStyle: "none", m: 0, p: 0, position: "relative" }}>
        <svg className="timeline-trace" viewBox="0 0 16 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M8 0V100" className="timeline-track" />
          <motion.path d="M8 0V100" className="timeline-progress" style={{ pathLength: reducedMotion ? 1 : progress }} />
        </svg>
        {entries.map((entry) => <ObservationEntry key={`${entry.heading}-${entry.period}`} entry={entry} />)}
      </Box>
    </Box>
  );
}

export default ObservationTimeline;
