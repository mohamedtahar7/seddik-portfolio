import React from "react";
import { Link } from "react-scroll";
const Pagination = ({
  totalProjects,
  projectPerPage,
  setCurrrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex mt-12 flex-row items-center justify-center gap-6">
      {pages.map((page, index) => (
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`${
            currentPage === page && "text-white bg-[#0a192f]"
          } py-2 px-4 hover:text-white hover:bg-[#0a192f] transition-all cursor-pointer text-white border border-[#0a192f]`}
          key={index}
          onClick={() => setCurrrentPage(page)}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
