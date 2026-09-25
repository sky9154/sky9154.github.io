import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Skeleton } from "@mui/material";


const BlogPost = lazy(() => import("@pages/BlogPost"));

const BlogPostRoute = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={(
      <Container maxWidth="lg" sx={{ flexGrow: 1, pt: "116px", mb: 8 }}>
        <Box aria-busy="true" aria-label={t("blog.loading")}>
          <Skeleton variant="text" width="24%" height={32} />
          <Skeleton variant="text" width="72%" height={72} sx={{ mt: 2 }} />
          <Skeleton variant="text" width="42%" height={28} sx={{ mb: 4 }} />
          <Skeleton variant="rectangular" height={360} sx={{ borderRadius: 3 }} />
        </Box>
      </Container>
    )}>
      <BlogPost />
    </Suspense>
  );
};

export default BlogPostRoute;