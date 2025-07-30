import Card from "./components/Card";
import { projects } from "./data/projects.jsx";

function App() {
  return (
    <>
      <div className="container mx-auto py-4 lg:px-80 md:px-10">
        <section className="mt-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hey, I'm <span className="font-bold">Dane Rodriguez</span>, a
            fullstack web developer from Peru with +1 year of experience. I'm
            passionate about databases, UI/UX design, and creating open-source
            projects. I love to learn new technologies and improve my skills
            every day.
          </p>
        </section>
        <section className="mt-20">
          <h1 className="text-2xl">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </section>
        <section className="mt-20">
          <h1 className="text-2xl mb-8">Experience</h1>
          <div className="relative pl-6 border-l border-gray-400 dark:border-gray-600">
            <div className="mb-8">
              <div className="absolute -left-2.5 w-5 h-5 bg-gray-800 dark:bg-gray-300 rounded-full border-2 border-gray-400 dark:border-gray-600"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                time period of the job
              </span>
              <h2 className="font-bold text-lg mt-2">
                put your job title here
              </h2>
              <a
                href="https://www.gruppomaggioli.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 underline"
              >
                nome of the company
              </a>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                description of the role and responsibilities, including
              </p>
            </div>
          </div>
        </section>
        <footer className="mt-20 text-center ">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2023 Dane Rodriguez. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
