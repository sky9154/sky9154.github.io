import { useState, cloneElement, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import {
  AppBar, Box, Button, Divider, Drawer,
  List, ListItem, ListItemButton, ListItemText, Toolbar,
  IconButton, useScrollTrigger
} from "@mui/material";
import ThemeModeButton from "@components/ui/ThemeModeButton";
import LanguageButton from "@components/ui/LanguageButton";
import { H2, H3 } from "@components/ui/Typography";
import { MENU_LIST } from "@assets/data/config";


interface ElevationScrollProps {
  children: ReactElement;
}

const NAV_HEIGHT = "84px";

const ElevationScroll = ({ children }: ElevationScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return cloneElement(children, {
    elevation: (trigger) ? 4 : 0,
    style: {
      backdropFilter: (trigger) ? "blur(10px)" : "none",
      transition: "all 0.3s ease",
      bgcolor: (trigger) ? undefined : "transparent"
    },
  });
};

const DashboardNavbar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: "center",
      bgcolor: "var(--nav-bg)",
      color: "var(--text-main)",
      height: "100%",
      minWidth: "250px"
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: NAV_HEIGHT
      }}>
        <H2>{t("title")}</H2>
      </Box>
      <Divider sx={{ borderColor: "#FFFFFF1A" }} />
      <List>
        {MENU_LIST.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{ textAlign: "center", color: "inherit", textDecoration: "none" }}>
              <ListItemText
                primary={t(`navbar.${item.key}`)}
                primaryTypographyProps={{
                  style: { fontSize: "18px", color: "inherit" }
                }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar component="nav" position="fixed" sx={{
          bgcolor: "var(--nav-bg)",
          color: "var(--text-main)"
        }}>
          <Toolbar sx={{ height: NAV_HEIGHT, justifyContent: "space-between" }}>
            <H2 sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1, flexShrink: 0 }}>{t("title")}</H2>
            <Button
              component={IconButton}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, px: 2 }}
            >
              <H3 sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px"
              }}>
                <FaBars />
              </H3>
            </Button>
            <Box sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center"
            }}>
              {MENU_LIST.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.link}
                  sx={{
                    textAlign: "center",
                    color: "inherit",
                    textDecoration: "none",
                    flexShrink: 0
                  }}>
                  <H3>{t(`navbar.${item.key}`)}</H3>
                </Button>
              ))}
            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              ml: 1
            }}>
              <ThemeModeButton />
              <LanguageButton />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { md: "none" } }}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </>
  );
};

export default DashboardNavbar;