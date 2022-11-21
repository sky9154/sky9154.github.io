import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { contact } from '../Settings/Data';
import { copyright } from '../Settings/Text';

type ThemeMode = {
  themeMode: string;
}

const ContactBtn: React.FC<ThemeMode> = ({ themeMode }) => {
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
                  href={link}
                  rel="noopener"
                  target="_blank"
                  sx={{ color: themeMode === "dark" ? "#FFF" : "#000" }}
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

const Footer: React.FC<ThemeMode> = ({ themeMode }) => {
  return (
    <Box component="footer" mt={5} sx={{ width: "100%", minHeight: "30%" }}>
      <Container fixed>
        <Divider variant="middle" />
        <Grid container spacing={2} justifyContent="space-around" sx={{ m: 2 }}>
          <Grid xs={12} sm={6}>
            <Typography align="center" variant="subtitle1">
              {copyright}
            </Typography>
          </Grid>
          <ContactBtn themeMode={themeMode} />
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;