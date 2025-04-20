import jobify from "../assets/jobify.png";
import folio from "../assets/folio.jpg";
import redact from "../assets/redact.jpg";
import trippy from "../assets/trippy.png";

export const EXPERIENCES = [
  {
    year: "2024 - present",
    role: "Tech Lead",
    company: "CSE Department Association, BIT Mesra",
    description: `Responsible for organizing and managing various tech related events at institute level for the Department of Computer Science and Engineering at BIT Mesra`,
    technologies: [],
  },
  {
    year: "Aug,2023 - 2024",
    role: "Web Developer & Graphic Designer",
    company: "LEO Club, BIT Mesra",
    description: `Designed various posters and graphic vectors for the club. Took workshops on Web dev for my junior batch which had an involvement of around 100+ .Managed events having footfall of more than 5000+ in the annual Techfest of BIT,Mesra`,
    technologies: ["HTML", "CSS", "JAVAScript","Adobe Photoshop", "CANVA","INKSCAPE"],
  },
  {
    year: "2022-2024",
    role: "Member",
    company: "NSS, BIT Mesra",
    description: `Part of NSS, BIT Mesra in which along with other members made awareness camps about various social & public awareness and responsibility`,
    technologies: [],
  },
  
];

export const PROJECTS = [
  {
    title: "Jobify- Job Search App",
    image: jobify,
    link: "jobify-findjobs.netlify.app/",
    description:
      "A Job Search App built using React and Tailwind CSS, designed to help users find their dream jobs. The app features a user-friendly interface, allowing users to search for jobs based on various criteria such as location, job type, and industry. Users can also save their favorite job listings for easy access later.",
    technologies: ["HTML","React", "JWT", "MongoDB","Cloudinary","Express.js","Node.js", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: folio,
    link: "/",
    description:
      "A Modern Portfolio website built, for showcasing a modern approach to personal branding and professional showcase.Helps to highlight my skills and projects. ",
    technologies: ["HTML","React", "Vite", "Framer", "Tailwind CSS"],
  },
  {
    title: "REDACT",
    image: redact,
    link:"https://github.com/RahulRaj9598/REDACT-TOOL",
    description:
      "A Redact tool built using React and Tailwind CSS, designed to help users redact sensitive information from documents. The app features a user-friendly interface, allowing users to upload documents and easily redact sensitive information.",
    technologies: ["Python",
  "OpenCV",
  "EASY",
  "spaCy",
  "Presidio",
  "Faker",
  "Hugging Face Transformers",
  "Flask",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "JWT Authentication",
  "Docker",
  "Git",
  "GitHub",
  "Vite"]
  },

  {
    title: "AI Trip Planner",
    image: trippy,
    link: "https://github.com/RahulRaj9598/AI_Tripvisor",
    description:
      "An AI-powered trip planner built using React as the frontend and Google APIs as the backend for fetching trip information,GeminiAI as the AI model designed to help users plan their trips. The app features a user-friendly interface, allowing users to plan their trips with ease.",
    technologies: [
  "React", 
  "Vite", 
  "Tailwind CSS", 
  "Google Maps API", 
  "Google Places API", 
  "Gemini API (Generative AI)", 
  "Axios",
  "Firebase",
  "Vercel",
]

  },
  
];

export const CONTACT = {
  phoneNo: "+91 6207128240",
  email: "rahulrajpr06@gmail.com",
};
