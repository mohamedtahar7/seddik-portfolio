const About = () => {
  return (
    <section
      id="about"
      className="flex md:flex-row flex-col items-center md:gap-48 gap-20 px-16"
    >
      {/* about img */}
      <div className="py-4 px-8 bg-white rounded-3xl">
        <img
          className="md:w-[17vw]"
          src="https://i.postimg.cc/HLYtLPWf/seddik-logo.png"
          alt="logo"
        />
      </div>
      {/* about text */}
      <div className="md:w-[45vw]">
        <h1 className="text-2xl text-white font-semibold mb-6">About Us</h1>
        <p className="text-lg leading-8 text-white font-normal">
          Introducing AI Crafted Media : Breathing Life into Frames. Witness the
          artistry and passion that infuse their video editing portfolio, making
          every moment an unforgettable cinematic experience. 🎥✨
        </p>
      </div>
    </section>
  );
};

export default About;
