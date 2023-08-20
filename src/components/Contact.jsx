import Input from "./Input";
import { GrMail } from "react-icons/gr";
import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();
  const alert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Email Has Been Sent Successfully",
      showConfirmButton: false,
      timer: 3000,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_t97xmdk",
        "template_vrwd6rn",
        form.current,
        "3uivQYmuFGHZ8hhzN"
      )
      .then(
        (result) => {
          alert();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="md:px-16 px-10 sm:py-12">
      <motion.h1
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white mb-8 text-center text-3xl font-medium"
      >
        Contact Us
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="sm:p-20 p-8 bg-[#0a192f] drop-shadow-xl rounded-3xl"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col gap-12"
          >
            <Input name="client_name" type="text" label={"Name"} />
            <Input name="client_email" type={"email"} label={"Email"} />
            <textarea
              required
              name="client_message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message Here"
              className="w-full rounded-md placeholder-[#0a192f] text-[#0a192f] bg-white p-6 text-2xl"
            ></textarea>
            <button
              type="submit"
              className="px-10 py-3 text-xl rounded-lg bg-[#3c1642] transition hover:opacity-80 text-[#f7f7f7]"
            >
              Submit
            </button>
          </form>
          <div className="lg:flex hidden flex-col gap-6 -mt-10">
            <img
              className="w-[85%] 2xl:w-[45%]"
              src="https://i.postimg.cc/02ThKHX9/Absolute-Reality-v16-man-and-woman-0-clipdrop-background-removal.png"
              alt="contact illustration"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-4">
                <GrMail
                  className="bg-[#3c1642] text-white p-[6px] rounded-xl"
                  size={56}
                />
                <h1 className="text-white text-xl font-medium">
                  Our Email : contact@aicraftedmedia.com
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaPhoneAlt
                  className="bg-[#3c1642] text-white p-3 rounded-xl"
                  size={55}
                />
                <h1 className="text-white text-xl font-medium">
                  Our Phone : +213 781 28 87 64
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaMapLocationDot
                  className="bg-[#3c1642] text-white p-3 rounded-xl"
                  size={55}
                />
                <h1 className="text-white text-xl font-medium">
                  Our Location : Biskra - Algeria
                </h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
