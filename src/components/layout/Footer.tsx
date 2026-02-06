import { Box, Container, Grid, IconButton, Stack } from "@mui/material";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Paragraph } from "@components/ui/Typography";
import { CONTACT, COPYRIGHT } from "@assets/data/config";


const Footer = () => {
  const { t } = useTranslation();

  const handleContactClick = (item: typeof CONTACT[0]) => {
    switch (item.action) {
      case "copy":
        navigator.clipboard.writeText(item.link).then(() => {
          toast.success(t("copyDiscordInfo"));
        });
        break;
      case "open":
      default:
        window.open(item.link, "_blank", "noopener,noreferrer");
        break;
    }
  };

  return (
    <Box component="footer" sx={{ bgcolor: "var(--footer-bg)", py: 3 }}>
      <Container fixed>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Paragraph sx={{ color: "var(--text-main)", textAlign: "center" }}>
            {COPYRIGHT}
          </Paragraph>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
              {CONTACT.map((item) => (
                <IconButton
                  key={item.name}
                  aria-label={item.name}
                  size="small"
                  onClick={() => handleContactClick(item)}
                  sx={{ color: "var(--text-main)" }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;