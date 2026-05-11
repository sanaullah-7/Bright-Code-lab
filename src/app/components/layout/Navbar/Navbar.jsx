"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { navLinks } from "@/data/Data";

import ServicesDropdown from "./ServicesDropdown";
import PortfolioDropdown from "./PortfolioDropdown";

export default function Navbar() {

  const [activeMenu, setActiveMenu] = useState(null);

 
  // Navbar Reference
  // const navbarRef = useRef(null);
  // // Toggle Dropdown
  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };
  // Close Dropdown Outside Click

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (navbarRef.current && !navbarRef.current.contains(event.target)) {
  //       setActiveMenu(null);
  //     }
  //   };

    // document.addEventListener("mousedown", handleClickOutside);

    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  // }, []);

  return (
    <header>
      <div
        // ref={navbarRef}
        className="mx-auto md:mt-6 max-w-full md:w-[60em]  md:rounded-4xl border-1 border-gray-300 bg-white"
      >
        
        {/* Navbar Top */}
       

        <div className="flex h-16 items-center justify-between px-5 text-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ourlogo.png"
              priority
              alt="Logo"
              width={140}
              height={140}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center w-[45%] gap-6 justify-between  md:flex">
            {navLinks.map((link) => {
              // Check dropdown items
              const hasDropdown =
                link.label === "Services" || link.label === "Portfolio";

              // Dropdown Navigation Item
              if (hasDropdown) {
                const menuName = link.label.toLowerCase();

                return (
                  <button
                    key={link.href}
                    onClick={() => toggleMenu(menuName)}
                    className="flex items-center gap-1 text-md text-gray-700 transition cursor-pointer hover:text-darkblue"
                  >
                    {link.label}

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        activeMenu === menuName ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                );
              }

              // Normal Navigation Link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-md text-gray-700 transition hover:text-darkblue"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="rounded-full hidden md:flex border border-black bg-darkblue px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1042b7]"
          >
            Contact Us
          </Link>
          <button className="md:hidden"><Menu/></button>
        </div>

       
        {/* Dropdown Container */}
        

        <div
          className={`grid  transition-all duration-300 ease-in-out ${
            activeMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t border-gray-200 transition-all duration-300 ${
                activeMenu
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
            >
              {/* Services Dropdown */}
              {activeMenu === "services" && <ServicesDropdown />}

              {/* Portfolio Dropdown */}
              {activeMenu === "portfolio" && <PortfolioDropdown />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
