import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { contact } from '../settings/Data';
import { copyright } from '../settings/Text';

type App = {
  themeMode: string;
  setOpen: (state: boolean) => void;
}

const ContactBtn: React.FC<App> = ({ themeMode, setOpen }) => {
  const handleClick = (link: string) => {
    if (link === '#Discord') {
      navigator.clipboard.writeText('oF#9998');

      setOpen(true);
    } else {
      window.open(link);
    }
  }

  return (
    <Grid xs={12} sm={6}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        {
          contact().map((item) => {
            const { name, icon, link } = item;

            if (name !== 'Email') {
              return (
                <IconButton
                  key={name}
                  aria-label={name}
                  size="small"
                  sx={{ color: themeMode === "dark" ? "#FFF" : "#3C3C3C" }}
                  onClick={() => handleClick(link)}
                >
                  {icon}
                </IconButton>
              );
            }
          })
        }
      </Stack>
    </Grid>
  );
}

const Footer: React.FC<App> = ({ themeMode, setOpen }) => {
  return (
    <Box component="footer" display="flex" justifyContent="center" alignItems="center">
      <Container fixed>
        <Divider variant="middle" />
        <Grid container spacing={2} justifyContent="space-around" sx={{ m: 2 }}>
          <Grid xs={12} sm={6}>
            <Typography align="center" variant="body1">
              {copyright}
            </Typography>
          </Grid>
          <ContactBtn themeMode={themeMode} setOpen={setOpen} />
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;