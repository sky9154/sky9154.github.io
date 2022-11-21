import React from 'react';
import Box from '@mui/material/Box';
import Image from 'mui-image';
import Author from '../../assets/images/Author.png';
import DarkBgImage from '../../assets/images/DarkBgImage.png';
import LightBgImage from '../../assets/images/LightBgImage.png';

type ThemeMode = {
  themeMode: string;
}

const Cover: React.FC<ThemeMode> = ({ themeMode }) => {
  const bgImage = themeMode === 'dark' ? DarkBgImage : LightBgImage;

  return (
    <Box height="45vh" className="center" sx={{ backgroundImage: `url(${bgImage})` }}>
      <Image src={Author} height="30vh" width="30vh" duration={500} showLoading={true} className="center" />
    </Box>
  );
}

export default Cover;