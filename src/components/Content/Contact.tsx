import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { title, block } from '../App';
import { contact } from '../../settings/Data';
import { Box } from '@mui/material';

type App = {
  themeMode: string;
  setOpen: (state: boolean) => void;
}

const ContactButton: React.FC<App> = ({ themeMode, setOpen }) => {
  const handleClick = (link: string) => {
    if (link === '#Discord') {
      navigator.clipboard.writeText('oF#9998');

      setOpen(true);
    } else {
      window.open(link);
    }
  }

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
              <ContactButton startIcon={icon} id={name} onClick={() => handleClick(link)}>
                {name}
              </ContactButton>
            </Grid>
          );
        })
      }
    </>
  );
}

const Contact: React.FC<App> = ({ themeMode, setOpen }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={block} id="Contact">
      <Container fixed>
        <Typography align="center" variant="h2" sx={title}>Contact</Typography>
        <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128236;</Divider>
        <Grid container spacing={2} sx={{ m: 2 }}>
          <ContactButton themeMode={themeMode} setOpen={setOpen} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;