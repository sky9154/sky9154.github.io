import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Box, Button } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa6";
import PostSkeleton from "@components/blog/PostSkeleton";
import PostError from "@components/blog/PostError";
import PostHeader from "@components/blog/PostHeader";
import PostContent from "@components/blog/PostContent";


interface NotionPost {
  metadata: {
    id: string;
    created_time: string;
    last_edited_time: string;
    properties: {
      Title: { title: Array<{ plain_text: string }> };
      Tags: { multi_select: Array<{ id: string; name: string; color: string }> };
      Updated: { last_edited_time: string };
      Category: { select: { name: string; color: string } };
    };
  };
  markdown: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [postData, setPostData] = useState<NotionPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://notion.sky9154.com/blog/${id}`);
        if (!response.ok) {
          throw new Error("API Error");
        }

        const data: NotionPost = await response.json();
        setPostData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <Container maxWidth="lg" sx={{
      flexGrow: 1,
      pt: "84px",
      my: 4,
      minHeight: "100dvh"
    }}>
      {(loading) ? (
        <PostSkeleton />
      ) : (!postData) ? (
        <PostError />
      ) : (
        <Box>
          <Button
            startIcon={<FaChevronLeft />}
            onClick={() => navigate("/blog")}
            sx={{
              mb: 4,
              color: "var(--text-sub)",
              textTransform: "none",
              fontSize: "16px"
            }}
          >
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