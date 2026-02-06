import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRegCalendar, FaRegFolderOpen } from "react-icons/fa6";
import { Box, Skeleton, Chip, Stack } from "@mui/material";
import { H1, H3, H5, Paragraph } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";


export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  tags: { name: string; color: string }[];
  updatedAt: string;
}

interface PostListProps {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const PostList = ({ posts, loading, error }: PostListProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (loading || error) {
    return (
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
        gridAutoRows: "minmax(180px, auto)",
        gap: 3
      }}>
        {[...Array(6)].map((_, i) => (
          <BentoCard key={i} colSpan={2} rowSpan={1}>
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="rectangular" height="100%" sx={{ mt: 2, borderRadius: 2 }} />
          </BentoCard>
        ))}
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
        opacity: 0.6
      }}>
        <Box sx={{ fontSize: "60px", color: "var(--text-sub)", mb: 2 }}>
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
    <Box sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      gridAutoRows: "minmax(180px, auto)",
      gap: 3
    }}>
      {posts.map((post) => (
        <BentoCard key={post.id} colSpan={2} rowSpan={1}>
          <Box
            sx={{
              cursor: "pointer",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 0);

              navigate(`/blog/${post.id}`);
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 1.5, opacity: 0.6 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                <FaRegCalendar />
              </Box>
              <Paragraph sx={{ lineHeight: 1, pt: "1px", fontSize: "12px" }}>
                {post.updatedAt}
              </Paragraph>
            </Stack>
            <H5 sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: 1.4,
              mb: 1
            }}>
              {post.title}
            </H5>
            <Paragraph sx={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--text-sub)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              mb: 2,
              flexGrow: 1
            }}>
              {post.summary}
            </Paragraph>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
              {post.tags.map((tag) => (
                <Chip
                  key={tag.name}
                  label={tag.name}
                  size="small"
                  sx={{
                    fontWeight: 500,
                    bgcolor: `color-mix(in srgb, ${tag.color}, transparent 70%)`,
                    color: "var(--text-main)",
                    border: `1px solid color-mix(in srgb, ${tag.color}, transparent 80%)`,
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: `color-mix(in srgb, ${tag.color}, transparent 50%)`
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </BentoCard>
      ))}
    </Box>
  );
};

export default PostList;