import { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useThemeModeContext } from '@context/ThemeModeContext';
import { DarkTheme, LightTheme } from '@assets/theme';
import Intro from '@components/About/Intro';
import TechStack from '@components/About/TechStack';
import AwardsCertifications from '@components/About/AwardsCertifications';
import Experience from '@components/About/Experience';


const About: FC = () => {
  const { themeMode } = useThemeModeContext();

  return (
    <Grid item id="about" sx={{ minHeight: '100vh', width: '100%' }}>
      <Box sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: (themeMode === 'dark') ? DarkTheme.InfoBackGroundColor : LightTheme.InfoBackGroundColor,
        color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor,
        px: { sm: 2, md: 4 },
        py: 4
      }}>
        <Grid container columns={12} sx={{ width: '100%', justifyContent: 'center' }}>
          <Grid item sm={10} md={5} xl={3} sx={{
            minHeight: '80vh',
            width: '100%',
            justifyContent: 'center',
            bgcolor: (themeMode === 'dark') ? DarkTheme.InfoCardColor : LightTheme.InfoCardColor,
            backdropFilter: 'blur(8px)',
            borderRadius: 5,
            m: 2
          }}>
            <Intro />
          </Grid>
          <Grid item sm={10} md={5} xl={7} sx={{
            minHeight: '80vh',
            width: '100%',
            justifyContent: 'center',
            bgcolor: (themeMode === 'dark') ? DarkTheme.InfoCardColor : LightTheme.InfoCardColor,
            backdropFilter: 'blur(8px)',
            borderRadius: 5,
            m: 2
          }}>
            <TechStack />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: (themeMode === 'dark') ? DarkTheme.AboutBackGroundColor : LightTheme.AboutBackGroundColor,
        color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor,
        px: { sm: 2, md: 4 },
        py: 4
      }}>
        <Grid container columns={12} sx={{ width: '100%', justifyContent: 'center' }}>
          <Grid item sm={10} md={5} xl={6} sx={{
            minHeight: '80vh',
            width: '100%',
            justifyContent: 'center',
            bgcolor: (themeMode === 'dark') ? DarkTheme.AboutCardColor : LightTheme.AboutCardColor,
            backdropFilter: 'blur(8px)',
            borderRadius: 5,
            m: 2
          }}>
            <Experience />
          </Grid>
          <Grid item sm={10} md={5} xl={4} sx={{
            minHeight: '80vh',
            width: '100%',
            justifyContent: 'center',
            bgcolor: (themeMode === 'dark') ? DarkTheme.AboutCardColor : LightTheme.AboutCardColor,
            backdropFilter: 'blur(8px)',
            borderRadius: 5,
            m: 2
          }}>
            <AwardsCertifications />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default About;