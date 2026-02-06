import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Box, Link } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { H1, H2, H3, Paragraph } from "@components/ui/Typography";
import PostCodeBlock from "@components/blog/PostCodeBlock";


type MarkdownElementProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  node?: unknown;
};

interface PostContentProps {
  markdown: string;
}

const PostContent = ({ markdown }: PostContentProps) => {
  return (
    <Box sx={{
      color: "var(--text-main)",
      fontSize: "18px",
      lineHeight: 1.8,
      "& img": {
        maxWidth: "100%",
        borderRadius: 2,
        my: 2
      },
      "& ul, & ol": { pl: 3, mb: 2, fontSize: "16px" },
      "& li": { mb: 1, fontSize: "16px" },
      "& blockquote": {
        borderLeft: "4px solid var(--text-main)",
        pl: 2,
        py: 1,
        my: 2,
        bgcolor: "color-mix(in srgb, var(--text-main), transparent 95%)",
        borderRadius: "0 8px 8px 0",
        color: "var(--text-sub)",
        fontSize: "16px",
        "& p": {
          margin: 0,
          padding: 0
        }
      },
      "& strong": {
        fontWeight: 700,
        fontSize: "16px",
        color: "inherit"
      },
      "& .markdown-table-container": {
        overflowX: "auto",
        my: 2,
        borderRadius: "8px",
        border: "2px solid var(--text-sub)"
      }
    }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }: MarkdownElementProps<"h1">) => {
            void node;
            return <H1 {...props} sx={{
              fontSize: "28px",
              fontWeight: 800,
              my: 2,
              lineHeight: 1.3
            }} />;
          },
          h2: ({ node, ...props }: MarkdownElementProps<"h2">) => {
            void node;
            return <H2 {...props} sx={{
              fontSize: "24px",
              fontWeight: 700,
              my: 2,
              lineHeight: 1.35
            }} />;
          },
          h3: ({ node, ...props }: MarkdownElementProps<"h3">) => {
            void node;
            return <H3 {...props} sx={{
              fontSize: "20px",
              fontWeight: 600,
              my: 2,
              lineHeight: 1.4
            }} />;
          },
          p: ({ node, ...props }: MarkdownElementProps<"p">) => {
            void node;
            return <Paragraph {...props} sx={{
              fontSize: "16px",
              lineHeight: 1.8,
              mb: 1,
              letterSpacing: "1.6px"
            }} />;
          },
          b: ({ node, ...props }: MarkdownElementProps<"b">) => {
            void node;
            return <Box component="span" sx={{ fontWeight: "bold" }} {...props} />;
          },
          a: ({ node, ...props }: MarkdownElementProps<"a">) => {
            void node;
            return (
              <Link
                sx={{
                  color: "var(--blue-150)",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer"
                }}
                {...props}
              />
            );
          },
          table: ({ node, ...props }: MarkdownElementProps<"table">) => {
            void node;
            return (
              <Box className="markdown-table-container">
                <Box component="table" sx={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  fontSize: "16px",
                  lineHeight: "1.6",
                  textAlign: "left"
                }} {...props} />
              </Box>
            );
          },
          thead: ({ node, ...props }: MarkdownElementProps<"thead">) => {
            void node;
            return (
              <Box component="thead" sx={{
                bgcolor: "var(--table-header-bg)",
                color: "var(--text-main)",
                whiteSpace: "nowrap"
              }} {...props} />
            );
          },
          th: ({ node, ...props }: MarkdownElementProps<"th">) => {
            void node;
            return (
              <Box component="th" sx={{
                p: 2,
                fontWeight: 700,
                borderBottom: "2px solid var(--text-sub)",
                borderRight: "2px solid var(--text-sub)",
                "&:last-child": { borderRight: "none" }
              }} {...props} />
            );
          },
          td: ({ node, ...props }: MarkdownElementProps<"td">) => {
            void node;
            return (
              <Box component="td" sx={{
                p: 2,
                borderBottom: "2px solid var(--text-sub)",
                borderRight: "2px solid var(--text-sub)",
                "&:last-child": { borderRight: "none" },
                transition: "color 0.2s"
              }} {...props} />
            );
          },
          tr: ({ node, ...props }: MarkdownElementProps<"tr">) => {
            void node;
            return (
              <Box component="tr" sx={{
                "&:nth-of-type(even)": { bgcolor: "color-mix(in srgb, var(--text-sub), transparent 90%)" },
                transition: "background-color 0.2s",
                "&:last-child td": { borderBottom: 0 },
                "tbody &:hover": {
                  bgcolor: "color-mix(in srgb, var(--text-sub), transparent 80%)"
                }
              }} {...props} />
            );
          },
          code: PostCodeBlock
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box >
  );
};

export default PostContent;