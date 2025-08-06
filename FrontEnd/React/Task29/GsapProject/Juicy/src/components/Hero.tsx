import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen bg-[#825DD2] hero ">
      <header className="absolute top-0 left-0 right-0 z-[1000] h-20">
        <nav className="w-[90%] mx-auto flex items-center justify-between h-[100px] relative">
          <a href="#" className="text-white text-[8vw] md:text-[40px] font-[anton]">
            Juicy
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-white text-[20px] font-sans">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">Contact</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden text-white text-2xl z-[1001]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-[100px] right-0 w-full bg-[#6c4cb0] text-white flex flex-col items-center gap-6 py-6 text-xl md:hidden z-[1000]">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Product</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          )}
        </nav>
      </header>

      
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <h1 className="text-[28vw] text-white font-[anton] font-black tracking-[2vw]">
          JUICY
        </h1>

       
        <img id="cans" className="absolute z-[99999] w-[60%] md:w-[35%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/img/can.png" alt="" />
        <img id="blackberry1" className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[22vw] md:w-[13vw]" src="/img/blackberry.png" alt="" />
        <img id="blackberry2" className="absolute top-[65%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[24vw] md:w-[15vw]" src="/img/blackberry.png" alt="" />
        <img id="blackberry3" className="absolute top-[35%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[12vw] md:w-[6vw]" src="/img/blackberry.png" alt="" />
        <img id="leaf" className="absolute z-[99999] top-[60%] left-[10%] w-[25vw] md:w-[12%]" src="/img/leaf.png" alt="" />
        <img id="leaf3" className="absolute z-[99999] top-[10%] right-0 w-[30vw] md:w-[20%]" src="/img/coconoutleaf.png" alt="" />
      </div>

      <div className="absolute top-1/2 left-1/2 w-[80%] h-full -translate-x-1/2 -translate-y-1/2 z-[1] bg-[radial-gradient(circle,_#bd9fff,_transparent,_transparent)]" />
    </div>
  );
};

export default Hero;
