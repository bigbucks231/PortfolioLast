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
    // kalilinux,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Penetration Tester",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Product Manger",
      company_name: "Liquid8 Studios",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2018 - July 2020",
      points: [
        "Define and prioritize product vision and strategy.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Conduct market research, and analyze user data to inform product decisions.",
        "Monitor and measure product performance, identify opportunities for improvement, and iterate on product features and functionality."
      ],
    },
    {
      title: "Chief Technology Officer",
      company_name: "The Eighteen Corporation",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - Present (Part Time)",
      points: [
        "Lead the technology strategy and architecture for the company's products and services.",
        "Manage and mentor the technology team, including software engineers, developers, and designers.",
        "Ensure the quality and reliability of software products through testing and deployment practices.",
        "Stay up-to-date with industry trends and emerging technologies to identify new opportunities for the company.",
      ],
    },
    {
      title: "IT Technical Support",
      company_name: "Embassy of Liberia, Accra",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2021 - Jan 2023",
      points: [
        "Respond to user requests for technical assistance and troubleshoot hardware and software issues.",
        "Install, configure and maintain hardware, software, and network systems.",
        "Provide training and support to end-users to help them effectively use technology products and services.",
        "Keep track of user inquiries, document technical problems and solutions, and escalate complex issues to the appropriate IT staff.",
      ],
    },
    {
      title: "Pen Tester",
      company_name: "Pentagon Armour",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abdul does.",
      name: "Francis Zotor",
      designation: "Council Member",
      company: "International Union of Nutritional Sciences",
      image: "https://media.licdn.com/dms/image/C4D03AQFrCXFH33QjCQ/profile-displayphoto-shrink_400_400/0/1516816656816?e=1691020800&v=beta&t=ZbaG2i-xGDY0vr2q2xsrVgA-ouZB5DSCtN3C34NXYwE",
    },
    {
      testimonial:
        "Abdul did a flawless school management system for our company in the shortest possible time ",
      name: "Samuel Kamara",
      designation: "CEO",
      company: "Afriktech Soultions",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "This young man is dedicated, disciplined, empathetic and very punctual on meeting deadlines",
      name: "Alieu Massaquoi PhD",
      designation: "Minister Counsellor",
      company: "Embassy of Liberia, Ghana",
      image: "https://media.licdn.com/dms/image/D4D03AQHUHmuSN7vFEg/profile-displayphoto-shrink_800_800/0/1671468866690?e=1691020800&v=beta&t=gw910IV2jGRO1w00Syd9qNe8D1qpmv_NCIeXBLi6Cic",
    },
  ];
  
  const projects = [
    {
      name: "The 8teen Marketplace",
      description:
        "This is a multivendor website that connect buyers with multiple sellers on a single platform. Vendors can easily manage their inventory, orders, and sales through their dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Crown Roofing Liberia",
      description:
        "Crown Roofing is a Liberian-owned business that provides quality roofing services. Through this website, you can be able to order roofing tiles, book a repair and other roofing services they offer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Afriktech Solutions",
      description:
        "This is a school management system that combines administrative, teachers, parents and students all on a single platform. Every activity of the school can be manage from your dashboard at any place in the world.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };