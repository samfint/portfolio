import Card from "./components/Card";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function App() {
  const project = {
    title: "Project One",
    description: "This is a description of project one.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    repoUrl: "",
  };
  return (
    <>
      <div className="container mx-auto py-4 lg:px-80 md:px-10">
        <section className="mt-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hey, I'm <span className="font-bold">Dane Rodriguez</span>, a
            fullstack web developer from Peru with +1 year of experience. I'm
            passionate aboute databases, UI/UX design, and creating open-source
            projects. I love to learn new technologies and improve my skills
            every day.
          </p>
        </section>
        <section className="mt-20">
          <h1 className="text-2xl">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <Card
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repoUrl={project.repoUrl}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
