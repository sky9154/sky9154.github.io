import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { title, block } from '../App';
import { languages, tools, dbms, others } from '../../settings/Data';

type ThemeMode = {
  themeMode: string;
}

type groupObj = {
  name: string;
  icon: JSX.Element;
  bgColor: string;
  color: string;
}[]

type Groups = {
  name: string;
  groupObj: groupObj;
}

const Group: React.FC<Groups> = ({ name, groupObj }) => {
  const group: JSX.Element[] = [];

  let temp: groupObj = [];

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
      <Typography align="center" variant="h4" sx={title}>{name}</Typography>
      {group}
    </Grid>
  );
};

const TechStack: React.FC<ThemeMode> = ({ themeMode }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={block}>
      <Container fixed>
        <Typography align="center" variant="h3" sx={title}>Tech Stack</Typography>
        <Divider variant="middle" sx={{ fontSize: "26px" }}>&#128296;</Divider>
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Group name="Languages" groupObj={languages()} />
          <Group name="Tools" groupObj={tools(themeMode)} />
          <Group name="DBMS" groupObj={dbms()} />
          <Group name="Others" groupObj={others(themeMode)} />
        </Grid>
      </Container>
    </Box>
  );
}

export default TechStack;