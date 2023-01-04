import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeBtn from './ThemeBtn';
import { title, navItems } from '../settings/Text';

type Mobile = {
  mobileObj: {
    mobileOpen: boolean;
    setMobileOpen: (state: boolean) => void;
  }
}

type Theme = {
  themeObj: {
    themeMode: string;
    setThemeMode: (mode: 'dark' | 'light') => void;
  }
}
const scrollToAnchor = (name: string) => {
  const anchor = document.getElementById(name);

  if (anchor) {
    window.scrollTo(0, anchor.offsetTop - window.innerHeight / 3);
  }
}

const NavDrawer: React.FC<Mobile> = ({ mobileObj }) => {
  const { mobileOpen, setMobileOpen } = mobileObj;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const Item: JSX.Element[] = navItems.map((item) => (
    <ListItem key={item} disablePadding>
      <ListItemButton onClick={() => scrollToAnchor(item)} sx={{ textAlign: "center" }}>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  ));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>{title}</Typography>
      <Divider />
      <List>
        {Item}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

const TopBar: React.FC<Theme & Mobile> = ({ themeObj, mobileObj }) => {
  const { mobileOpen, setMobileOpen } = mobileObj;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const Item: JSX.Element[] = navItems.map((item) => (
    <Button key={item} onClick={() => scrollToAnchor(item)} sx={{ color: "#FFF", p: 2, fontWeight: 700 }}>
      {item}
    </Button>
  ));

  return (
    <AppBar component="nav" sx={{ py: "0.5rem" }}>
      <Toolbar>
        <IconButton aria-label="menu" color="inherit" onClick={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, fontWeight: 700 }}>
          {title}
        </Typography>
        <Box display="flex" flexGrow={1}></Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {Item}
        </Box>
        <ThemeBtn themeObj={themeObj} />
      </Toolbar>
    </AppBar>
  );
}

const Navbar: React.FC<Theme & Mobile> = ({ themeObj, mobileObj }) => (
  <>
    <TopBar themeObj={themeObj} mobileObj={mobileObj} />
    <NavDrawer mobileObj={mobileObj} />
  </>
);

export default Navbar;