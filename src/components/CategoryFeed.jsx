import ProjectCard from "./ProjectCard";
const CategoryFeed = ({ projects }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-10">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      ) : (
        <h1 className="text-white text-center text-3xl font-medium">
          No Videos Found
        </h1>
      )}
    </div>
  );
};

export default CategoryFeed;
