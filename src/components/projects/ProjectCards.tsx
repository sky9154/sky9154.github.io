import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRegCalendar, FaArrowRight } from "react-icons/fa6";
import { Box, Skeleton } from "@mui/material";

import BentoCard from "@components/ui/BentoCard";
import CollectionTag from "@components/content/CollectionTag";
import { H3, Paragraph } from "@components/ui/Typography";
import { formatPostDate, type PostSummary } from "@/services/notionApi";
import { selectSummary } from "@/utils/postSummaries";


const PROJECT_GRID_STYLES = {
  display: "grid",
  gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
  gap: 3
};

const PROJECT_ACTION_ROW_STYLES = {
  display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", position: "relative",
  mx: { xs: -2.5, sm: -3 }, mb: { xs: -2.5, sm: -3 }, borderTop: "1px solid var(--color-border)",
  "&::after": {
    content: '""', position: "absolute", left: "50%", top: 0, bottom: 0, my: "auto",
    width: "1px", height: 24, bgcolor: "var(--color-border)", pointerEvents: "none"
  }
};

const PROJECT_LINK_STYLES = {
  display: "flex", alignItems: "center", justifyContent: "center", gap: 1,
  minWidth: 0, minHeight: 80, px: 2, py: 2.5, fontSize: "14px", fontWeight: 500, lineHeight: 1.5, textAlign: "center",
  textDecoration: "none", bgcolor: "transparent", WebkitTapHighlightColor: "transparent",
  transition: "color var(--motion-fast) var(--ease-standard)",
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

function getProjectGithubUrl(title: string): string | undefined {
  const repositoryName = title.trim().replace(/\s+/g, "-");

  return repositoryName ? `https://github.com/sky9154/${encodeURIComponent(repositoryName)}` : undefined;
}

interface ProjectCardsProps {
  posts: PostSummary[];
  loading?: boolean;
}

function ProjectCard({ post }: { post: PostSummary }) {
  const { t, i18n } = useTranslation();
  const [failedCover, setFailedCover] = useState<string | null>(null);
  const language = i18n.resolvedLanguage || i18n.language;
  const title = post.title || t("projects.untitled");
  const summary = selectSummary(post.summaries, language);
  const hasCover = Boolean(post.cover) && failedCover !== post.cover;
  const githubUrl = getProjectGithubUrl(post.title);

  return (
    <BentoCard component="article" className="project-list-item">
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0, color: "var(--text-main)" }}>
        <Box className="project-list-cover" sx={{
          aspectRatio: "2 / 1", width: "100%", position: "relative", flexShrink: 0,
          borderRadius: "var(--radius-md)", overflow: "hidden", bgcolor: "var(--color-surface-subtle)"
        }}>
          {hasCover && post.cover ? (
            <Box component="img" src={post.cover} alt="" width={1600} height={800} loading="lazy" decoding="async" onError={() => setFailedCover(post.cover)} sx={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
          ) : (
            <Box className="project-list-cover-fallback" sx={{ position: "absolute", inset: 0, display: "grid", placeContent: "center", justifyItems: "center", gap: 1.5 }}>
              <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
                <circle cx="32" cy="32" r="29" fill="none" stroke="var(--color-accent-muted)" />
                <path d="M35 12a21 21 0 1 0 17 32A23 23 0 0 1 35 12Z" fill="var(--color-accent-muted)" />
              </svg>
              <Paragraph sx={{ color: "var(--text-sub)", fontSize: "13px" }}>{t("projects.coverUnavailable")}</Paragraph>
            </Box>
          )}
        </Box>
        <Box sx={{ pt: 3, display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, color: "var(--text-sub)", fontSize: "12px" }}>
            <FaRegCalendar aria-hidden="true" />
            <Box component="time" dateTime={post.updatedAt}>{formatPostDate(post.updatedAt, language)}</Box>
          </Box>
          <H3 component="h2" sx={{ fontSize: "clamp(20px, 2vw, 24px)", fontWeight: 700, lineHeight: 1.35, mb: 1.25, overflowWrap: "anywhere" }}>{title}</H3>
          {summary && <Paragraph sx={{ fontSize: "16px", color: "var(--text-sub)", lineHeight: 1.7, overflowWrap: "anywhere" }}>{summary}</Paragraph>}
          {post.tags.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: summary ? 2.5 : 0 }}>
              {post.tags.map((tag) => <CollectionTag key={tag.id || tag.name} tag={tag} wrap />)}
            </Box>
          )}
          <Box className="project-list-actions" sx={{ mt: "auto", pt: 3 }}>
            <Box className="project-list-action-group" sx={PROJECT_ACTION_ROW_STYLES}>
              <Box
                component="a"
                href={githubUrl}
                target={githubUrl ? "_blank" : undefined}
                rel={githubUrl ? "noopener noreferrer" : undefined}
                aria-disabled={!githubUrl || undefined}
                aria-label={`${t("projects.githubSource")} · ${title} · ${t("projects.opensInNewTab")}`}
                className="project-list-github"
                sx={{
                  ...PROJECT_LINK_STYLES,
                  color: "var(--text-main)", "--project-hover-color": "var(--color-accent)",
                  "--project-arrow-shift": "translate(2px, -2px)", cursor: githubUrl ? "pointer" : "default"
                }}
              >
                <Box component="span" sx={{ minWidth: 0, overflowWrap: "anywhere" }}>{t("projects.githubAction")}</Box>
                <Box component="span" className="project-action-arrow"><FaArrowRight size={18} aria-hidden="true" style={{ transform: "rotate(-45deg)" }} /></Box>
              </Box>
              <Box component={Link} to={`/projects/${post.id}`} aria-label={`${title} · ${t("projects.viewProject")}`} className="project-list-entry" sx={{
                ...PROJECT_LINK_STYLES,
                color: "var(--color-accent)", "--project-hover-color": "var(--text-main)", "--project-arrow-shift": "translateX(3px)"
              }}>
                <Box component="span" sx={{ minWidth: 0, overflowWrap: "anywhere" }}>{t("projects.viewProject")}</Box>
                <Box component="span" className="project-action-arrow"><FaArrowRight size={18} aria-hidden="true" /></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BentoCard>
  );
}

function ProjectCards({ posts, loading = false }: ProjectCardsProps) {
  const { t } = useTranslation();

  return (
    <Box className="project-list-grid" sx={PROJECT_GRID_STYLES} aria-busy={loading} aria-label={loading ? t("projects.loading") : undefined}>
      {loading ? Array.from({ length: 6 }, (_, index) => (
        <BentoCard key={index} className="project-list-skeleton">
          <Skeleton animation={false} variant="rounded" sx={{ aspectRatio: "2 / 1", height: "auto", borderRadius: "var(--radius-md)" }} />
          <Box sx={{ pt: 3 }}>
            <Skeleton animation={false} width="30%" height={18} sx={{ mb: 1.5 }} />
            <Skeleton animation={false} width="82%" sx={{ fontSize: "clamp(20px, 2vw, 24px)" }} />
            <Box sx={{ mt: 1.25 }}><Skeleton animation={false} /><Skeleton animation={false} width="72%" /></Box>
            <Box sx={{ display: "flex", gap: 1, mt: 2.5 }}>{[72, 64, 86].map((width) => <Skeleton key={width} animation={false} variant="rounded" width={width} height={24} />)}</Box>
            <Box sx={{ pt: 3 }}><Box sx={PROJECT_ACTION_ROW_STYLES}>
              <Box sx={{ minHeight: 80, display: "grid", placeItems: "center", px: 2 }}><Skeleton animation={false} width="70%" height={24} /></Box>
              <Box sx={{ minHeight: 80, display: "grid", placeItems: "center", px: 2 }}><Skeleton animation={false} width="80%" height={24} /></Box>
            </Box></Box>
          </Box>
        </BentoCard>
      )) : posts.map((post) => <ProjectCard key={post.id} post={post} />)}
    </Box>
  );
}

export default ProjectCards;
