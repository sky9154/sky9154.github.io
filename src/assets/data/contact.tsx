import { ReactElement } from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDragon,
  FaDiscord,
  FaRegPaperPlane
} from 'react-icons/fa6';


type ContactType = {
  name: string;
  icon: ReactElement;
  color?: string;
  link: string;
}


export const contact: ContactType[] = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/sky91.54/'
  }, {
    name: 'Twitter',
    icon: <FaTwitter />,
    color: '#1DA1F2',
    link: 'https://twitter.com/sky9154/'
  }, {
    name: 'Github',
    icon: <FaGithub />,
    color: '#211F1F',
    link: 'https://github.com/sky9154/'
  }, {
    name: 'Bahamut',
    icon: <FaDragon />,
    color: '#00A5B5',
    link: 'https://home.gamer.com.tw/profile/index.php?owner=evan9154'
  }, {
    name: 'Discord',
    icon: <FaDiscord />,
    color: '#5663F7',
    link: '#Discord'
  }, {
    name: 'Email',
    icon: <FaRegPaperPlane />,
    color: '#FBBD06',
    link: 'mailto:wei@sky.com'
  }
];