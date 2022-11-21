import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { title } from '../App';
import { contact } from '../../Settings/Data';

type ThemeMode = {
  themeMode: string;
}

const ContactButton: React.FC<ThemeMode> = ({ themeMode }) => {
  return (
    <>
      {
        contact().map((item) => {
          const { name, icon, link } = item;

          const bgColor = name === 'Github' ? themeMode === 'dark' ? '#FFF' : item.color : item.color;
          const color = name === 'Github' ? themeMode === 'dark' ? item.color : '#FFF' : '#FFF';

          const ContactButton = name === 'Instagram' ? styled(Button)(() => ({
            color: color,
            borderRadius: '10px',
            padding: '8px 24px',
            width: '100%',
          })) : styled(Button)(() => ({
            backgroundColor: bgColor,
            '&:hover': { backgroundColor: bgColor },
            color: color,
            borderRadius: '10px',
            padding: '8px 24px',
            width: '100%',
          }));

          return (
            <Grid key={name} xs={12} sm={6} md={4}>
              <ContactButton startIcon={icon} id={name}>
                <Link href={link} underline="none" rel="noopener" target="_blank" sx={{ color: color }}>{name}</Link>
              </ContactButton>
            </Grid>
          );
        })
      }
    </>
  );
}

const Contact: React.FC<ThemeMode> = ({ themeMode }) => {
  return (
    <Container fixed sx={{ width: "100%", height: "30%" }} id="Contact">
      <Typography align="center" variant="h3" sx={title}>Contact</Typography>
      <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128236;</Divider>
      <Grid container spacing={2} sx={{ m: 2 }}>
        <ContactButton themeMode={themeMode} />
      </Grid>
    </Container>
  );
};

export default Contact;