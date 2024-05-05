import { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DarkTheme, LightTheme } from '@assets/theme';
import MouseButton from '@components/Button/MouseButton';
import { FadeIn } from '@components/Anime';
import { useThemeModeContext } from '@context/ThemeModeContext';


const Cover: FC = () => {
  const { themeMode } = useThemeModeContext();

  return (
    <Grid item id="home" sx={{
      backgroundColor: (themeMode === 'dark') ? DarkTheme.InfoBackGroundColor : LightTheme.InfoBackGroundColor,
      backgroundImage: `url(${(themeMode === 'dark') ? DarkTheme.CoverBackgroundImage : LightTheme.CoverBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '80vh',
        pt: { xs: 20, sm: 16 }
      }}>
        <Box sx={{
          width: { xs: '100%', sm: '70%' }
        }}>
          <FadeIn start={[0, 100]}>
            <img
              src={(themeMode === 'dark') ? DarkTheme.CoverImage : LightTheme.CoverImage}
              alt="CoverImage"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </FadeIn>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '20vh'
      }}>
        <MouseButton />
      </Box>
    </Grid>
  );
}

export default Cover;