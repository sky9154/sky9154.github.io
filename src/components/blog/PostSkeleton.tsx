import { Box, Skeleton, Divider } from "@mui/material";


const PostSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="text" width="60%" height={60} />
      <Skeleton variant="text" width="40%" height={30} sx={{ mb: 4 }} />
      <Divider sx={{ mb: 3, borderColor: "var(--text-main)" }} />
      <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} />
    </Box>
  );
};

export default PostSkeleton;