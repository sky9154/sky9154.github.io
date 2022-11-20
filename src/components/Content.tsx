import React from 'react';
import Box from '@mui/material/Box';
import Cover from './Content/Cover';
import About from './Content/About';
import TechStack from './Content/TechStack';
import Contact from './Content/Contact';

type ThemeMode = {
  themeMode: string;
}

const Content: React.FC<ThemeMode> = ({ themeMode }) => {
  return (
    <Box component="main">
      <Cover themeMode={themeMode} />
      <About />
      <TechStack themeMode={themeMode} />
      <Contact themeMode={themeMode} />
    </Box>
  );
};

export default Content;