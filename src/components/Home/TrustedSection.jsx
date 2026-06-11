import React from "react";
import Image from "next/image";

const logos = [
  "/Home/logo1.1.png",
  "/Home/logo1.2.png",
  "/Home/logo1.3.png",
  "/Home/logo1.4.png",
  "/Home/logo1.5.png",
];

export default function TrustedSection() {
  return (
    <section className="py-16">
      <div className="py-16 sm:px-40">
        <h1 className="text-center text-gray">Since 2017, Trusted by:</h1>

        <div className=" mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 gap-y-10  ">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                key={logo.logo}
                src={logo}
                alt="logo"
                width={110}
                height={110}
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div
  className="bg-darkblue text-white flex flex-wrap items-center justify-center
             gap-8 md:gap-16 lg:gap-64
             max-w-7xl mx-auto px-6 py-8"
>
  <div className="space-y-2 max-w-md">
    <p>
      (...) Working with them has been a pleasure. The working
      relationship and level of trust we've built up are outstanding.
      TeaCode has been super responsive to what we want to do and has a
      vested interest in our goals.
    </p>

    <h1 className="font-extrabold mt-10">
      Richard Ganpatsing
    </h1>

    <span>CTO</span>
  </div>

  <div className="shrink-0">
    <Image
      src="/Home/man.png"
      alt="Richard Ganpatsing"
      width={300}
      height={700}
      className=" relative bottom-32 left-10 md:bottom-0 md:left-0 w-64 lg:w-72 h-auto"
    />
  </div>
</div>
    </section>
  );
}
