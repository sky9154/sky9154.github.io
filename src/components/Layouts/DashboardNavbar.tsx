import { useState, cloneElement, ReactElement } from 'react';
import { FaBars } from 'react-icons/fa6';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useThemeModeContext } from '@context/ThemeModeContext';
import ThemeModeButton from '@components/Button/ThemeModeButton';
import { H2, H3 } from '@components/Typography';
import { Title, MenuList } from '@assets/data/config';
import { DarkTheme, LightTheme } from '@assets/theme';


interface Props {
  children: ReactElement;
}

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return cloneElement(children, {
    elevation: (trigger) ? 4 : 0,
    style: {
      backdropFilter: (trigger) ? 'blur(5px)' : 'none'
    }
  });
}

const DashboardNavbar = ({ children }: Props) => {
  const { themeMode } = useThemeModeContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToAnchor = (name: string) => {
    const anchor = document.getElementById(name);

    if (anchor) {
      window.scrollTo(0, anchor.offsetTop - 84);
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: 'center',
      bgcolor: (themeMode === 'dark') ? DarkTheme.DashboardNavbarColor : LightTheme.DashboardNavbarColor,
      color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
    }}>
      <H2 sx={{ my: 2 }}>{Title.main}</H2>
      <Divider />
      <List>
        {MenuList.map((item, index) => (
          <ListItem key={`menu-${index}`} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToAnchor(item.key)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar component="nav">
          <Toolbar sx={{
            height: '84px',
            justifyContent: 'flex-end',
            bgcolor: (themeMode === 'dark') ? DarkTheme.DashboardNavbarColor : LightTheme.DashboardNavbarColor,
            color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
          }}>
            <ThemeModeButton />
            <Button
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', sm: 'none' }, order: { xs: 2, sm: 1 } }}
            >
              <H2><FaBars /></H2>
            </Button>
            <H2 sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>{Title.main}</H2>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {MenuList.map((item) => (
                <Button
                  key={item.key}
                  sx={{ color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor }}
                  onClick={() => scrollToAnchor(item.key)}
                >
                  <H3>{item.name}</H3>
                </Button>
              ))}
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
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: '100%' }}>
        {children}
      </Box>
    </Box >
  );
}

export default DashboardNavbar;