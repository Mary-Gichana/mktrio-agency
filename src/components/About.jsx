import React from "react";

import home1 from "../assets/home1.jpeg";
function About() {
  return (
    <div>
      <section className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center px-4">
        <div>
          <h2 className="text-2xl  font-semibold mb-2">About Our Agency</h2>
          <p className="mb-4 text-gray-700">
            At Our House Agency, we specialize in connecting people with the
            perfect homes. Whether you're buying your first home, investing in
            property, or selling your current house, our experienced team is
            here to guide you every step of the way. We pride ourselves on
            integrity, transparency, and exceptional customer service. Our
            mission is to make your real estate journey smooth, stress-free, and
            successful.
          </p>
        </div>
        <img
          src={home1}
          alt="Shop interior"
          className="rounded shadow-lg w-full h-60 object-cover"
        />
      </section>

      <section className="bg-white py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-xl font-bold mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-600 mb-2">Integrity</h4>
              <p className="text-gray-600">
                We believe in honesty and transparency in every property
                transaction. From pricing to paperwork, we ensure our clients
                are fully informed and confident in every decision they make.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-600 mb-2">Flexibility</h4>
              <p className="text-gray-600">
                Every client has unique needs. Whether you're buying, selling,
                or renting, we tailor our services to match your timeline,
                budget, and lifestyle goals.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-600 mb-2">Reliability</h4>
              <p className="text-gray-600">
                We are committed to delivering on our promises. Our team works
                diligently to ensure smooth processes, timely communication, and
                successful property transactions you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
