import { Experience, Project, Skill } from "./types";

// Using the provided CV data, translated to English for a dev portfolio
export const PROFILE = {
  name: "Theodor Kvalem",
  title: "Agent-Driven Developer & Automation Specialist",
  tagline: "Forging digital solutions with industrial precision.",
  email: "Theodorkvalem@hotmail.com",
  phone: "407 51 597",
  location: "Merkurveien 14",
  linkedin: "https://www.linkedin.com/in/theodor-kvalem-604144324/",
  // Served from Vite's `public/` directory
  avatarUrl: "/ProfilePicture.png",
};

export const ABOUT_TEXT = `
Transitioning from a solid background in industrial mechanics and logistics into the world of software engineering. 
I bring a unique perspective to development: the reliability of steel construction combined with the limitless potential of code.
My current focus is on Agent-driven web development, automation, and leveraging AI (Co-Pilot, LLMs) to build robust, scalable systems efficiently.
`;

export const SKILLS: Skill[] = [
  { name: "Agent-Driven Dev", category: "Tech" },
  { name: "Python", category: "Tech" },
  { name: "HTML/CSS/JS", category: "Tech" },
  { name: "Node.js", category: "Tech" },
  { name: "MySQL", category: "Tech" },
  { name: "Google Ecosystem", category: "Tool" },
  { name: "VS Code", category: "Tool" },
  { name: "GitHub Copilot", category: "Tool" },
  { name: "Google Trends", category: "Tool" },
  { name: "Adobe Suite", category: "Tool" },
  { name: "Communication", category: "Soft" },
  { name: "Practical Problem Solving", category: "Soft" },
  { name: "Logistics", category: "Soft" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "edu-1",
    role: "Information Technology VG2",
    company: "Krokeide VGS",
    period: "2025 – Present",
    description:
      "Advanced IT studies focusing on programming, systems architecture, and automation.",
    type: "education",
  },
  {
    id: "edu-2",
    role: "IT & Media Production VG1",
    company: "Krokeide VGS",
    period: "2024 – 2025",
    description:
      "Foundation in digital media, design principles, and basic coding.",
    type: "education",
  },
  {
    id: "job-1",
    role: "Delivery Driver / Lab Logistics",
    company: "Jan Haukeland AS / Tine AS",
    period: "2023",
    description:
      "Responsible for high-stakes transport including lab samples and air freight. Required precision and punctuality.",
    type: "job",
  },
  {
    id: "job-2",
    role: "Surface Treatment Specialist",
    company: "Axnor AS",
    period: "2021",
    description:
      "Industrial surface treatment and maintenance of marine vessels.",
    type: "job",
  },
  {
    id: "job-3",
    role: "Wheel Equipment Operator",
    company: "Midtun Dekk AS",
    period: "2010 - 2021",
    description:
      "Seasonal operations, sales, and technical equipment handling.",
    type: "job",
  },
  {
    id: "apprentice-1",
    role: "Apprentice Sheet Metal Worker",
    company: "Bygg og Ventilasjon AS",
    period: "2018",
    description:
      "Welding, assembly, and ventilation systems construction. Learned the value of structural integrity.",
    type: "job",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    description:
      "Confidential Agent-based automation protocol in development. System architecture finalized, pending deployment.",
    tech: ["Stealth Mode", "Python", "Automation"],
  },
  {
    title: "Project Beta",
    description:
      "Full-stack application utilizing Google Ecosystem for scalable data processing and visualization.",
    tech: ["In Development", "React", "Google Cloud"],
  },
];
