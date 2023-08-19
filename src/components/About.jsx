import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="flex md:flex-row flex-col items-center md:gap-48 gap-20 px-16"
    >
      {/* about img */}
      <motion.div
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-full"
      >
        <img
          className="md:w-[17vw] lg:w-[20vw]"
          src="https://i.postimg.cc/0ypKbGdY/image-2-compressed.png"
          alt="logo"
        />
      </motion.div>
      {/* about text */}
      <div className="md:w-[50vw] lg:w-[45vw]">
        <motion.h1
          whileInView={{ y: 0, opacity: 100 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl text-white font-semibold mb-6"
        >
          About Us
        </motion.h1>
        <motion.p
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-7 text-white font-medium"
        >
          At AI Crafted Media we're dedicated to turning your creative visions
          into reality.
          <br />
          As a team of passionate freelancers we pride ourselves on delivering
          top-notch solutions that meet your unique needs.Whether you're an
          individual, entrepreneur, a startup, or an established business, we're
          here to help you achieve your goals.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
