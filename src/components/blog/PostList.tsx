import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRotateRight, FaRegCalendar, FaRegFolderOpen } from "react-icons/fa6";
import { Box, Button, Chip, LinearProgress, Skeleton, Stack } from "@mui/material";
import { H1, H3, H5, Paragraph } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";
import { formatPostDate, type PostSummary } from "@/services/notionApi";
import { getNotionColor } from "@/utils/notionColors";


export type BlogPost = PostSummary;

interface PostListProps {
  posts: PostSummary[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  hrefPrefix?: string;
}

const gridStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
  gridAutoRows: "minmax(190px, auto)",
  gap: 3
};

const PostList = ({
  posts,
  loading,
  error,
  onRetry,
  hrefPrefix = "/blog"
}: PostListProps) => {
  const { t, i18n } = useTranslation();

  if (loading && posts.length === 0) {
    return (
      <Box sx={gridStyles} aria-label={t("blog.loading")} aria-busy="true">
        {[...Array(6)].map((_, index) => (
          <BentoCard key={index} colSpan={2} rowSpan={1}>
            <Skeleton variant="text" width="35%" height={22} />
            <Skeleton variant="text" width="72%" height={36} sx={{ mt: 1 }} />
            <Skeleton variant="text" width="100%" height={24} />
            <Skeleton variant="text" width="62%" height={24} />
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
        borderRadius: "20px",
        bgcolor: "color-mix(in srgb, var(--red-100), transparent 94%)"
      }}>
        <H3 sx={{ color: "var(--text-main)", fontSize: "20px" }}>
          {t("blog.loadErrorTitle")}
        </H3>
        <Paragraph sx={{ color: "var(--text-sub)", fontSize: "15px" }}>
          {t("blog.loadErrorDesc")}
        </Paragraph>
        <Button
          variant="outlined"
          startIcon={<FaArrowRotateRight />}
          onClick={onRetry}
          sx={{
            minHeight: "44px",
            mt: 1,
            color: "var(--text-main)",
            borderColor: "color-mix(in srgb, var(--text-main), transparent 35%)",
            textTransform: "none",
            borderRadius: "12px"
          }}>
          {t("blog.retry")}
        </Button>
      </Box>
    );
  }

  if (posts.length === 0) {
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 12,
        opacity: 0.72
      }}>
        <Box aria-hidden="true" sx={{ fontSize: "60px", color: "var(--text-sub)", mb: 2 }}>
          <FaRegFolderOpen />
        </Box>
        <H1 sx={{ color: "var(--text-main)", fontSize: "24px", fontWeight: 700, mb: 1 }}>
          {t("blog.noResultsTitle")}
        </H1>
        <H3 sx={{ color: "var(--text-sub)", fontSize: "16px" }}>
          {t("blog.noResultsDesc")}
        </H3>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative" }} aria-busy={loading}>
      {loading && (
        <LinearProgress aria-label={t("blog.loading")} sx={{
          position: "absolute",
          inset: "-12px 0 auto",
          borderRadius: 999,
          bgcolor: "color-mix(in srgb, var(--text-main), transparent 88%)",
          "& .MuiLinearProgress-bar": { bgcolor: "var(--text-main)" }
        }} />
      )}
      <Box sx={{
        ...gridStyles,
        opacity: loading ? 0.62 : 1,
        transition: "opacity 180ms cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        {posts.map((post) => (
          <BentoCard key={post.id} colSpan={2} rowSpan={1}>
            <Box
              component={RouterLink}
              to={`${hrefPrefix}/${post.id}`}
              aria-label={`${post.title} — ${t("blog.readArticle")}`}
              sx={{
                color: "inherit",
                textDecoration: "none",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                outline: "none",
                "&:focus-visible": {
                  boxShadow: "0 0 0 3px color-mix(in srgb, var(--text-main), transparent 45%)"
                },
                "&:hover h2": {
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "0.2em"
                }
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 1.5, color: "var(--text-sub)" }}>
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
                lineHeight: 1.35,
                mb: 1.25
              }}>
                {post.title || t("blog.untitled")}
              </H5>
              <Paragraph sx={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "var(--text-sub)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                mb: 2.5,
                flexGrow: 1
              }}>
                {post.summary}
              </Paragraph>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {post.tags.map((tag) => {
                  const color = getNotionColor(tag.color);

                  return (
                    <Chip
                      key={tag.name}
                      label={tag.name}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        bgcolor: `color-mix(in srgb, ${color}, transparent 82%)`,
                        color: "var(--text-main)",
                        border: `1px solid color-mix(in srgb, ${color}, transparent 55%)`
                      }} />
                  );
                })}
              </Box>
            </Box>
          </BentoCard>
        ))}
      </Box>
    </Box>
  );
};

export default PostList;