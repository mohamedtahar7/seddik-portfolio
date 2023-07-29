const Hero = () => {
  return (
    <section className="flex items-center pt-24 pb-48 px-16">
      {/* Text Hero */}
      <div className="w-[75vw]">
        <h1 className="text-6xl font-semibold mb-5 leading-[5rem] text-white">
          Editing Elegance
        </h1>
        <p className="text-2xl mb-12 text-[#bbb]">
          A Video Editor's Creative Showcase 🎬✨
        </p>
        <a
          className="text-xl hover:bg-[#071221] transition text-white py-4 px-6 rounded-xl bg-[#0a192f] "
          href="#"
        >
          View More
        </a>
      </div>
      {/* Img Hero */}
      <div className="w-[70vw]">
        <img
          className="md:block hidden"
          src="/src/assets/hero-img.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
