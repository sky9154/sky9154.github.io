import React from 'react';
import Box from '@mui/material/Box';
import Cover from './Content/Cover';
import About from './Content/About';
import TechStack from './Content/TechStack';
import Contact from './Content/Contact';

type App = {
  themeMode: string;
  setOpen: (state: boolean) => void;
}

const Content: React.FC<App> = ({ themeMode, setOpen }) => {
  return (
    <Box component="main">
      <Cover themeMode={themeMode} />
      <About />
      <TechStack themeMode={themeMode} />
      <Contact themeMode={themeMode} setOpen={setOpen} />
    </Box>
  );
};

export default Content;