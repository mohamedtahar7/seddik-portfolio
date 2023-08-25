import { MdClose } from "react-icons/md";
const IFrame = ({ activePlayer, link, setActivePlayer, setActiveLink }) => {
  return (
    <div
      className={`${
        activePlayer
          ? "top-[25%] left-[50%] -translate-x-[50%] "
          : "top-[25%] left-full"
      } absolute transition-all`}
    >
      <div className="relative p-14 rounded-3xl bg-[#0a192f] w-fit grid place-items-center">
        <MdClose
          onClick={() => {
            setActivePlayer(!activePlayer);
            setActiveLink("");
          }}
          size={40}
          className="cursor-pointer hover:opacity-80 absolute text-white top-3 right-3"
        />
        {link}
      </div>
    </div>
  );
};

export default IFrame;
