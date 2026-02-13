import React from "react";

function Navbar(){
    return (
      <>
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-3">
            <img
              src="src/assets/housing1.jpg"
              alt="housing1image"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl text-[#d4af37] tracking-wide">
              mk Trio Agency
            </span>
          </div>
          <div className="space-x-6 text-[#d4af37]">
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </nav>
      </>
    );
}

export default Navbar;