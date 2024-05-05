import { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { H2 } from '@components/Typography';
import { useThemeModeContext } from '@context/ThemeModeContext';
import { DarkTheme, LightTheme } from '@assets/theme';


interface Props {
  page: number;
  setPage: (page: number) => void;
  setType: (type: 'prev' | 'next') => void;
}

export const PrevPageButton: FC<Props> = ({ page, setPage, setType }) => {
  const { themeMode } = useThemeModeContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{
      display: (matches) ? 'flex' : 'none',
      position: 'absolute',
      alignItems: 'center',
      height: '100%',
      left: 0
    }}>
      <H2>
        <IconButton onClick={() => {
          setPage((page === 0) ? 4 : 0);
          setType('prev');
        }}>
          <FaAngleLeft style={{
            color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
          }} />
        </IconButton>
      </H2>
    </Box>
  );
}

export const NextPageButton: FC<Props> = ({ page, setPage, setType }) => {
  const { themeMode } = useThemeModeContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{
      display: (matches) ? 'flex' : 'none',
      position: 'absolute',
      alignItems: 'center',
      height: '100%',
      right: 0
    }}>
      <H2>
        <IconButton onClick={() => {
          setPage((page === 4) ? 0 : 4);
          setType('next');
        }}>
          <FaAngleRight style={{
            color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
          }} />
        </IconButton>
      </H2>
    </Box>
  );
}