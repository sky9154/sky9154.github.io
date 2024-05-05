import { ReactElement } from 'react';
import * as si from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';


type TechStackType = {
  name: string;
  icon: ReactElement;
  bgColor: string;
  color: string;
}

export const languages: TechStackType[] = [
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
    icon: <FaJava />,
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


export const tools: TechStackType[] = [
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
    bgColor: '#FFF',
    color: '#000'
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
  }, {
    name: 'Steam',
    icon: <si.SiSteam />,
    bgColor: '#173A52',
    color: '#FFF'
  }
];

export const dbms: TechStackType[] = [
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

export const others: TechStackType[] = [
  {
    name: 'Heroku',
    icon: <si.SiHeroku />,
    bgColor: '#430098',
    color: '#FFF'
  }, {
    name: 'CodePen',
    icon: <si.SiCodepen />,
    bgColor: '#FFF',
    color: '#000'
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