import React from "react";
import Image from "next/image";

const buttons = [
  "Travel & Hospitality",
  "Sports & Entertainment",
  "EdTech",
  "Fitness",
  "FinTech",
];

export default function ProjectSection() {
  return (
    <>
    <section className="pb-20">
      <div className="max-w-7xl px-2 md:px-52 mx-auto space-y-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl tracking-wider text-center md:text-left">
          Our <span className="text-darkblue">Project Portfolio</span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {buttons.map((button, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full border border-black transition-all duration-300 hover:bg-darkblue hover:text-white cursor-pointer ${
                i === 0 ? "bg-darkblue text-white" : ""
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex items-end justify-between gap-4 sm:gap-32 xl:gap-52 space-y-8 mt-16 px-5 sm:px-14 md:px-24 lg:px-0">
          
          {/* Left Side */}
          <div className=" space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl  max-w-xl  ">
              Plannin – Accommodation Booking Platform
            </h1>

            <p className="text-sm sm:text-base text-gray-600 w-[38vw] 2xl:w-[30vw]">
              Discover how we leveraged Next.js to deliver a modern,
              scalable, and user-centric accommodation booking
              experience for Plannin.
            </p>

            <button className="border border-black px-4 py-2 rounded-full tracking-wide cursor-pointer hover:bg-blue-300 hover:border-[blue] transition-all duration-300">
              Read Full Case Study
            </button>
          </div>

          {/* Right Side Image */}
         <div className="shrink-0 self-end">
            <Image
              src="/Home/girl.png"
              width={300}
              height={300}
              alt="Project Preview"
              className="w-[35vw] sm:w-72 md:w-96 h-auto"
            />
          </div>

        </div>
      </div>
  {/* Background blur image */}
         <div className="relative mt-10 sm:mt-14 md:mt-20 ">
  <Image
    src="/Home/blurbg.png"
    width={1400}
    height={500}
    alt="background"
    className="w-full h-full "
  />

  {/* Overlay images */}
  <div className="absolute inset-0 flex justify-between ">
    
    {/* Left — bothgender */}
    <div className="w-[40%]  h-full flex ml-16 ">
      <Image
        src="/Home/bothgender.png"
        width={550}
        height={600}
        alt="both gender"
        className="w-full h-auto object-contain "
      />
    </div>

    {/* Right — handmob */}
    <div className="relative  w-[50%] 2xl:w-[41%]  flex items-end justify-end">
      <Image
        src="/Home/handmob.png"
        width={500}
        height={400}
        alt="hand with mobile"
        className="w-full h-auto object-contain "
      />
    </div>

  </div>
</div>
    </section>
    </>
  );
}