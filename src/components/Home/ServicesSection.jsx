import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/Home/card1.png",
    title: "Custom Software Development",
    description:
      "Get custom web, mobile or enterprise-level solutions tailored to your business needs.",
    button: "Read More",
  },
  {
    id: 2,
    image: "/Home/card2.png",
    title: "AI Development & R&D Projects",
    description:
      "Let's enrich your app with Al features, automateand optimise processes or conduct an R&Dproject.",
    button: "Read More",
  },
  {
    id: 3,
    image: "/Home/card3.png",
    title: "UX/UI Product Design",
    description:
      "We can design your digital solution or website, and then make it live by the same team.",
    button: "Read More",
  },
  {
    id: 4,
    image: "/Home/card2.png",
    title: "Support & Maintenance",
    description: "We will support and maintain your app or customsolution, andexpand its capabilities.",
    button: "Read More",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-2xl md:text-3xl lg:text-4xl  tracking-widest leading-tight">
          <span className="text-darkblue">Custom</span> Software
          <br />
          Development Services
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  lg:w-[90vw] xl:w-[70vw]  mx-auto">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-[#EBE7E4] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={200}
              className="object-contain mb-6"
            />

            <h2 className="text-xl font-semibold mb-4">{card.title}</h2>

            <p className="text-gray-600 text-sm leading-6 mb-6 max-w-xs">
              {card.description}
            </p>

            <button className="border border-black rounded-full px-6 py-3 my-auto text-sm font-medium hover:bg-darkblue  cursor-pointer hover:text-white transition duration-300">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
