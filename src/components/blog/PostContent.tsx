import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Box, Link } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { H2, H3, Paragraph } from "@components/ui/Typography";
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
      width: "100%",
      maxWidth: "78ch",
      mx: "auto",
      fontSize: "17px",
      lineHeight: 1.8,
      "& img": {
        display: "block",
        height: "auto",
        maxWidth: "100%",
        borderRadius: "16px",
        my: 3
      },
      "& ul, & ol": { pl: 3, mb: 3, fontSize: "17px" },
      "& li": { mb: 1, fontSize: "17px", pl: 0.5 },
      "& blockquote": {
        borderLeft: "4px solid var(--text-main)",
        pl: 2,
        py: 1,
        my: 2,
        bgcolor: "color-mix(in srgb, var(--text-main), transparent 95%)",
        borderRadius: "0 8px 8px 0",
        color: "var(--text-sub)",
        fontSize: "17px",
        "& p": {
          margin: 0,
          padding: 0
        }
      },
      "& strong": {
        fontWeight: 700,
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
            return <H2 {...props} sx={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 800,
              mt: 6,
              mb: 2,
              lineHeight: 1.25,
              scrollMarginTop: "96px"
            }} />;
          },
          h2: ({ node, ...props }: MarkdownElementProps<"h2">) => {
            void node;
            return <H2 {...props} sx={{
              fontSize: "clamp(24px, 3vw, 30px)",
              fontWeight: 700,
              mt: 5,
              mb: 2,
              lineHeight: 1.3,
              scrollMarginTop: "96px"
            }} />;
          },
          h3: ({ node, ...props }: MarkdownElementProps<"h3">) => {
            void node;
            return <H3 {...props} sx={{
              fontSize: "21px",
              fontWeight: 600,
              mt: 4,
              mb: 1.5,
              lineHeight: 1.4,
              scrollMarginTop: "96px"
            }} />;
          },
          p: ({ node, ...props }: MarkdownElementProps<"p">) => {
            void node;
            return <Paragraph {...props} sx={{
              fontSize: "17px",
              lineHeight: 1.9,
              mb: 2,
              letterSpacing: "0.035em"
            }} />;
          },
          b: ({ node, ...props }: MarkdownElementProps<"b">) => {
            void node;
            return <Box component="span" sx={{ fontWeight: "bold" }} {...props} />;
          },
          a: ({ node, href = "", ...props }: MarkdownElementProps<"a">) => {
            void node;
            const isExternal = /^https?:\/\//i.test(href);

            return (
              <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                sx={{
                  color: "var(--blue-150)",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "0.18em",
                  "&:hover": { textDecorationThickness: "2px" },
                  "&:focus-visible": {
                    outline: "3px solid color-mix(in srgb, var(--blue-150), transparent 55%)",
                    outlineOffset: "3px",
                    borderRadius: "2px"
                  }
                }}
                {...props} />
            );
          },
          img: ({ node, alt = "", ...props }: MarkdownElementProps<"img">) => {
            void node;
            return <img loading="lazy" decoding="async" alt={alt} {...props} />;
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
        }}>
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default PostContent;