import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { title } from '../App';

const About: React.FC = () => (
  <Container fixed sx={{ width: "100%", height: "30%" }} id="About">
    <Typography align="center" variant="h3" sx={title}>About</Typography>
    <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128214;</Divider>
    <Typography align="center" variant="inherit" sx={{ m: 2, fontSize: "20px" }}>
      Hi, there&#128075;! I'm oF.<br />
      Welcome to my personal website.<br />
      I'm a junior majoring in ICE.<br />
      And I have worked for Andor Ltd.<br />
      Specialty is Frontend Development.
    </Typography>
  </Container>
);

export default About;