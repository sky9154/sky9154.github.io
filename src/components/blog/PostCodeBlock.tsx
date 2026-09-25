import { useState, type ComponentPropsWithoutRef } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box, Button } from "@mui/material";
import { FaCheck, FaCopy } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Paragraph } from "@components/ui/Typography";


SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("shell", bash);
SyntaxHighlighter.registerLanguage("sh", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("html", markup);
SyntaxHighlighter.registerLanguage("xml", markup);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("py", python);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("yml", yaml);

export interface PostCodeBlockProps extends ComponentPropsWithoutRef<"code"> {
  node?: unknown;
  inline?: boolean;
}

const PostCodeBlock = ({ inline, className, children, ...props }: PostCodeBlockProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const match = /language-([\w-]+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");

  if (inline || !match) {
    return (
      <code
        style={{
          padding: "2px 6px",
          borderRadius: "4px",
          backgroundColor: "color-mix(in srgb, var(--inline-code-bg), transparent 85%)",
          color: "var(--inline-code-text)",
          fontFamily: "var(--font-code)"
        }}
        {...props}>
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Box sx={{
      my: 3,
      borderRadius: "14px",
      overflow: "hidden",
      border: "1px solid color-mix(in srgb, var(--white), transparent 86%)",
      bgcolor: "var(--gray-950)"
    }}>
      <Box sx={{
        px: 2,
        py: 1,
        bgcolor: "color-mix(in srgb, var(--gray-950), var(--white) 5%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        borderBottom: "1px solid color-mix(in srgb, var(--white), transparent 88%)"
      }}>
        <Paragraph sx={{
          fontSize: "12px",
          color: "var(--gray-100)",
          textTransform: "uppercase",
          letterSpacing: "0.08em"
        }}>
          {match[1]}
        </Paragraph>
        <Button
          size="small"
          startIcon={copied ? <FaCheck /> : <FaCopy />}
          onClick={() => void handleCopy()}
          aria-live="polite"
          sx={{
            minHeight: "36px",
            color: "var(--gray-100)",
            textTransform: "none",
            borderRadius: "8px",
            "&:hover": { bgcolor: "color-mix(in srgb, var(--white), transparent 90%)" }
          }}>
          {copied ? t("blog.codeCopied") : t("blog.copyCode")}
        </Button>
      </Box>
      <SyntaxHighlighter
        language={match[1].toLowerCase()}
        PreTag="div"
        useInlineStyles
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "20px",
          fontSize: "14px",
          fontFamily: "var(--font-code)",
          lineHeight: "1.7",
          borderRadius: 0,
          overflowX: "auto"
        }}
        codeTagProps={{ style: { fontFamily: "inherit" } }}
        style={okaidia}>
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default PostCodeBlock;