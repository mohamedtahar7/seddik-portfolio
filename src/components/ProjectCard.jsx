const ProjectCard = ({ project }) => {
  const { name, category, img } = project;
  return (
    <div className="p-6 bg-[#0a192f] rounded-xl">
      <img src={img} className="rounded-xl" alt="thumbnail" />
      <h4 className="mt-3 text-center text-lg text-white font-medium">
        {name}
      </h4>
    </div>
  );
};

export default ProjectCard;
