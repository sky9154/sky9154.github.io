import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { H1 } from '@components/Typography';
import { FadeIn } from '@components/Anime';
import { Title } from '@assets/data/config';
import { experience } from '@assets/data/content';


const Experience: FC = () => (
  <Stack
    direction="column"
    justifyContent="center"
    spacing={4}
    sx={{ width: '100%', p: 4 }}
  >
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {Title.about.experience.icon}
        <H1>{Title.about.experience.name}</H1>
      </Box>
      {experience.map((item, index) => (
        <FadeIn key={`experience-${index}`} start={[0, 50]} delay={0.3 + index * 0.2}>
          {item}
        </FadeIn>
      ))}
    </Box>
  </Stack>
);

export default Experience;