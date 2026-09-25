import { useTranslation } from "react-i18next";
import { FaRegCalendar } from "react-icons/fa6";
import { Box, Chip, Divider, Stack } from "@mui/material";
import { H1, Paragraph } from "@components/ui/Typography";
import { formatPostDate, type PostMetadata } from "@/services/notionApi";
import { getNotionColor } from "@/utils/notionColors";


interface PostHeaderProps {
  metadata: PostMetadata;
}

const PostHeader = ({ metadata }: PostHeaderProps) => {
  const { t, i18n } = useTranslation();

  const title = metadata.title || t("blog.untitled");
  const date = formatPostDate(
    metadata.updatedAt,
    i18n.resolvedLanguage || i18n.language
  );

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <H1 sx={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 700,
          mb: 3,
          color: "var(--text-main)",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          maxWidth: "none",
          width: "100%"
        }}>
          {title}
        </H1>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap"
        }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ color: "var(--text-sub)" }}>
            <Box sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
              <FaRegCalendar />
            </Box>
            <Paragraph sx={{ lineHeight: 1, pt: "1px" }}>
              {date}
            </Paragraph>
          </Stack>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
            {metadata.tags.map((tag) => {
              const color = getNotionColor(tag.color);

              return (
                <Chip
                  key={tag.id || tag.name}
                  label={tag.name}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    bgcolor: `color-mix(in srgb, ${color}, transparent 82%)`,
                    color: "var(--text-main)",
                    border: `1px solid color-mix(in srgb, ${color}, transparent 55%)`
                  }} />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mb: 3, borderColor: "var(--text-main)" }} />
    </>
  );
};

export default PostHeader;