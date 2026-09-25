import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Box, Button } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa6";
import PostSkeleton from "@components/blog/PostSkeleton";
import PostError from "@components/blog/PostError";
import PostHeader from "@components/blog/PostHeader";
import PostContent from "@components/blog/PostContent";
import { fetchPostDetail, type PostDetail } from "@/services/notionApi";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const collection = location.pathname.startsWith("/projects/") ? "projects" : "blog";
  const backPath = collection === "projects" ? "/projects" : "/blog";

  const [postData, setPostData] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPost = async () => {
      if (!id) {
        setLoading(false);
        setError("Missing post id");
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const data = await fetchPostDetail(id, controller.signal, collection);
        setPostData(data);
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }

        setPostData(null);
        setError(fetchError instanceof Error ? fetchError.message : "Unable to load post");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    window.scrollTo({ top: 0, behavior: "auto" });
    void fetchPost();

    return () => controller.abort();
  }, [collection, id, retryKey]);

  return (
    <Container maxWidth="lg" sx={{
      flexGrow: 1,
      pt: "84px",
      my: 4
    }}>
      {(loading) ? (
        <PostSkeleton />
      ) : (!postData || error) ? (
        <PostError backPath={backPath} onRetry={() => setRetryKey((key) => key + 1)} />
      ) : (
        <Box>
          <Button
            startIcon={<FaChevronLeft />}
            onClick={() => navigate(backPath)}
            sx={{
              mb: 4,
              color: "var(--text-sub)",
              textTransform: "none",
              fontSize: "16px",
              minHeight: "44px",
              borderRadius: "10px",
              "&:focus-visible": {
                outline: "3px solid color-mix(in srgb, var(--text-main), transparent 45%)",
                outlineOffset: "3px"
              }
            }}>
            {t("blog.post.back")}
          </Button>
          <PostHeader metadata={postData.metadata} />
          <PostContent markdown={postData.markdown} />
        </Box>
      )}
    </Container>
  );
};

export default BlogPost;