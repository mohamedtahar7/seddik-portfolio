import ProjectCard from "./ProjectCard";
import IFrame from "./IFrame";
import { projects } from "../utils/projects";
import { useState } from "react";
import CategoryFeed from "./CategoryFeed";
import Pagination from "./Pagination";
import { categories } from "../utils/categories";
import { motion } from "framer-motion";
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activePlayer, setActivePlayer] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const projectPerPage = 6;
  const lastProjectIndex = currentPage * projectPerPage;
  const firstProjectIndex = lastProjectIndex - projectPerPage;
  const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);
  const [category, setCategory] = useState("All");
  return (
    <section id="projects" className="relative mt-28 mb-28 px-16">
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
            <p
              onClick={() => {
                setCategory(type);
                setCurrentPage(1);
              }}
              key={index}
              className={`text-md text-white hover:text-white hover:bg-[#0a192f] transition-all cursor-pointer ${
                category === type && "text-white bg-[#0a192f]"
              } px-4 transition-all border-2 border-[#0a192f]`}
            >
              {type}
            </p>
          ))}
        </div>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
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
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-10">
            {currentProjects.map((project, index) => (
              <ProjectCard
                setActivePlayer={setActivePlayer}
                setActiveLink={setActiveLink}
                key={index}
                project={project}
              />
            ))}
          </div>
          <Pagination
            totalProjects={projects.length}
            projectPerPage={projectPerPage}
            setCurrrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <IFrame
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            link={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      )}
      {category === "Top 5" && (
        <CategoryFeed
          projects={projects.filter((project) =>
            project.categories.includes("Top 5")
          )}
        />
      )}
      {category === "Recaps" && (
        <div>
          <CategoryFeed
            projects={projects
              .filter((project) => project.categories.includes("Recaps"))
              .slice(firstProjectIndex, lastProjectIndex)}
          />
          <Pagination
            totalProjects={
              projects.filter((project) =>
                project.categories.includes("Recaps")
              ).length
            }
            projectPerPage={projectPerPage}
            setCurrrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
      {category === "Finance" && (
        <CategoryFeed
          projects={projects.filter((project) =>
            project.categories.includes("Finance")
          )}
        />
      )}
      {category === "Cash Cow" && (
        <CategoryFeed
          projects={projects.filter((project) =>
            project.categories.includes("Cash Cow")
          )}
        />
      )}
      {category === "AI News" && (
        <CategoryFeed
          projects={projects.filter((project) =>
            project.categories.includes("AI News")
          )}
        />
      )}
      {category === "History" && (
        <CategoryFeed
          projects={projects.filter((project) =>
            project.categories.includes("History")
          )}
        />
      )}
    </section>
  );
};

export default Projects;
