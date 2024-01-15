import pp from "@/images/pp.png"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Jakub Safrata",
  initials: "JS",
  location: "Prague, Czech Republic, CET",
  locationLink: "https://www.google.com/maps/place/Prague",
  about:
    "Passionate Full Stack Developer dedicated to crafting the future with innovative solutions and a visionary approach.",
  summary:
    "As a Full Stack Engineer with a passion for innovation, I've spearheaded the development of various products and tools from inception to launch. With over 3 years of experience, I have honed my skills in diverse teams to achieve the best results.",
  avatar: pp,
  personalWebsiteUrl: "https://safrata.xyz",
  contact: {
    email: "safrata@pm.me",
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/safrataxyz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jakub-safrata/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/safrata_xyz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Economics and Management",
      link: "https://en.vsem.cz/study-programmes-vsem.html",
      degree: "Bachelor's Degree in Innovation management",
      start: "2020",
      end: "2023",
      description:
        "<a style='text-decoration:underline;' href='https://theses.cz/id/f5vwbp/?zpet=%2Fvyhledavani%2F%3Fsearch%3Djakub%20safrata%26start%3D1;isshlret=Jakub%3B%C5%A0afrata%3B' target='_blank'>Thesis - Proposal for improving economic efficiency and innovation among employees using remote work</a><br/><br/>Bachelor's thesis which was sucessfully defended in 2023 with an A-grade. <br/><br/>This thesis investigates the factors affecting the economic efficiency and innovation of remote workers in the Czech Republic. Its goal is to identify and analyze these elements and propose recommendations to enhance productivity and creativity in remote work settings. The study covers aspects like technology use, communication methods, and work environment, offering practical solutions to common remote work challenges. The final outcome includes tested and feasible strategies for managers to lead remote workers more effectively.",
    },
  ],
  work: [
    {
      company: "Kosik.cz",
      link: "https://kosik.cz",
      badges: [],
      title: "Frontend Developer",
      logo: undefined,
      start: "2023",
      end: "Now",
      description:
        "At Kosik.cz, I specialized in optimizing web applications using Vue, focusing on enhancing performance and responsivity. My role involved refining user interfaces and ensuring seamless user experience across various devices. Technologies: Vue.",
    },
    {
      company: "Dronetag",
      link: "https://dronetag.cz",
      badges: [],
      title: "Frontend/Fullstack Developer",
      logo: undefined,
      start: "2022",
      end: "2023",
      description:
        "Developed and enhanced web applications at Dronetag, specializing in React and Django. Successfully transitioned the platform from Next.js/Redux to a pure React/React Query architecture, enhancing performance and maintainability. Analyzed and implemented backend and frontend code for a new company subscription model. Helped with development of Flutter android/ios application. Technologies: React, Django, React Query, Flutter.",
    },
    {
      company: "Deloitte",
      link: "https://deloitte.com",
      badges: [],
      title: "RPA and Frontend Developer",
      logo: undefined,
      start: "2021",
      end: "2022",
      description:
        "At Deloitte, I developed robotic process automations (RPAs) that are actively used by clients on a daily basis. I maintained and wrote React code for an RPA application, ensuring its robust performance and user interface. Additionally, I conceived and implemented a system with a Python backend and a React frontend for assigning invoices to a database, significantly streamlining the invoice management process. Technologies involved include React, Python, and RPA tools.",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    },
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "React", link: "https://react.dev/" },
    { name: "Vue", link: "https://vuejs.org/" },
    { name: "Next.js", link: "https://nextjs.org/" },
    { name: "Elysia.js", link: "https://elysiajs.com/" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "Django", link: "https://www.djangoproject.com/" },
    { name: "Dart", link: "https://dart.dev/" },
    { name: "Flutter", link: "https://flutter.dev/" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "GitHub Actions", link: "https://docs.github.com/en/actions" },
  ],
  projects: [
    {
      title: "Metroid",
      techStack: [
        "Side Project",
        "TypeScript",
        "Postgres/Postgis",
        "Next.js",
        "Elysia.js",
      ],
      description:
        "A web app for exploring real estate connections to public transport in Prague",
      logo: undefined,
      link: {
        label: "metroid.app",
        href: "https://metroid.app/",
      },
    },
  ],
} as const
