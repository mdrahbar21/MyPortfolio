import { transform } from "framer-motion";
import { zoomIn } from "../utils/motion";
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  machinelearning,
  devops,
  gymkhana,
  antaragni,
  snt,
  c,
  cpp,
  python,
  apache,
  trading,
  resumeBuilder,
  ml,
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
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: machinelearning,
  },
  {
    title: "DevOps Engineer",
    icon: devops,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "System Administrator",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "C++ Programming",
    icon: cpp,
  },
  {
    name: "Python Programming",
    icon: python,
  },
  {
    name: "C Programming",
    icon: c,
  },
  {
    name: "Apache",
    icon: apache,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Chief President's Nominee",
    company_name: "Students' Gymkhana, IIT Kanpur",
    icon: gymkhana,
    // iconStyle= {transform: "scale(1.8)"},
    iconBg: "#fff",
    date: "May 2023 - Present",
    points: [
      "Spearheaded a team of 6 nominees, 8 secretaries, 3 web secretaries, and more than 40 volunteers for various events",
      "Coordinated with the institute administration and the student senate to ensure smooth functioning of the students' body.",
      " Updated and Managed Gymkhana servers and Virtual Machine, & Containerised Websites using Docker",
      " Organized Riwayat’24 (Inter-Pool Cell Competition), Hakuna Matata & Farewell Fantasia’23",
      " Implemented a policy shift from H-Type to L-Type tendering for all eateries in student residential areas",
    ],
  },
  {
    title: "Web Secretary",
    company_name: "Students' Gymkhana, IIT Kanpur",
    icon: gymkhana,
    zoomIn: "180%",
    iconBg: "#fff",
    date: "Oct 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using Apache Web Server, HTML, JS, CSS and other related technologies.",
      "Collaborating with cross-functional teams including clubs, teams, and societies to deliver high-quality products.",
      "Updated and Containerized the whole infrastructure of the students.iitk.ac domain.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Secretary, Hospitality & Transport",
    company_name: "Antaragni, IIT Kanpur",
    icon: antaragni,
    // transform: "scale(5)",
    iconBg: "#06283D",
    date: "Oct 2022 - May 2023",
    points: [
      "Managing 10K+ registrations across 50+ events from 500+ colleges, a YoY increase of 35% in registrations.",
      "Coordinated with festival heads and managed the smooth functioning of the whole fest",
      "Handled the walkie-talkie communication with the Head, Security of Antaragni.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Secretary",
    company_name: "Science and Technology Council, IIT Kanpur",
    icon: snt,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Mar 2023",
    points: [
      "Organized various events and workshops for the students of IIT Kanpur.",
      "Maintained the website of the council and updated it regularly.",
      "Organized Hackthons for the students of IIT Kanpur in collaboration with KPIT Sparkle.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rahbar has worked relentlessly and efficiently on AI enabled search portal and it is quite hard to find a guy like him",
    name: "T.K. Guha",
    designation: "Assistant Professor, AE",
    company: "IIT Kanpur",
    image: "src/assets/Tufan-Guha.jpg",
  },
  {
    testimonial:
      "Rahbar always find a way to resolve a problem in hand, he is a great team player and a good leader. He is a great asset to any team he is a part of.",
    name: "Soumya Dutta",
    designation: "Assistant Professor, CSE",
    company: "IIT Kanpur",
    image: "src/assets/sdutta_BW.png",
  },
  // {
  //   testimonial:
  //     "After Rahbar optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "AI-Enabled National Portal for Efficient Search of Missing People 👁️",
    description: "The project entails creating an AI-powered national portal to streamline the search and identification of missing people. It utilizes advanced AI and ML technologies to automate matching processes, improving the efficiency of search and rescue operations. This initiative bridges the gap between law enforcement, NGOs, and the public, employing technology for social good and tackling human trafficking issues",
    tags: [
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Funded",
        color: "orange-text-gradient",
      }
    ],
    image: "src/assets/c3i.png",
    source_code_link: "https://github.com/mdrahbar21/Smart_Search",
  },
  {
    name: "LAMP Stack: The Road to DevOps",
    description: "Mentored at Programming Club, IIT Kanpur. Guided 24 undergrads on LAMP stack fundamentals, covering Linux, Apache, Virtualization, and Networking from April to August 2023. We created three applications—Facemash, CryptoTracker, and ContactList—using React.js, Tailwind CSS, and JavaScript, emphasizing practical DevOps skills.",
    tags: [
      {
        name: "LAMP",
        color: "blue-text-gradient",
      },
      {
        name: "DevOps",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: devops,
    source_code_link: "https://github.com/orgs/PclubLAMPStack/repositories",
  },
  {
    name: "Appointment Portal for Counselling Service",
    description: "The project aims to create a web-based appointment portal for the counselling service of IIT Kanpur. The portal will be used by students to book appointments with the counsellors and the counsellors can manage their appointments using the portal.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "ONGOING",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/ics.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Mathematical Trading Strategies",
    description:
      "The project aims to use mathematical models and python programming to predict the stock prices and use the predictions to make trading strategies. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "yFinanace",
        color: "green-text-gradient",
      },
      {
        name: "stamatics",
        color: "pink-text-gradient",
      },
    ],
    image: trading,
    source_code_link: "https://github.com/mdrahbar21/Mathematical-Trading-Strategies",
  },
  {
    name: "Machine Learning Models",
    description:
      "This repository contains multiple ML models that were designed and trained by me. The models are trained on various datasets and are used for various purposes.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "DL",
        color: "green-text-gradient",
      },
      {
        name: "DataScience",
        color: "pink-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://github.com/mdrahbar21/ML-Models",
  },
  {
    name: "No-Code Resume Builder",
    description:
      "This was a hackathon project made in 2 days and bagged the 1st position at SPO (Students' Placement Office) Hackathon, IIT-K",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: resumeBuilder,
    source_code_link: "https://github.com/mdrahbar21/Resume-Maker",
  },
  {
    name: "Sensor placements for air quality monitoring using Optimization algorithms",
    description:
      "The project aims to find the optimal placement of sensors for air quality monitoring in India. The project uses optimization algorithms when passed with required parameters to find the optimal placement of sensors.",
    tags: [
      {
        name: "Greedy Algorithm",
        color: "blue-text-gradient",
      },
      {
        name: "Optimization",
        color: "green-text-gradient",
      },
      {
        name: "Genetic Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/sensor.png",
    source_code_link: "https://github.com/mdrahbar21/sensorPlacement_SoCE",
  },
];

export { services, technologies, experiences, testimonials, projects };
