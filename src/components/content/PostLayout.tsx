import type { ReactNode } from "react";
import { Container } from "@mui/material";


interface PostLayoutProps {
  children: ReactNode;
}

function PostLayout({ children }: PostLayoutProps) {
  return (
    <Container maxWidth="lg" className="post-page" sx={{ flexGrow: 1, mb: 4 }}>
      {children}
    </Container>
  );
}

export default PostLayout;
