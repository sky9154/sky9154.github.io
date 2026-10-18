import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Button } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa6";
import type { PostCollection } from "@/services/notionApi";


interface PostLayoutProps {
  collection?: PostCollection;
  children: ReactNode;
  backPath: string;
  showBack?: boolean;
}

function PostLayout({ children, backPath, showBack = true, collection = "articles" }: PostLayoutProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" className="post-page" sx={{ flexGrow: 1, mb: 4 }}>
      {showBack && (
        <Button startIcon={<FaChevronLeft />} onClick={() => navigate(backPath)} sx={{
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
          {t(`${collection}.post.back`)}
        </Button>
      )}
      {children}
    </Container>
  );
}

export default PostLayout;
