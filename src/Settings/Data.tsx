import React from 'react';
import * as si from 'react-icons/si';
import * as fa from "react-icons/fa";

type TechStack = {
  name: string;
  icon: JSX.Element;
  bgColor: string;
  color: string;
}

type Contact = {
  name: string;
  icon: JSX.Element;
  color?: string;
  link: string;
}

export const languages: () => TechStack[] = () => [
  {
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
  }
];

export const tools: (mode: string) => TechStack[] = (themeMode) => [
  {
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
  }
];

export const dbms: () => TechStack[] = () => [
  {
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
  }
];

export const others: (mode: string) => TechStack[] = (themeMode) => [
  {
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
  }
];

export const contact: () => Contact[] = () => [
  {
    name: 'Instagram',
    icon: <fa.FaInstagram />,
    link: 'https://www.instagram.com/sky91.54/'
  }, {
    name: 'Twitter',
    icon: <fa.FaTwitter />,
    color: '#1DA1F2',
    link: 'https://twitter.com/sky9154/'
  }, {
    name: 'Github',
    icon: <fa.FaGithub />,
    color: '#211F1F',
    link: 'https://github.com/sky9154/'
  }, {
    name: 'Bahamut',
    icon: <fa.FaDragon />,
    color: '#00A5B5',
    link: 'https://home.gamer.com.tw/profile/index.php?owner=evan9154'
  }, {
    name: 'Discord',
    icon: <fa.FaDiscord />,
    color: '#5663F7',
    link: '#Discord'
  }, {
    name: 'Email',
    icon: <fa.FaRegPaperPlane />,
    color: '#FBBD06',
    link: '#Email'
  }
];