import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="pt-28 overflow-x-hidden">
      <div className="md:mt-16 w-full">
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
      <div className="flex flex-col items-center md:items-start  md:flex-row justify-center  lg:gap-12 mt-10 md:mt-32 w-full px-5 sm:px-8 md:px-10">
        {/* Left Side */}
        <div className="space-y-8 md:mt-20  ml-10">
          <h1 className="w-[70vw] md:w-80 text-darklab leading-7 ">
            We build custom web and mobile apps, enterprise software,and AI
            systems — for startups, scale-ups, and well-established companies.
            AI-augmented process, skilled engineers,Poland-based. We know what
            it takes to ship the right way.
          </h1>

          <div  >
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
          {/* mob and ballon */}
          <div className="mt-20 relative  items-center hidden md:flex ">
            <div>
              <Image
              src="/Home/mob3.png"
              alt="mob"
              width={250}
              height={250}
              className=""
              
            />
            </div>

            <div >
              <Image
                src="/Home/ballon.png"
                alt="balloon"
                width={200}
                height={200}
                className="  absolute bottom-8 left-96 "
              />
            </div>
          </div>
           
        </div>

        {/* Right Side */}
        <div className=" h-auto  ">
          <div className="relative w-md sm:w-xl h-100 sm:h-145 rounded-[120px] bg-darkblue  max-lg:scale-75  origin-center">
            <Image  
              className="absolute left-10 bottom-16 h-100 sm:h-140 w-50 sm:w-64"
              src="/Home/mob1.png"
              alt="mob"
              width={800}
              height={800}
            />

            <Image
              className="absolute left-70 sm:left-100 top-64 h-125 w-auto"
              src="/Home/mob2.png"
              alt="mob"
              width={300}
              height={1000}
            />
          </div>
          
           <Image
                src="/Home/ballon.png"
                alt="balloon"
                width={150}
                height={150}
                className=" flex  justify-center items-center ml-25 md:hidden    "
              />
          <div className="hidden sm:flex gap-10">
        
            <div>
              <Image
              src="/Home/map.png"
              alt="mob"
              width={800}
              height={500}
              className="md:hidden mt-16 "
              
            />
            </div>
                 <div>
               <Image
              src="/Home/mob3.png"
              alt="mob"
              width={250}
              height={250}
              className="md:hidden "
              
            />
             </div>
          </div>
          
        </div>
      </div>
          <h1 className='text-gray text-center mt-20 sm:mt-10'>What we can do for you?</h1>

    </main>
)
}