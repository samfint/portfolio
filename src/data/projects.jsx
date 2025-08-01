import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPrisma } from "react-icons/si";

export const projects = [
  {
    title: "Vaultify",
    description:
      "Smartly manage and track your inventory with, simple, and efficient.",
    technologies: [
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
    repoUrl: "",
  },
  {
    title: "Project Two",
    description: "This is a description of project two.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    repoUrl: "",
  },
];
