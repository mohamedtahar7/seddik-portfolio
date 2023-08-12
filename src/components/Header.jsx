import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
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
      <div className="">
        <a href="#">
          <img
            className="lg:w-[30%] sm:w-[70%] md:w-[50%] w-[80%]"
            src="https://i.postimg.cc/G2D98mzV/image-1-compressed-removebg-preview.png"
            alt="seddik logo"
          />
        </a>
      </div>
      <div className="md:block hidden">
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="text-xl hover:opacity-80 text-white font-normal"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-xl hover:opacity-80 text-white font-normal"
              href="#about"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-xl hover:opacity-80 text-white font-normal"
              href="#contact"
            >
              Contact
            </a>
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
          <a
            className="text-xl hover:opacity-80 text-white font-normal"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-xl hover:opacity-80 text-white font-normal"
            href="#about"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-xl hover:opacity-80 text-white font-normal"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
