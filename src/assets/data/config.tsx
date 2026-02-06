import { ReactElement } from "react";
import { FaInstagram, FaXTwitter, FaGithub, FaDiscord, FaRegEnvelope } from "react-icons/fa6";


type MenuType = {
  name: string;
  key: string;
  link: string;
}

type ContactType = {
  name: string;
  icon: ReactElement;
  link: string;
  action: "copy" | "open";
}

type techListType = {
  programming: string[];
  frameworks: string[];
  dbms: string[];
  ml: string[];
  services: string[];
}

export const MENU_LIST: MenuType[] = [
  {
    name: "Home",
    key: "home",
    link: "/"
  }, {
    name: "About",
    key: "about",
    link: "/about"
  }, {
    name: "Projects",
    key: "projects",
    link: "/projects"
  }, {
    name: "Blog",
    key: "blog",
    link: "/blog"
  }
]

export const CONTACT: ContactType[] = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/sky91.54/",
    action: "open"
  }, {
    name: "Twitter",
    icon: <FaXTwitter />,
    link: "https://x.com/sky9154/",
    action: "open"
  }, {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/sky9154/",
    action: "open"
  }, {
    name: "Discord",
    icon: <FaDiscord />,
    link: "sky9154",
    action: "copy"
  }, {
    name: "Email",
    icon: <FaRegEnvelope />,
    link: "mailto:wei@sky9154.com",
    action: "open"
  }
];

export const TECH_LIST: techListType = {
  programming: ["Python", "TypeScript", "JavaScript", "Java", "Go", "PHP"],
  frameworks: ["React", "Material UI", "Node.js", "FastAPI", "Django", "Spring Boot"],
  dbms: ["MySQL", "MSSQL", "MongoDB", "Neo4j"],
  ml: ["PyTorch", "PyG", "Transformers", "Scikit-learn", "OpenCV"],
  services: ["Git", "Docker", "Nginx", "Google Cloud", "Cloudflare", "Firebase", "Heroku"]
};

export const COPYRIGHT = "Copyright © oF. All Rights Reserved.";