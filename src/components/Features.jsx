const Features = () => {
  return (
    <section className="px-16 py-16">
      <div className="flex flex-col  justify-center items-center gap-5">
        <h1 className="text-white text-center text-3xl font-medium">
          Content Package
        </h1>
        <p className="text-lg text-center sm:leading-8 lg:w-[58vw] mb-12 text-[#efefef]">
          By choosing us, you'll recieve an array of exceptional complimentary
          services that redefine excellence
        </p>
      </div>
      <div className="lg:flex items-center gap-28">
        <div className="lg:w-[50%] lg:flex lg:flex-col gap-6">
          <div className="flex lg:flex-row flex-col items-center gap-4">
            <img
              className="sm:w-[30%] w-[50%] lg:w-[15%]"
              src="https://i.postimg.cc/Kv1yMTZD/image-clipdrop-background-removal-1.png"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xl font-semibold">
                AI Voice Over
              </h4>
              <p className="text-[#ddd] text-lg">
                Free AI-narrated brilliancefor captivating content
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-4">
            <img
              className="sm:w-[30%] w-[50%] lg:w-[15%]"
              src="https://i.postimg.cc/s24Fr9cs/image-clipdrop-background-removal-2.png"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xl font-semibold">
                Precisive Editing
              </h4>
              <p className="text-[#ddd] text-lg">
                Your style.Perfected editing mirroring your vision
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-4">
            <img
              className="sm:w-[30%] w-[50%] lg:w-[15%]"
              src="https://i.postimg.cc/6Q3PkJyL/image-clipdrop-background-removal-3.png"
              alt=""
            />
            <div className="lg:px-0 sm:px-[6.5rem] flex lg:justify-normal justify-center flex-col gap-3">
              <h4 className="text-white text-xl font-semibold">
                24 - 48 hr Delivery
              </h4>
              <p className="text-[#ddd] text-lg">
                Quality Content, lightning-fast, plus free unlimited revisions.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:block hidden relative w-[45%] -mt-40">
          <img
            className="absolute z-10 -top-16 rounded-3xl rotate-12 shadow-xl left-28 w-[35%]"
            src="https://i.postimg.cc/D0bB27TL/Absolute-Reality-v16-Create-a-futuristic-design-purpel-and-blu-0.jpg"
            alt="ai generated image"
          />
          <img
            className="rounded-3xl shadow-inner absolute z-20 top-0 -left-10 w-[35%]"
            src="https://i.postimg.cc/3xB5MF97/Absolute-Reality-v16-Create-a-futuristic-design-purpel-and-blu-0-1.jpg"
            alt="ai generated image"
          />
          <img
            className="rounded-3xl absolute left-28 top-20 w-[35%] z-30"
            src="https://i.postimg.cc/yxQszX7k/3-D-Animation-Style-Create-a-futuristic-design-purpel-and-blue-0.jpg"
            alt="ai generated image"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
