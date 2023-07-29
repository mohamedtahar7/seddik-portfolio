import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";
const Projects = () => {
  return (
    <section id="projects" className="py-28 px-16">
      <h1 className="text-white text-center text-3xl font-medium">
        Our Projects
      </h1>
      <div className="grid grid-cols-3 gap-12 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
