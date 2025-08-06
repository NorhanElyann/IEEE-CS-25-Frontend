const About = () => {
  return (
    <section className="z-0 two py-[80px] md:py-[100px] min-h-screen">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 w-full">
          <h2 className="text-[7vw] md:text-[3.5vw] text-[#0d071c] capitalize relative z-[20] leading-tight">
            Best Ingredients<br /> food juices <span className="text-[#825DD2]">on right handmade</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 mt-8 mb-10">
            <div className="flex-1">
              <img src="/img/blackberry.png" alt="" className="w-[50px] md:w-[25%] rotate-[60deg]" />
              <h4 className="text-[#0d071c] my-4 text-[4vw] md:text-[1.1vw]">Lorem, Masdrites.</h4>
              <p className="text-[#4b4b4b] text-[3.5vw] md:text-[0.9vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex-1">
              <img src="/img/blackberry.png" alt="" className="w-[50px] md:w-[25%] rotate-[60deg]" />
              <h4 className="text-[#0d071c] my-4 text-[4vw] md:text-[1.1vw]">Premum lights</h4>
              <p className="text-[#4b4b4b] text-[3.5vw] md:text-[0.9vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-block px-[35px] py-[12px] text-[4vw] md:text-[18px] font-bold bg-[#825DD2] text-white rounded-full border border-[#825DD2]"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
