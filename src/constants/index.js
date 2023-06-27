import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  firebase,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  shopify,
  carDealershipApp,
  wellBeingApp,
  weatherApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  // {
  // 	name: "Node JS",
  // 	icon: nodejs,
  // },
  {
    name: "FireBase",
    icon: firebase,
  },
  // {
  // 	name: "git",
  // 	icon: git,
  // },
  // {
  // 	name: "figma",
  // 	icon: figma,
  // },
];
const aboutTech = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Younglings",
    // icon: Younglings,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ixperience",
    // icon: Younglings,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    ],
  },
  {
    title: "Web Developer",
    company_name: "YDS",
    // icon: Younglings,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    ],
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Web-based platform that allows users to search weather conditions around various cities , providing hourly and daily forecast.",
    tech: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/Tristan-10111/myWeatherApp",
  },
  {
    name: "Car dealership",
    description:
      "Web-based platform that allows users to search, buy, recomendations for cars on our market, view availabe car ranges for all taste in cars, and get detailed description about cars.",
    tech: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: carDealershipApp,
    source_code_link: "https://github.com/",
  },
  {
    name: "well-being platform",
    description:
      "A web application, for a call cente that focuses on the well being of youth in south africa an records the wellbeing of youth in south africa",
    tech: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wellBeingApp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, aboutTech };
