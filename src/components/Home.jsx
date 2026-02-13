import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import housing3 from "../assets/housing3.jpg";


function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative bg-black text-white h-[620px] flex flex-col justify-center items-center">
        <img
          src={housing3}
          alt="housing background"
          className="absolute inset-0 w-full h-full object-cover  "
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm text-[#d4af37] uppercase tracking-widest">
            Find Your Dream Home Today
          </p>
          <h1 className="text-3xl text-[#d4af37] md:text-5xl font-bold mt-2 mb-4">
            We help you buy, sell, and rent properties with confidence. Trusted,
            professional, and committed to finding the perfect home for you.
          </h1>
        </div>
      </section>

      <section id="about" className="bg-white">
        <About />
      </section>

      <section id="services" className="bg-white">
        <Services />
      </section>

      <section id="contact" className="bg-white">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
