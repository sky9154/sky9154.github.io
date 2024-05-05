import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { FadeInRotate, FadeIn } from '@components/Anime';
import { aboutMe } from '@assets/data/content';
import Author from '@assets/images/Author.png';


const Intro: FC = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ width: '100%', py: 4, px: 2 }}
    >

      <FadeInRotate rotate={[0, 360]} delay={0.6}>
        <Avatar
          alt="oF"
          src={Author}
          sx={{ width: 196, height: 196 }}
        />
      </FadeInRotate>
      <FadeIn start={[0, 50]} delay={0.9}>
        {aboutMe}
      </FadeIn>
    </Stack >
  );
}

export default Intro;