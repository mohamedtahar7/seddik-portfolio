const ProjectCard = ({ project }) => {
  const { name, categories, img } = project;
  return (
    <div className="hover:-translate-y-4 transition-all p-6 bg-[#0a192f] rounded-xl">
      <div className="mb-10">
        <img src={img} className="rounded-xl" alt="thumbnail" />
        <h4 className="mt-3 text-center text-lg text-white font-medium">
          {name}
        </h4>
      </div>
      <div className="flex items-center gap-2">
        {categories.map((category, index) => (
          <h6
            key={index}
            className="text-white w-fit font-medium rounded-xl bg-[#3c1642] py-1 px-2"
          >
            {category}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
