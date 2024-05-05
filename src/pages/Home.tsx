import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Cover from '@content/Cover';
import About from '@content/About';
import Project from '@content/Project';
import Footer from '@content/Footer';


const Home: FC = () => {
  return (
    <Grid container direction="column" sx={{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Cover />
      <About />
      <Project />
      <Footer />
    </Grid>
  );
}

export default Home;