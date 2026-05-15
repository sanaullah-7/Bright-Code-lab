import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="pt-28 overflow-x-hidden">
      {/* Hero Text */}
      <div className="mt-16 w-full">
        <h1 className="flex flex-col max-sm:mx-5 mx-10 serviceDd:mx-14 md:items-center  text-darklab tracking-wide max-sm:text-3xl text-4xl serviceDd:text-5xl gap-5 md:text-[75px]">
          <span className="md:-ml-72 lg:-ml-96">Custom Software</span>

          <span className="md:-ml-16 flex justify-center">
            Development Company
          </span>

          <span className="text-darkblue md:ml-40 lg:ml-52 flex justify-end">
            — Web, Mobile & AI
          </span>
        </h1>
      </div>

      {/* Section part 2 */}
      <div className="flex flex-col items-center md:items-start  md:flex-row justify-center  gap-16 lg:gap-24 mt-32 w-full px-5 sm:px-8 md:px-10">
        {/* Left Side */}
        <div className="space-y-8 ">
          <h1 className="w-60 text-darklab leading-7">
            Build a custom solution or scale your digital product by engaging
            our full-cycle development expertise.
          </h1>

          <div>
            <Image
              src="/Home/review.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-auto h-5"
            />

            <div className="flex items-center gap-7">
              <span className="font-bold text-2xl">Clutch</span>

              <span className="text-gray-600 text-sm">REVIEWS</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="h-200">
  <div className="relative w-xl h-145 rounded-[120px] bg-darkblue  max-lg:scale-75 max-sm:scale-[0.58] origin-center">

    <Image
      className="absolute left-10 bottom-16 h-140 w-64"
      src="/Home/mob1.png"
      alt=""
      width={800}
      height={800}
    />


    <Image
      className="absolute left-100 top-64 h-125 w-auto"
      src="/Home/mob2.png"
      alt=""
      width={300}
      height={1000}
    />
  </div>
</div>
      </div>
    </main>
  );
}
