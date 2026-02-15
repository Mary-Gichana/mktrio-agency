import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-3xl text-[#d4af37] font-bold  text-center mt-12">
        {" "}
        Contact Us
      </h2>
      <section className="relative bg-black text-white py-16 flex flex-col items-center mt-8">
        <div className="relative z-10 text-center">
          <p className="text-lg text-[#d4af37] mb-4">Ready to get started?</p>
          <h2 className="text-2xl text-[#d4af37] md:text-3xl font-bold mb-4">
            Visit Trio House Agency Today!
          </h2>

          <div className="mt-8 text-sm text-gray-300 space-y-1">
            <p>
              <strong>Address:</strong>
              ELDORET
            </p>
            <p>
              <strong>Phone:0720436574</strong>
            </p>
            <p>
              <strong>Email:@gmail.com</strong>
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-8 text-sm text-gray-400">
          &copy; 2025 Trio Agency in Eldoret. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default Contact;
