import { useState, useEffect, cloneElement, ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import {
  AppBar, Box, Button, Divider, Drawer,
  List, ListItem, ListItemButton, ListItemText, Toolbar,
  IconButton, useScrollTrigger, useMediaQuery, type Theme
} from "@mui/material";
import ThemeModeButton from "@components/ui/ThemeModeButton";
import LanguageButton from "@components/ui/LanguageButton";
import { H2, H3 } from "@components/ui/Typography";
import { MENU_LIST } from "@assets/data/config";


interface ElevationScrollProps {
  children: ReactElement;
}

const NAV_HEIGHT = "var(--navbar-height)";

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
      transition: "background-color var(--motion-normal) var(--ease-standard), box-shadow var(--motion-normal) var(--ease-standard)"
    },
  });
};

const DashboardNavbar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopMenu = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  useEffect(() => {
    if (desktopMenu) setMobileOpen(false);
  }, [desktopMenu]);

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
        height: NAV_HEIGHT,
        color: "var(--color-accent)"
      }}>
        <H2>{t("title")}</H2>
      </Box>
      <Divider sx={{ borderColor: "var(--color-border-subtle)" }} />
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
        <AppBar component="nav" className="site-navbar" position="fixed" sx={{
          bgcolor: "var(--nav-bg)",
          color: "var(--text-main)"
        }}>
          <Toolbar sx={{ height: NAV_HEIGHT, justifyContent: "space-between", maxWidth: "1440px", width: "100%", mx: "auto", px: { xs: 2, sm: 3, lg: 6 } }}>
            <H2 sx={{
              display: { xs: "none", sm: "block" },
              flexGrow: 1,
              flexShrink: 0,
              fontSize: { sm: "20px", md: "24px" },
              color: "var(--color-accent)"
            }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                {t("title")}
              </Link>
            </H2>
            <Button
              component={IconButton}
              color="inherit"
              aria-label="open drawer"
              aria-expanded={mobileOpen}
              aria-controls={(mobileOpen) ? "mobile-navigation" : undefined}
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
              display: { xs: "none", sm: "grid" },
              gridTemplateColumns: { sm: "64px 84px 104px 84px", md: "88px 112px 124px 112px" },
              gap: { sm: 0, md: 1.5 },
              alignItems: "center"
            }}>
              {MENU_LIST.map((item) => (
                <Button
                  key={item.key}
                  component={NavLink}
                  end={item.link === "/"}
                  className="nav-link"
                  to={item.link}
                  sx={{
                    textAlign: "center",
                    color: "inherit",
                    textDecoration: "none",
                    flexShrink: 0
                  }}>
                  {t(`navbar.${item.key}`)}
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
          id="mobile-navigation"
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true, disableScrollLock: true }}
          sx={{ display: { sm: "none" } }}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </>
  );
};

export default DashboardNavbar;
