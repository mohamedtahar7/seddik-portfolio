import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex md:flex-row flex-col items-center lg:pt-48 pt-32 pb-40 px-16"
    >
      {/* Text Hero */}
      <div className="w-[75vw]">
        <h1 className="text-6xl tracking-wide font-semibold mb-5 leading-[5rem] text-white">
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#fff"
            multiText={["We Don't Just Create", "We Craft Media"]}
            multiTextDelay={500}
            typeSpeed={30}
          />
        </h1>
        <motion.p
          whileInView={{ y: 0, opacity: 100 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:leading-8 lg:w-[58vw] mb-12 text-[#efefef]"
        >
          At AI Crafted Media we don't just create - we{" "}
          <span className="font-semibold">craft</span> media🎬✨. <br /> with a
          blend of creativity and expertise, we transform ideas into captivating
          content that resonates, engages, and makes a lasting impact. <br />{" "}
          Welcome to a world where every project is a masterpiece in the making.
        </motion.p>
        <div className="flex md:flex-row flex-col items-center gap-6">
          <motion.a
            whileInView={{ y: 0, opacity: 100 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="md:w-fit w-full text-center text-xl hover:opacity-80 transition text-[#0a192f] py-3 px-6 rounded-xl bg-white"
            href="#contact"
          >
            Contact Us
          </motion.a>
          <motion.a
            whileInView={{ y: 0, opacity: 100 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="md:w-fit w-full text-center text-xl hover:bg-[#071221] transition text-white py-3 px-6 rounded-xl bg-[#0a192f] "
            href="#about"
          >
            Learn More
          </motion.a>
        </div>
      </div>
      {/* Img Hero */}
      {/* <div className="lg:block hidden w-[65vw]">
        <img className="" src="/src/assets/hero.png" alt="" />
      </div> */}
    </section>
  );
};

export default Hero;
