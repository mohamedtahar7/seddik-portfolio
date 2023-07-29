const Header = () => {
  return (
    <nav className="bg-[#0a192f] py-4 px-16 flex items-center justify-between fixed w-full">
      <div className="relative">
        <a href="#">
          <img
            className="w-[6%]"
            src="/src/assets/seddik-logo.png"
            alt="seddik logo"
          />
        </a>
      </div>
      <div>
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
    </nav>
  );
};

export default Header;
