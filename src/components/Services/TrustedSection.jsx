import React from 'react'
import Image from 'next/image';
const logos = [
  "/Home/logo1.1.png",
  "/Home/logo1.2.png",
  "/Home/logo1.3.png",
  "/Home/logo1.4.png",
  "/Home/logo1.5.png",
];
export default function TrustedSection({logo}) {
  return (
     <section className="py-5 sm::py-12 mb-20">
            <h1 className="text-center text-gray">TRUSTED BY:</h1>
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
     
           <div className='flex justify-center'>
          <div className='   w-[50vw] p-3 items-center rounded-full border text-center  space-x-14 '>
          <a href="#home">For Whom</a>
          <a href="#about">Expertise</a>
          <a href="#contact">Industries</a>
          <a href="">Team</a>
          <a href="">Pricing</a>
          <a href="">FAQ</a>
          </div>
          </div>
          <section id="home"  className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 min-h-[90vh]">
          <div className="rounded-2xl bg-blue-600 p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-xl text-blue-100">Drop us your structural details below to get a precise timeline estimation outline within 24 hours.</p>
            <form className="mt-8 max-w-md space-y-4 text-gray-900">
              <input type="text" placeholder="Full Name" required className="w-full rounded-lg bg-white px-4 py-3 text-sm shadow focus:outline-none" />
              <button type="submit" className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">Submit Request</button>
            </form>
          </div>
        </section>
          <section id="about"  className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 min-h-[90vh]">
          <div className="rounded-2xl bg-blue-600 p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-xl text-blue-100">Drop us your structural details below to get a precise timeline estimation outline within 24 hours.</p>
            <form className="mt-8 max-w-md space-y-4 text-gray-900">
              <input type="text" placeholder="Full Name" required className="w-full rounded-lg bg-white px-4 py-3 text-sm shadow focus:outline-none" />
              <button type="submit" className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">Submit Request</button>
            </form>
          </div>
        </section>
          <section id="contact"  className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 min-h-[90vh]">
          <div className="rounded-2xl bg-blue-600 p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-xl text-blue-100">Drop us your structural details below to get a precise timeline estimation outline within 24 hours.</p>
            <form className="mt-8 max-w-md space-y-4 text-gray-900">
              <input type="text" placeholder="Full Name" required className="w-full rounded-lg bg-white px-4 py-3 text-sm shadow focus:outline-none" />
              <button type="submit" className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">Submit Request</button>
            </form>
          </div>
        </section>

        </section>
  )
}
