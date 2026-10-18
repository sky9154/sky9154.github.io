import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRotateRight, FaRegCalendar, FaRegFolderOpen } from "react-icons/fa6";
import { Box, Button, Skeleton, Stack } from "@mui/material";

import { H1, H3, H5, Paragraph } from "@components/ui/Typography";
import CollectionTag from "@components/content/CollectionTag";
import ProjectCards from "@components/projects/ProjectCards";
import BentoCard from "@components/ui/BentoCard";
import { formatPostDate, type PostCollection, type PostSummary } from "@/services/notionApi";
import { selectSummary } from "@/utils/postSummaries";


interface PostListProps {
  posts: PostSummary[];
  loading: boolean;
  initialLoading: boolean;
  error: string | null;
  onRetry: () => void;
  collection?: PostCollection;
}

const GRID_STYLES = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
  gap: 3
};

function PostList({
  posts,
  loading,
  initialLoading,
  error,
  onRetry,
  collection = "articles"
}: PostListProps) {
  const { t, i18n } = useTranslation();
  const isProjectList = collection === "projects";
  const hrefPrefix = `/${collection}`;
  const summaryLanguage = isProjectList ? i18n.resolvedLanguage || i18n.language : "zh_Hant";

  if (initialLoading) {
    if (isProjectList) return <ProjectCards posts={[]} loading />;

    return (
      <Box sx={GRID_STYLES} aria-label={t(`${collection}.loading`)} aria-busy="true">
        {[...Array(6)].map((_, index) => (
          <BentoCard key={index} className="article-list-card article-list-skeleton" colSpan={2} rowSpan={1}>
            <Box sx={{ display: "flex", flexDirection: "column", pb: 2.5 }}>
              <Skeleton variant="text" width="35%" height={18} sx={{ mb: 2 }} />
              <Skeleton variant="text" width="82%" sx={{ fontSize: "clamp(20px, 2vw, 24px)", height: "1.5em", mb: 2 }} />
              <Box sx={{ mb: 3 }}>
                {["100%", "94%", "62%"].map((width) => <Skeleton key={width} variant="text" width={width} sx={{ height: "1.8em" }} />)}
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {[72, 88, 64].map((width) => <Skeleton key={width} variant="rounded" width={width} height={24} />)}
              </Box>
            </Box>
          </BentoCard>
        ))}
      </Box>
    );
  }

  if (error && posts.length === 0) {
    return (
      <Box role="alert" sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        px: { xs: 3, md: 4 },
        py: { xs: 5, md: 6 },
        border: "1px solid color-mix(in srgb, var(--red-100), transparent 35%)",
        borderRadius: "var(--radius-lg)",
        bgcolor: "color-mix(in srgb, var(--red-100), transparent 94%)"
      }}>
        <H3 sx={{ color: "var(--text-main)", fontSize: "20px" }}>
          {t(`${collection}.loadErrorTitle`)}
        </H3>
        <Paragraph sx={{ color: "var(--text-sub)", fontSize: "16px" }}>
          {t(`${collection}.loadErrorDesc`)}
        </Paragraph>
        <Button
          variant="outlined"
          startIcon={<FaArrowRotateRight />}
          onClick={onRetry}
          disabled={loading}
          sx={{
            minHeight: "44px",
            mt: 1,
            color: "var(--text-main)",
            borderColor: "color-mix(in srgb, var(--text-main), transparent 35%)",
            textTransform: "none",
            borderRadius: "12px"
          }}>
          {t(`${collection}.retry`)}
        </Button>
      </Box>
    );
  }

  if (posts.length === 0) {
    return (
      <Box className="empty-state-panel" sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 10,
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "var(--radius-lg)",
        bgcolor: "var(--color-surface-subtle)"
      }}>
        <Box aria-hidden="true" sx={{ fontSize: "60px", color: "var(--text-sub)", mb: 2 }}>
          <FaRegFolderOpen />
        </Box>
        <H1 sx={{ color: "var(--text-main)", fontSize: "24px", fontWeight: 700, mb: 1 }}>
          {t(`${collection}.noResultsTitle`)}
        </H1>
        <H3 sx={{ color: "var(--text-sub)", fontSize: "16px" }}>
          {t(`${collection}.noResultsDesc`)}
        </H3>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative" }} aria-busy={loading}>
      {isProjectList ? <ProjectCards posts={posts} /> : <Box sx={GRID_STYLES}>
        {posts.map((post) => (
          <BentoCard key={post.id} className="article-list-card" colSpan={2} rowSpan={1}>
            <Box
              component={RouterLink}
              to={`${hrefPrefix}/${post.id}`}
              aria-label={`${post.title} — ${t("articles.readArticle")}`}
              sx={{
                color: "inherit",
                textDecoration: "none",
                height: "100%",
                pb: 2.5,
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                outline: "none",
                "&:focus-visible": {
                  outline: "2px solid var(--color-accent)",
                  outlineOffset: "3px"
                }
              }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 2, color: "var(--text-sub)" }}>
                <Box aria-hidden="true" sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                  <FaRegCalendar />
                </Box>
                <Paragraph sx={{ lineHeight: 1, pt: "1px", fontSize: "12px" }}>
                  {formatPostDate(post.updatedAt, i18n.resolvedLanguage || i18n.language)}
                </Paragraph>
              </Stack>
              <H5 component="h2" sx={{
                fontSize: "clamp(20px, 2vw, 24px)",
                fontWeight: 700,
                lineHeight: 1.5,
                textWrap: "pretty",
                overflowWrap: "anywhere",
                mb: 2
              }}>
                {post.title || t(`${collection}.untitled`)}
              </H5>
              <Paragraph sx={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "var(--text-sub)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                mb: 3,
                flexGrow: 1
              }}>
                {selectSummary(post.summaries, summaryLanguage, isProjectList)}
              </Paragraph>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {post.tags.map((tag) => <CollectionTag key={tag.id || tag.name} tag={tag} />)}
              </Box>
            </Box>
          </BentoCard>
        ))}
      </Box>}
    </Box>
  );
}

export default PostList;
