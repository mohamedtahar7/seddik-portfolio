import Input from "./Input";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div id="contact" className="md:px-16 px-10 sm:py-12">
      <h1 className="text-white mb-8 text-center text-3xl font-medium">
        Contact Us
      </h1>
      <div className="sm:p-20 p-8 bg-[#0a192f] drop-shadow-xl rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-8">
          <form className="flex flex-col gap-12">
            <Input name="first_name" type="text" label={"Name"} />
            <Input name="from_email" type={"email"} label={"Email"} />
            <textarea
              required
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message Here"
              className="w-full rounded-md placeholder-[#0a192f] text-[#0a192f] bg-white p-6 text-2xl"
            ></textarea>
            <div className=" text-center">
              <button className="px-10 py-3 text-xl rounded-lg bg-[#3c1642] transition hover:opacity-80 text-[#f7f7f7]">
                Submit
              </button>
            </div>
          </form>
          <div className="lg:flex hidden flex-col gap-6 -mt-10">
            <img
              className="w-[85%]"
              src="/src/assets/Absolute_Reality_v16_man_and_woman_0_clipdrop-background-removal.png"
              alt="contact illustration"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4">
                <GrMail
                  className="bg-[#3c1642] text-white p-[6px] rounded-xl"
                  size={56}
                />
                <h1 className="text-white text-xl font-medium">
                  Our Email : apt@gmail.com
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaPhoneAlt
                  className="bg-[#3c1642] text-white p-3 rounded-xl"
                  size={55}
                />
                <h1 className="text-white text-xl font-medium">
                  Our Phone : +213 657 69 65 32
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaMapLocationDot
                  className="bg-[#3c1642] text-white p-3 rounded-xl"
                  size={55}
                />
                <h1 className="text-white text-xl font-medium">
                  Our Location : Biskra
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
