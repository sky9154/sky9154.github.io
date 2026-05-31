import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import toast from "react-hot-toast";
import { Avatar, Box, Stack, IconButton } from "@mui/material";
import { H1, Paragraph } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";
import Profile from "@assets/images/Profile.png";
import { CONTACT } from "@assets/data/config";


const ProfileCard = () => {
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
    <BentoCard colSpan={2} rowSpan={2}>
      <Stack sx={{ height: "100%" }}>
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: { xs: "center", sm: "start" }, pb: 2 }}>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <H1 sx={{
              fontSize: "32px",
              lineHeight: 1.6,
              fontWeight: 700
            }}>
              {parse(t("about.title"))}
            </H1>
            <Paragraph sx={{
              opacity: 0.7,
              fontSize: "16px",
              lineHeight: 1.6
            }}>
              {t("about.subtitle")}
            </Paragraph>
          </Box>
          <Avatar src={Profile} alt="Profile" sx={{
            width: "84px",
            height: "84px",
            border: "2px solid var(--text-main)"
          }}
          />
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          {t("about.content").split("<br />").map((text, index, array) => (
            <Paragraph key={index} sx={{
              fontSize: "18px",
              lineHeight: 1.6,
              mb: (index < array.length - 1) ? 2 : 0
            }}>
              {text}
            </Paragraph>
          ))}
        </Box>
        <Stack direction="row" spacing={2} sx={{
          mt: 4,
          pt: 2,
          borderTop: "1px solid color-mix(in srgb, var(--text-main), transparent 90%)",
          justifyContent: { xs: "center", sm: "flex-start" }
        }}>
          {CONTACT.map((item) => (
            <IconButton
              key={item.name}
              aria-label={item.name}
              onClick={() => handleContactClick(item)}
              sx={{
                color: "var(--text-main)",
                transition: "all 0.2s",
                "&:hover": {
                  color: "var(--text-main)",
                  transform: "translateY(-3px)",
                  bgcolor: "color-mix(in srgb, var(--text-main), transparent 90%)"
                }
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </BentoCard>
  );
};

export default ProfileCard;