import type { ComponentPropsWithoutRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box } from "@mui/material";
import { Paragraph } from "@components/ui/Typography";


export interface PostCodeBlockProps extends ComponentPropsWithoutRef<"code"> {
  node?: unknown;
  inline?: boolean;
}

const PostCodeBlock = ({ inline, className, children, ...props }: PostCodeBlockProps) => {
  const match = /language-(\w+)/.exec(className || "");

  if (inline || !match) {
    return (
      <code style={{
        padding: "2px 6px",
        borderRadius: "4px",
        backgroundColor: "color-mix(in srgb, var(--inline-code-bg), transparent 85%)",
        color: "var(--inline-code-text)"
      }}
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <Box sx={{
      my: 2,
      borderRadius: 2,
      overflow: "hidden"
    }}>
      <Box sx={{
        px: 2,
        py: 1.5,
        bgcolor: "var(--gray-950)",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}>
        {["var(--red-100)", "var(--yellow-100)", "var(--green-500)"].map((color) => (
          <Box key={color} sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: color
          }} />
        ))}
        <Paragraph sx={{
          ml: "auto",
          fontSize: "14px",
          color: "var(--gray-600)",
          textTransform: "uppercase"
        }}>
          {match[1]}
        </Paragraph>
      </Box>

      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        useInlineStyles={true}
        customStyle={{
          margin: 0,
          padding: "20px",
          fontSize: "16px",
          fontFamily: "var(--font-code) !important",
          lineHeight: "1.6",
          borderRadius: 0
        }}
        {...props}
        style={okaidia}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </Box>
  );
};

export default PostCodeBlock;