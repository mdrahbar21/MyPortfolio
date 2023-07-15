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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
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
        "Managed a team of 20+ students to organize various activities and worked on many proposals for the students of IIT Kanpur.",
        "Coordinated with the institute administration and the student senate to ensure smooth functioning of the students' body.",
        "Developed a web application for the Health Centre of IIT Kanpur to manage the medical records and other of the patients.",
        // "Will add more points here later.",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rahbar proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rahbar does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rahbar optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sensor placements for air quality monitoring using Optimization algorithms",
      description:
        "The project aims to find the optimal placement of sensors for air quality monitoring in India. The project uses optimization algorithms when passed with required parameters to find the optimal placement of sensors.",
      tags: [
        {
          name: "ongoing",
          color: "blue-text-gradient",
        },
        {
          name: "optimization",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      source_code_link: "#",
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
      source_code_link: "https://github.com/",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };