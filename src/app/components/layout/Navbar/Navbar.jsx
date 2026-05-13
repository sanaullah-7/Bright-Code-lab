"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/Data";

import ServicesDropdown from "./ServicesDropdown";
import PortfolioDropdown from "./PortfolioDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [visibleMenu, setVisibleMenu] = useState(null);
  const [open, setOpen] = useState(null);

  function Handletoogle() {
    setOpen(!open);
  }

  // Navbar Reference
  const navbarRef = useRef(null);
  // Toggle Dropdown
  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
      setTimeout(() => setVisibleMenu(null), 500);
    } else {
      setVisibleMenu(menuName);
      setActiveMenu(menuName);
    }
  };
  // Close Dropdown Outside Click

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveMenu(null);
        setOpen(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div
        ref={navbarRef}
        className="mx-auto  md:mt-6 max-w-full md:w-[60em]  md:rounded-4xl border border-gray-300 bg-white"
      >
        {/* Navbar Top */}

        <div className="flex h-14 md:py-8 items-center justify-between  max-sm:px-6 px-9 md:px-2 text-lg">
          {/* Logo */}
          <Link
            href="/"
            className="flex h-auto w-auto -ml-2.5 md:ml-3 items-center gap-2"
          >
            <Image
              src="/ourlogo.png"
              alt="Logo"
              width={110}
              height={110}
              priority
              className=" h-11 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center w-[45%] gap-7 justify-between text-base  md:flex">
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
                    className=" flex items-center gap-1 text-md text-gray-700 transition cursor-pointer hover:text-darkblue"
                  >
                    {link.label}

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth="0.9"
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
                  className="text-base text-gray-700 transition hover:text-darkblue"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="rounded-full hidden md:flex border font-serif border-black bg-darkblue px-8 py-2.5 text-base  text-white transition hover:bg-[#1042b7]"
          >
            Contact us
          </Link>
          <button onClick={Handletoogle} className="md:hidden">
            <Menu className="h-5 w-5 " />
          </button>
        </div>

        {/* Dropdown Container */}

        <div
          className={`hidden md:grid  transition-all ease-in-out duration-300  ${
            activeMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr] "
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`border-t border-gray-300 transition-all ease-in-out ${
                activeMenu ? " opacity-100" : " opacity-0"
              }`}
            >
              {/* Services Dropdown */}
              {visibleMenu === "services" && <ServicesDropdown />}
              {/* activeMenu → visibleMenu */}
              {visibleMenu === "portfolio" && <PortfolioDropdown />}
            </div>
          </div>
        </div>
        {/* Mobile Size */}
        <div
          className={`grid md:hidden overflow-hidden  transition-all ease-in-out duration-300  ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr] "
          }`}
        >
          <div className="overflow-hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
