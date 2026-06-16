import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

const services = [
  "Custom Software Development",
  "Web App Development",
  "Mobile App Development",
  "Enterprise App Development",
  "AI Development",
  "UX/UI Design",
  "Support & Maintenance",
];

const industries = [
  "Travel & Hospitality",
  "EdTech",
  "eCommerce",
  "Real Estate",
  "Sports & Entertainment",
  "Startups",
  "Artificial Intelligence",
];

const caseStudies = [
  "Trava",
  "Plannin",
  "Beat the Street",
  "Paymi",
  "Deutsche Bildung",
  "Buzzin",
  "more...",
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-12">
      
      {/* Top Border */}
      <div className="border-t border-gray pt-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Left Side */}
          <div className="md:border-r border-gray md:pr-10 lg:ml-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-darkblue leading-tight">
              Bright
              <br />
              <span className="text-blue-400">Code</span> Lab
            </h1>

            <div className="mt-8 space-y-2 text-gray text-sm">
              <p>Postępu 15, 7th floor</p>
              <p>02-676 Warsaw</p>
              <p>Poland</p>
              <p>tax no:</p>
              <p>PL5213775495</p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray">
                inquiry@teacode.io
              </p>

              <button className="underline mt-3 text-sm">
                Schedule a meeting
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl mb-6 font-medium">
              Services
            </h2>

            <div className="space-y-4">
              {services.map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="block text-gray hover:text-darkblue underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h2 className="text-2xl mb-6 font-medium">
              Industries
            </h2>

            <div className="space-y-4">
              {industries.map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="block text-gray hover:text-darkblue underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h2 className="text-2xl mb-6 font-medium">
              Case studies
            </h2>

            <div className="space-y-4">
              {caseStudies.map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="block text-gray hover:text-darkblue underline"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-16 text-right">
              <button className="hover:text-darkblue">
                Join us as a freelancer!
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray mt-14 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Left */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray text-sm">
              <span>Bright CodeLab</span>
              <span>We code with 💡</span>
              <span>Privacy policy</span>
              <span>Cookie policy</span>
              {/* <span>Site Language ▼</span> */}
            </div>

            {/* Right */}
            <div className="flex gap-4 text-xl ">
              <FaLinkedinIn className="cursor-pointer hover:text-darkblue " />
              <FaFacebookF className="cursor-pointer hover:text-darkblue " />
              <FaInstagram className="cursor-pointer hover:text-darkblue " />
              <FaYoutube className="cursor-pointer hover:text-darkblue " />
              <FaSpotify className="cursor-pointer hover:text-darkblue " />
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}