import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import threeBrm from "../assets/3brm.jpeg";
import villa from "../assets/villa.jpeg";
import office from "../assets/office.jpeg";
const featuredProperties = [
  {
    id: 1,
    image: threeBrm,
    title: "Modern 3 Bedroom Apartment",
  },
  {
    id: 2,
    image:
      villa,
    title: "Luxury 4 Bedroom Villa",
  },
  {
    id: 3,
    image:
      office,
    title: "Executive Office Space",
  },
];

function Services() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      {/* ================= HEADER ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37]">
          Our  Services
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Delivering exceptional real estate solutions with elegance, integrity,
          and unmatched professionalism.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "🏠 Selling a House",
              items: [
                "Property advertising & luxury marketing",
                "Professional photography & listing",
                "Finding qualified buyers",
                "Private viewings & negotiation",
                "Complete legal handling",
              ],
            },
            {
              title: "🔑 Buying a House",
              items: [
                "Exclusive property search",
                "Private property tours",
                "Market & investment advice",
                "Price negotiation",
                "Documentation support",
              ],
            },
            {
              title: "🏢 Renting / Letting",
              items: [
                "Premium tenant sourcing",
                "Tenant screening",
                "Lease preparation",
                "Rent management support",
              ],
            },
            {
              title: "🛠 Property Management",
              items: [
                "Tenant management",
                "Maintenance coordination",
                "Rent collection",
                "Compliance & inspections",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-[#d4af37] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {service.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-[#d4af37] mb-12">
          Featured Luxury Listings
        </h3>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#d4af37] transition duration-300">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-white">{property.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#d4af37] mb-12">
            Client Testimonials
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "MKTrio delivered exceptional service and helped us secure our dream home effortlessly.",
                name: "Grace Wanjiku",
              },
              {
                text: "Professional, discreet, and highly efficient throughout our selling process.",
                name: "Brian Mwangi",
              },
              {
                text: "Their property management service is truly world-class.",
                name: "Esther Njeri",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-[#d4af37] transition"
              >
                <p className="italic text-gray-300">"{testimonial.text}"</p>
                <div className="mt-4 text-sm text-[#d4af37]">
                  – {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#d4af37] mb-12">
          Why Choose Trio Agency?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "Experienced & licensed agents",
            "Exclusive property listings",
            "Transparent premium pricing",
            "Personalized luxury service",
            "Smooth & secure transactions",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] hover:border-[#d4af37] transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
