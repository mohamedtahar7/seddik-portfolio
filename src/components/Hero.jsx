const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col items-center lg:pt-48 pt-32 pb-40 px-16">
      {/* Text Hero */}
      <div className="w-[75vw]">
        <h1 className="text-6xl font-semibold mb-5 leading-[5rem] text-white">
          Editing Elegance
        </h1>
        <p className="text-2xl mb-12 text-[#bbb]">
          A Video Editor's Creative Showcase 🎬✨
        </p>
        <div className="flex md:flex-row flex-col items-center gap-6">
          <a
            className="md:w-fit w-full text-center text-xl hover:opacity-80 transition text-[#0a192f] py-4 px-6 rounded-xl bg-white"
            href="#contact"
          >
            Contact Us
          </a>
          <a
            className="md:w-fit w-full text-center text-xl hover:bg-[#071221] transition text-white py-4 px-6 rounded-xl bg-[#0a192f] "
            href="#about"
          >
            Learn More
          </a>
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
