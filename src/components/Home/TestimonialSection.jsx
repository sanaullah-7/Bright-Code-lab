import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col  justify-center items-center mx-auto px-5 sm:px-16 mdd:px-24 ">
      {/* Heading */}
      <div className="text-center  mx-2">
        <h1 className="text-gray max-sm:text-sm mdd:text-mdd lg:text-lg pb-6 sm:mt-10">
          WE GAINED THE TRUST OF OUR CLIENTS
        </h1>
        <h1 className="text-2xl sm:text-3xl mdd:text-4xl lg:text-5xl text-darkblue tracking-widest leading-tight">
          Grow your business with <br /> the trustworthy partner
        </h1>
      </div>

      {/* Image — full width, no blur */}
      <div className="mt-10 sm:mt-16 mdd:mt-20 ">
        <Image
          src="/Home/feedback.png"
          alt="Client Testimonials"
          height={10}
          width={1400}
          priority
        />
      </div>
      <button className="text-center max-sm:text-[0.5em] xl:text-lg  mdd:w-[26vw] xl:w-[28vw] mt-10 mdd:mt-16 mb-20 rounded-4xl p-2 sm:p-4 border bg-darkblue text-white cursor-pointer tracking-wider">
        Let’s talk about your project
      </button>
    </section>
  );
}
