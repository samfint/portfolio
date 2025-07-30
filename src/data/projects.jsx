import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export const projects = [
  {
    title: "Project One",
    description: "This is a description of project one.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Express", icon: <SiExpress /> },
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
