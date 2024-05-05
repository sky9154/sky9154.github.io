import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ProjectList from '@components/Project/ProjectList';
import { PrevPageButton, NextPageButton } from '@components/Project/PageButton';
import { useThemeModeContext } from '@context/ThemeModeContext';
import { DarkTheme, LightTheme } from '@assets/theme';


const Project: FC = () => {
  const { themeMode } = useThemeModeContext();
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<'prev' | 'next'>('prev');

  return (
    <Grid item id="project" sx={{
      minHeight: '100vh',
      width: '100%'
    }}>
      <Box sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: (themeMode === 'dark') ? DarkTheme.ProjectBackGroundColor : LightTheme.ProjectBackGroundColor,
        color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor,
        px: { sm: 2, md: 4 },
        py: 4
      }}>
        <Stack
          direction="row"
          position="relative"
          justifyContent="center"
          alignItems="center"
        >
          <PrevPageButton page={page} setPage={setPage} setType={setType} />
          <Grid container columns={12} sx={{ justifyContent: 'center', width: '100%' }}>
            <ProjectList page={page} type={type} />
          </Grid>
          <NextPageButton page={page} setPage={setPage} setType={setType} />
        </Stack>
      </Box>
    </Grid>
  );
}

export default Project;