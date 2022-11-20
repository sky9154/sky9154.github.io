import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as si from 'react-icons/si';
import { title } from '../App';

type ThemeMode = {
  themeMode: string;
}

type groupObj = {
  name: string;
  icon: JSX.Element;
  bgColor: string;
  color: string;
}

type Groups = {
  name: string;
  groupObj: groupObj[];
}

const Group: React.FC<Groups> = ({ name, groupObj }) => {
  const group: JSX.Element[] = [];

  let temp: groupObj[] = [];

  groupObj.map((item, index) => {
    temp.push(item);

    if ((index + 1) % 3 === 0 || index === groupObj.length - 1) {
      group.push(
        <Box key={index} display="flex" sx={{ justifyContent: "center", alignItems: "center" }}>
          {
            temp.map((item) => {
              const { name, icon, bgColor, color } = item;

              return (
                <Tooltip key={name} title={name} followCursor>
                  <Avatar sx={{ bgcolor: bgColor, color: color, m: 0.5 }}>
                    {icon}
                  </Avatar>
                </Tooltip>
              );
            })
          }
        </Box>
      );

      temp = [];
    }
  });

  return (
    <Grid xs={12} sm={6} md={3}>
      <Typography align="center" variant="h5" sx={title}>{name}</Typography>
      {group}
    </Grid>
  );
};

const TechStack: React.FC<ThemeMode> = ({ themeMode }) => {
  const languages: groupObj[] = [{
    name: 'JavaScript',
    icon: <si.SiJavascript />,
    bgColor: '#F7DF1E',
    color: '#FFF'
  }, {
    name: 'TypeScript',
    icon: <si.SiTypescript />,
    bgColor: '#3178C6',
    color: '#FFF'
  }, {
    name: 'React',
    icon: <si.SiReact />,
    bgColor: '#61DAFB',
    color: '#FFF'
  }, {
    name: 'Node.JS',
    icon: <si.SiNodedotjs />,
    bgColor: '#339933',
    color: '#FFF'
  }, {
    name: 'Python',
    icon: <si.SiPython />,
    bgColor: '#3776AB',
    color: '#FFF'
  }, {
    name: 'Java',
    icon: <si.SiJava />,
    bgColor: '#5382A1',
    color: '#FFF'
  }, {
    name: 'Golang',
    icon: <si.SiGo />,
    bgColor: '#00ADD8',
    color: '#FFF'
  }, {
    name: 'PHP is the best programming language',
    icon: <si.SiPhp />,
    bgColor: '#777BB4',
    color: '#FFF'
  }];

  const tools: groupObj[] = [{
    name: 'Git',
    icon: <si.SiGit />,
    bgColor: '#F05032',
    color: '#FFF'
  }, {
    name: 'Docker',
    icon: <si.SiDocker />,
    bgColor: '#2496ED',
    color: '#FFF'
  }, {
    name: 'JetBrains',
    icon: <si.SiJetbrains />,
    bgColor: themeMode === 'dark' ? '#FFF' : '#000',
    color: themeMode === 'dark' ? '#000' : '#FFF'
  }, {
    name: 'Visual Studio Code',
    icon: <si.SiVisualstudiocode />,
    bgColor: '#007ACC',
    color: '#FFF'
  }, {
    name: 'Adobe PhotoShop',
    icon: <si.SiAdobephotoshop />,
    bgColor: '#31A8FF',
    color: '#FFF'
  }];

  const dbms: groupObj[] = [{
    name: 'MySQL',
    icon: <si.SiMysql />,
    bgColor: '#4479A1',
    color: '#FFF'
  }, {
    name: 'Microsoft SQL Server',
    icon: <si.SiMicrosoftsqlserver />,
    bgColor: '#CC2927',
    color: '#FFF'
  }, {
    name: 'MongoDB',
    icon: <si.SiMongodb />,
    bgColor: '#47A248',
    color: '#FFF'
  }];

  const others: groupObj[] = [{
    name: 'Heroku',
    icon: <si.SiHeroku />,
    bgColor: '#430098',
    color: '#FFF'
  }, {
    name: 'CodePen',
    icon: <si.SiCodepen />,
    bgColor: themeMode === 'dark' ? '#FFF' : '#000',
    color: themeMode === 'dark' ? '#000' : '#FFF'
  }, {
    name: 'Google Cloud',
    icon: <si.SiGooglecloud />,
    bgColor: '#4285F4',
    color: '#FFF'
  }, {
    name: 'GoDaddy',
    icon: <si.SiGodaddy />,
    bgColor: '#1BDBDB',
    color: '#FFF'
  }, {
    name: 'CloudFlare',
    icon: <si.SiCloudflare />,
    bgColor: '#F38020',
    color: '#FFF'
  }];

  return (
    <Container fixed sx={{ width: "100%", height: "30%" }}>
      <Typography align="center" variant="h4" sx={title}>Tech Stack</Typography>
      <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128296;</Divider>
      <Grid container spacing={2} sx={{ m: 2 }}>
        <Group name="Languages" groupObj={languages} />
        <Group name="Tools" groupObj={tools} />
        <Group name="DBMS" groupObj={dbms} />
        <Group name="Others" groupObj={others} />
      </Grid>
    </Container>
  );
}

export default TechStack;