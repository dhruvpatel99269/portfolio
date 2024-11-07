export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Resume',
      href: '#resume',
    },
    {
      id: 5,
      name: 'Certificate',
      href: '#certificate'
    }
  ];

  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Event Management Web Application',
      animation: 'salute',
      desc: 'I developed a web-based event management platform, symbiSoc, inorder to manage college club activities and registrations. The platform features custom user authentication with Next-auth for secure login and role-based access. Additionally, real-time email notifications using Node mailer alert members about new event postings and reminders for upcoming registered events.',
      subdesc:
        'Event-related documents in PDF format are made downloadable for Admin, Faculty In-charge, and Club In-charge users. The platform also includes an admin dashboard for managing user roles and overseeing the entire web application, providing administrators with comprehensive control over event management and user permissions.',
      href: 'https://github.com/dhruvpatel99269/symbiSoc-next-auth',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/next.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
        {
          id: 5,
          name: 'NodeJs',
          path: '/assets/node.svg',
        },
      ],
    },
    {
      title: 'Music Streaming Platform',
      animation: 'clapping',
      desc: 'I developed a music streaming platform using Java (NetBeans IDE) and MySQL, focusing on user authentication and playlist management. The system handles validation for user not found, duplicate usernames, invalid passwords, and empty fields, ensuring a secure and smooth experience.',
      subdesc:
        'The platform uses circular linked lists for efficient playlist retrieval and song playback. This structure enables seamless transitions and continuous playback. Users can create, update, delete, and modify playlists by adding or removing songs, enhancing the overall user experience.',
      href: 'https://github.com/dhruvpatel99269/MusicPlatform',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Java',
          path: '/assets/java.svg',
        },
        {
          id: 2,
          name: 'MySQL',
          path: 'assets/mysql.svg',
        },        
      ],
    },
  ];

  export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/ui.earth.com",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const testimonials = [
    {                          
      issuedby: "Hackerrank",
      name: "SQL (Basic)",
      link: "https://www.hackerrank.com/certificates/5c8ef1175536",
    },
    {
      issuedby: "Hackerrank",
      name: "SQL (Intermediate)",
      link: "https://www.hackerrank.com/certificates/58e788a0fc15",
    },
    {
      issuedby: "Hackerrank",
      name: "React (Basic)",
      link: "https://www.hackerrank.com/certificates/8630b1405e21",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
  