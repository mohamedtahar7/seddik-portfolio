import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Input from "./Input";
const Contact = () => {
  return (
    <div id="contact" className="md:px-28 px-10 sm:py-16">
      <div className="sm:p-20 p-8 bg-[#0a192f] drop-shadow-xl rounded-3xl">
        <h1 className="text-3xl font-normal text-[#f7f7f7] mb-6">
          Get In Touch
        </h1>
        <form className="flex flex-col gap-12">
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-6 items-center">
            <div className="sm:w-1/2 w-full">
              <Input name="first_name" type="text" label={"First Name"} />
            </div>
            <div className="sm:w-1/2 w-full">
              <Input name="last_name" type="text" label={"Last Name"} />
            </div>
          </div>
          <div>
            <Input name="from_email" type={"email"} label={"Email"} />
          </div>
          <div>
            <textarea
              required
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message Here"
              className="w-full rounded-md placeholder-[#0a192f] text-[#0a192f] bg-white p-6 text-2xl"
            ></textarea>
          </div>
          <div className=" text-center">
            <button className="px-10 py-3 text-xl rounded-full bg-[#3c1642] transition hover:opacity-80 text-[#f7f7f7]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
