import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  abnb,
  uwu,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  servlet,
  python,
  bootstrap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "servlet",
    icon: servlet
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Gem Stones Identification Using Machine Learning",
    company_name: "Uva Wellassa University | Final Year Resarch",
    icon: uwu,
    iconBg: "white",
    date: "Ongoing",
    points: [
      "Developed a complex method to accurately classify gemstones based on their unique properties, such as refractive index and double refractive index.",
      "Contributed to an industrial-level web app by integrating machine learning modules and building a Random Forest Classifier for classification.",
      "Demonstrated expertise in machine learning techniques and collaborated effectively with team members to ensure successful integration"
    ],
  },
  {
    title: "Booking App Based on MERN Stack (Airbnb Clone)",
    company_name: "Personal",
    icon: abnb,
    iconBg: "black",
    date: "Ongoing",
    points: [
      "Developed an app to replicate Airbnb's features, such as property booking and updates, using the MERN Stack.",
      "Undertook the project to gain a deeper understanding of the technology stack.",
      "Demonstrated proficiency in MERN Stack development through the completion of the project."
    ],
  },
  {
    title: "Online Liquor Purchasing & Store Management System",
    company_name: "Uva Wellassa University | 3rd year project",
    icon: uwu,
    iconBg: "white",
    date: "2022",
    points: [
      "Developed an online liquor purchasing management system for a liquor store, including an application and admin dashboard.",
      "Implemented inventory and billing management, online order tracking, and chat functionality using React JS and Google Firebase.",
      "Collaborated with team members effectively to ensure timely project delivery"
    ],
  },
  {
    title: "Fitness Center Management System",
    company_name: "Uva Wellassa University | 2nd year project",
    icon: uwu,
    iconBg: "white",
    date: "2021",
    points: [
      "Built the front-end of an online fitness center operation system as a second-year project.",
      "Enabled fitness centers to continue their operations online using the system.",
      "Utilized React JS to create the front-end of the system.",
      "Demonstrated proficiency in front-end web development",
    ],
  },
  {
    title: "Super Market Billing System",
    company_name: "Uva Wellassa University | 2nd year project",
    icon: uwu,
    iconBg: "white",
    date: "2021",
    points: [
      "Developed a standalone application for a store.",
      "The application includes features for stock management and point-of-sale (POS) operations.",
      "Demonstrated proficiency in software development for retailbusinesses."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fitness Center",
    description:
      "Web-based platform that allows users get in touch with their gym and make transactions via online methos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/PathumSandaruwanD/2ndYearProject",
  },
  {
    name: "Online Liquor Purchasing & Store Management System",
    description:
      "Web application that enables users to purchase all kind of liquor and helps stoer owners to run business in fully digitalized enviornment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PathumSandaruwanD/3.2-project.git",
  },
  {
    name: "Calculator App",
    description:
      "An entry level calculator that helps users to do basic mathematical functions.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PathumSandaruwanD/calculatorOne.git",
  },
];

export { services, technologies, experiences, testimonials, projects };