import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";
import { useState } from "react";
import CategoryFeed from "./CategoryFeed";
import { categories } from "../utils/categories";
import { motion } from "framer-motion";
const Projects = () => {
  const [category, setCategory] = useState("All");
  return (
    <section id="projects" className="mt-28 mb-28 px-16">
      <motion.h1
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-center text-3xl font-medium"
      >
        Our Projects
      </motion.h1>
      <div className="flex sm:flex-row flex-col justify-center gap-4 mt-10 items-center">
        <h3 className="text-xl text-[#fff]">Filter :</h3>
        <div className="lg:flex hidden md:flex-row flex-col sm:w-auto w-fit gap-4 items-center">
          {categories.map((type, index) => (
            <motion.p
              whileInView={{ x: 0, opacity: 100 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{
                type: "tween",
                delay: index === 0 ? 0.2 : 0,
                duration: 0.5,
              }}
              onClick={() => {
                setCategory(type);
              }}
              key={index}
              className={`text-md text-white hover:text-white hover:bg-[#0a192f] transition-all cursor-pointer ${
                category === type && "text-white bg-[#0a192f]"
              } px-4 transition-all border-2 border-[#0a192f]`}
            >
              {type}
            </motion.p>
          ))}
        </div>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="lg:hidden block py-1 px-6 text-lg rounded-2xl"
          id="categories"
        >
          {/* <option value={category}>{category}</option> */}
          {categories.map((type, index) => (
            <option
              value={type}
              key={index}
              className={`text-md hover:bg-[#0a192f] transition-all cursor-pointer ${
                category === type && "text-white bg-[#0a192f]"
              } px-4 transition-all border-2 border-[#0a192f]`}
            >
              {type}
            </option>
          ))}
        </select>
      </div>
      {category === "All" && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
      {category === "Top 5" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Top 10" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Recaps" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Shorts" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Cash Cow" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "AI News" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "AI Business" && (
        <CategoryFeed projects={projects} category={category} />
      )}
    </section>
  );
};

export default Projects;
