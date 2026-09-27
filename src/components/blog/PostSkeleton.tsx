import { Box, Skeleton, Divider } from "@mui/material";


const PostSkeleton = () => {
  return (
    <Box sx={{
      border: "1px solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)", p: { xs: 2, sm: 4 },
      bgcolor: "var(--color-surface-subtle)"
    }}>
      <Skeleton variant="text" width="60%" height={60} />
      <Skeleton variant="text" width="40%" height={30} sx={{ mb: 4 }} />
      <Divider sx={{ mb: 3, borderColor: "var(--color-border-subtle)" }} />
      <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} />
    </Box>
  );
};

export default PostSkeleton;