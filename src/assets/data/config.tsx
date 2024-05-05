import { ReactElement } from 'react';
import { TbMessage2Cog, TbTrophy, TbCertificate } from 'react-icons/tb';


type MenuType = {
  name: string;
  key: string;
}

type AboutTitle = {
  name: string;
  icon: ReactElement;
}

export const Title: {
  main: string;
  about: {
    awards: AboutTitle;
    certifications: AboutTitle;
    experience: AboutTitle;
  }
} = {
  main: 'oF\'s Personal Website',
  about: {
    awards: {
      name: 'Awards',
      icon: <TbTrophy style={{
        fontSize: '28px',
        marginRight: '8px'
      }} />
    },
    certifications: {
      name: 'Certifications',
      icon: <TbCertificate style={{
        fontSize: '28px',
        marginRight: '8px'
      }} />
    },
    experience: {
      name: 'Experience',
      icon: <TbMessage2Cog style={{
        fontSize: '28px',
        marginRight: '8px'
      }} />
    }
  }
};

export const MenuList: MenuType[] = [
  {
    name: 'Home',
    key: 'home'
  }, {
    name: 'About',
    key: 'about'
  }, {
    name: 'Project',
    key: 'project'
  }
]

export const copyright: ReactElement = (
  <>Copyright &copy; oF. All Rights Reserved.</>
);