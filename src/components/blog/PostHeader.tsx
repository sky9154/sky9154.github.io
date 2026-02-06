import { useTranslation } from "react-i18next";
import { FaRegCalendar } from "react-icons/fa6";
import { Box, Chip, Divider, Stack } from "@mui/material";
import { H1, Paragraph } from "@components/ui/Typography";


interface PostHeaderProps {
  metadata: {
    properties: {
      Title: { title: Array<{ plain_text: string }> };
      Tags: { multi_select: Array<{ id: string; name: string; color: string }> };
      Updated: { last_edited_time: string };
    };
  };
}

const PostHeader = ({ metadata }: PostHeaderProps) => {
  const { t } = useTranslation();

  const title = metadata.properties.Title.title
    .map((t) => t.plain_text)
    .join("") || t("blog.untitled");

  const date = new Date(metadata.properties.Updated.last_edited_time).toLocaleDateString();
  const tags = metadata.properties.Tags.multi_select;

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <H1 sx={{
          fontSize: "32px",
          fontWeight: 700,
          mb: 3,
          color: "var(--text-main)",
          lineHeight: 1.3
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
            sx={{ color: "var(--text-sub)" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
              <FaRegCalendar />
            </Box>
            <Paragraph sx={{ lineHeight: 1, pt: "1px" }}>
              {date}
            </Paragraph>
          </Stack>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
            {tags.map((tag) => (
              <Chip
                key={tag.name}
                label={tag.name}
                size="small"
                sx={{
                  fontWeight: 500,
                  bgcolor: `color-mix(in srgb, ${tag.color}, transparent 70%)`,
                  color: "var(--text-main)",
                  border: `1px solid color-mix(in srgb, ${tag.color}, transparent 80%)`,
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: `color-mix(in srgb, ${tag.color}, transparent 50%)`
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mb: 3, borderColor: "var(--text-main)" }} />
    </>
  );
};

export default PostHeader;