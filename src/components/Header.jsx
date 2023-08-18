import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActiveNav(true) : setActiveNav(false);
    });
  }, []);
  return (
    <nav
      className={`${
        activeNav ? "bg-[#0a192f]" : "bg-none"
      } z-20 transition-all py-4 px-16 flex items-center justify-between fixed w-full`}
    >
      <div className="cursor-pointer">
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
          <img
            className="lg:w-[30%] sm:w-[70%] md:w-[50%] w-[80%]"
            src="https://i.postimg.cc/G2D98mzV/image-1-compressed-removebg-preview.png"
            alt="seddik logo"
          />
        </Link>
      </div>
      <div className="md:block hidden">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              className="cursor-pointer pb-1 duration-75 transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
              to="about"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer pb-1  transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer pb-1  transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer pb-1 duration-75 transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden block">
        {mobileNav ? (
          <MdClose
            onClick={() => setMobileNav((prev) => !prev)}
            className="text-white"
            size={30}
          />
        ) : (
          <FiMenu
            onClick={() => setMobileNav((prev) => !prev)}
            className="text-white"
            size={30}
          />
        )}
      </div>
      {/* Mobile Nav */}
      <ul
        className={`flex absolute transition-all ${
          mobileNav ? "top-20" : "-top-96"
        } right-4 md:hidden bg-[#0a192f] py-3 px-6 flex-col items-center gap-6`}
      >
        <li>
          <Link
            className="cursor-pointer pb-1 duration-75 transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
            to="about"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer pb-1  transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer pb-1  transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer pb-1 duration-75 transition hover:border-white hover:border-b-2 text-xl text-white font-normal"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
