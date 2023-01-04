import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { title, block } from '../App';
import { about } from '../../settings/Text';

const About: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" sx={block} id="About">
    <Container fixed>
      <Typography align="center" variant="h2" sx={title}>About</Typography>
      <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128214;</Divider>
      <Typography align="center" variant="inherit" sx={{ m: 2, fontSize: "24px" }}>
        {about}
      </Typography>
    </Container>
  </Box>
);

export default About;