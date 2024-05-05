import { FC } from 'react';
import toast from 'react-hot-toast';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Paragraph } from '@components/Typography';
import { useThemeModeContext } from '@context/ThemeModeContext';
import { DarkTheme, LightTheme } from '@assets/theme';
import { contact } from '@assets/data/contact';
import { copyright } from '@assets/data/config';


const ContactBtn: FC = () => {
  const { themeMode } = useThemeModeContext();

  const handleClick = (link: string) => {
    if (link === '#Discord') {
      navigator.clipboard.writeText('sky9154');

      toast.success('Copied "Discord ID" to clipboard !');
    } else {
      window.open(link);
    }
  }

  return (
    <Grid xs={12} sm={6}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        {contact.map((item) => (
          <IconButton
            key={item.name}
            aria-label={item.name}
            size="small"
            onClick={() => handleClick(item.link)}
            sx={{ color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>
    </Grid>
  );
}

const Footer: FC = () => {
  const { themeMode } = useThemeModeContext();

  return (
    <Box component="footer" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      bgcolor: (themeMode === 'dark') ? DarkTheme.FooterBackGroundColor : LightTheme.FooterBackGroundColor,
      color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
    }}>
      <Container fixed>
        <Divider variant="middle" />
        <Grid container spacing={2} justifyContent="space-around" sx={{ m: 2 }}>
          <Grid xs={12} sm={6}>
            <Paragraph textAlign="center" fontSize="14px">
              {copyright}
            </Paragraph>
          </Grid>
          <ContactBtn />
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;