import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { title } from '../App';
import { about } from '../../Settings/Text';

const About: React.FC = () => (
  <Container fixed sx={{ width: "100%", height: "30%" }} id="About">
    <Typography align="center" variant="h3" sx={title}>About</Typography>
    <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128214;</Divider>
    <Typography align="center" variant="inherit" sx={{ m: 2, fontSize: "20px" }}>
      {about}
    </Typography>
  </Container>
);

export default About;