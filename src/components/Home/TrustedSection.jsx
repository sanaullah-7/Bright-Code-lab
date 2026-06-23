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
    <section className="py-5 sm::py-12 mb-20">
        <h1 className="text-center text-gray">Since 2017, Trusted by:</h1>
      <div className="pb-10 sm:px-40">

        <div className=" mx-auto grid sm:grid-cols-2 mdd2:grid-cols-3 lg:grid-cols-5 mt-8 gap-y-10  ">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
               
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
      <div className="bg-darkblue px-1 pt-5 mt-10 sm:mt-0  text-white flex flex-wrap  justify-center items-center sm:gap-10  mdd:gap-44 lg:gap-64 max-w-screen mx-auto   ">
        <div className="space-y-2">
        <p className="w-70">
          (...) Working with them has been a pleasure. The working relationship
          and level of trust we've built up are outstanding. TeaCode has been
          super responsive to what we want to do and has a vested interest in
          our goals.
        </p>
        <h1 className="font-extrabold mt-10">Richard Ganpatsing</h1>
        <span>CTO</span>
        </div>
        <div >
          <Image src={"/Home/man.png"} width={300} height={700} alt=""/>
        </div>
      </div>
    </section>
  );
}
