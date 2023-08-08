import { BsDiscord, BsLinkedin, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="sm:px-16 mt-5 px-10 bg-[#0a192f]">
      <div className="border-b-[1px] border-[#f7f7f7]">
        <div className="py-8">
          <h1 className="text-[#f7f7f7] text-4xl text-center">Follow Me</h1>
        </div>
        <div className="flex gap-8 pb-8 items-center justify-center">
          <a href="#" target="_blank">
            <BsDiscord
              size={40}
              className="text-[#f7f7f7] hover:text-[#b7b7b7] transition "
            />
          </a>
          <a href="#" target="_blank">
            <BsLinkedin
              size={40}
              className="text-[#f7f7f7] hover:text-[#b7b7b7] transition "
            />
          </a>
          <a href="#" target="_blank">
            <BsInstagram
              size={40}
              className="text-[#f7f7f7] hover:text-[#b7b7b7] transition "
            />
          </a>
        </div>
      </div>
      <h2 className="text-center text-[#f7f7f7] p-6 shadow-2xl text-2xl">
        2023 AI Crafted Media. All Rights Reserved.
      </h2>
    </footer>
  );
};

export default Footer;
