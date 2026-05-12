"use client";
import React from 'react'

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/Data";

import ServicesDropdown from "./ServicesDropdown";
import PortfolioDropdown from "./PortfolioDropdown";


export default function MobileMenu() {
      const [activeMenu, setActiveMenu] = useState(null);
      const [visibleMenu, setVisibleMenu] = useState(null); 
   
    
      // Navbar Reference
      const navbarRef = useRef(null);
      // // Toggle Dropdown
      // toggleMenu function update karo
      const toggleMenu = (menuName) => {
        if (activeMenu === menuName) {
          setActiveMenu(null); // animation shuru
          setTimeout(() => setVisibleMenu(null), 500); // animation khatam hone ke baad unmount
        } else {
          setVisibleMenu(menuName); 
          setActiveMenu(menuName); 
        }
      };
      // Close Dropdown Outside Click
    
      useEffect(() => {
        function handleClickOutside (event)  {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setActiveMenu(null);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    
  return (
 <div
        ref={navbarRef}
        className=" md:hidden   border-1 border-gray-300 bg-white"
      >
        {/* Navbar Top */}

        <div className=" h-full grid grid-cols-1 gap-y-44 pb-10 text-lg">
          {/* Logo */}
          

          {/* Navigation */}
          <nav className="  text-base  ">
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
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="`"
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
                  className="text-base flex  text-gray-700 transition hover:text-darkblue"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="rounded-full  border font-serif border-black bg-darkblue px-7 py-2.5 text-base  text-white transition hover:bg-[#1042b7]"
          >
            Contact us
          </Link>
          
        </div>

        {/* Dropdown Container */}

        <div
          className={`hidden md:grid  transition-all ease-in-out duration-300  ${
            activeMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr] "
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t border-gray-200 transition-all ease-in-out ${
                activeMenu
                  ? " opacity-100"
                  : " opacity-0"
              }`}
            >
              {/* Services Dropdown */}
              {visibleMenu === "services" && <ServicesDropdown />}
              {/* activeMenu → visibleMenu */}
              {visibleMenu === "portfolio" && <PortfolioDropdown />}
              
            </div>
          </div>
        </div>
      </div>

  )
}
