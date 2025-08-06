const Stand = () => {
  return (
    <section className="three min-h-[60vh] md:h-[85vh] bg-[#bd9fff] flex items-center pt-[100px] md:pt-[130px] overflow-hidden">
      <div className="w-[90%] mx-auto flex justify-center items-center relative">
        <h3 className="absolute top-0 left-1/2 -translate-x-1/2 text-[12vw] md:text-[20vh] lg:text-[26vh] uppercase font-[anton] text-[#6a47b4] tracking-[1vw] md:tracking-[7px] text-center">
          blackberry
        </h3>
        <img src="/img/stand.png" alt="" className="w-[90%] md:w-[70%] lg:w-[55%] max-w-[700px]" />
      </div>
    </section>
  );
};
export default Stand;