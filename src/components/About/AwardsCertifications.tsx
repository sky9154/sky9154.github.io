import { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { H1, Paragraph } from '@components/Typography';
import { FadeIn } from '@components/Anime';
import { Title } from '@assets/data/config';
import { awards, certifications } from '@assets/data/awardsCertifications';


const AwardsCertifications: FC = () => (
  <Stack
    direction="column"
    justifyContent="center"
    spacing={4}
    sx={{ width: '100%', p: 4 }}
  >
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {Title.about.awards.icon}
        <H1>{Title.about.awards.name}</H1>
      </Box>
      {awards.map((item, index) => (
        <FadeIn key={`award-${index}`} start={[0, 50]} delay={0.3 + index * 0.2}>
          <Paragraph key={`award-${index}`} sx={{ fontSize: '20px', my: 3 }}>
            {item.name}<br />- {item.rank}
          </Paragraph>
        </FadeIn>
      ))}
    </Box>
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {Title.about.certifications.icon}
        <H1> {Title.about.certifications.name}</H1>
      </Box>
      {certifications.map((item, index) => (
        <FadeIn key={`certification-${index}`} start={[0, 50]} delay={0.7 + index * 0.2}>
          <Paragraph key={`certification-${index}`} sx={{ fontSize: '20px', my: 3 }}>
            {item.name}
          </Paragraph>
        </FadeIn>
      ))}
    </Box>
  </Stack>
);

export default AwardsCertifications;