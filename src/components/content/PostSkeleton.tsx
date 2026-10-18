import { useTranslation } from "react-i18next";
import { Box, Skeleton } from "@mui/material";

import PostHeader from "@components/content/PostHeader";
import type { PostCollection } from "@/services/notionApi";


function PostSkeleton({ collection = "articles" }: { collection?: PostCollection }) {
  const { t } = useTranslation();

  return (
    <Box className="post-skeleton" aria-busy="true" aria-label={t(`${collection}.loading`)}>
      <PostHeader collection={collection} />
      <Box className="article-reading">
        {[0, 1, 2].map((paragraph) => (
          <Box key={paragraph} sx={{ mb: 3 }}>
            {paragraph === 1 && <Skeleton variant="text" width="38%" sx={{ fontSize: "clamp(24px, 3vw, 30px)", mt: 5, mb: 2 }} />}
            {["100%", "96%", "88%", "64%"].map((width) => <Skeleton key={width} variant="text" width={width} sx={{ height: "1.9em" }} />)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PostSkeleton;
