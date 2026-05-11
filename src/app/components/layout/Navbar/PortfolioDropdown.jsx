import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData, portfolioImages } from "@/data/Data";

export default function PortfolioDropdown() {
  return (
    <main className="flex  mb-5">
      <div className="flex w-[35vw] flex-col px-6 gap-4 text-sm mt-5">
        {portfolioData.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className={project.className}
          >
            {project.title}
          </Link>
        ))}
      </div>

      <div className="flex  text-sm px-5  mt-6 gap-8">
        {portfolioImages.map((project) => {
          // ── YAHAN RETURN ADD KIYA HAI ──
          return (
            <Link
              key={project.href}
              className="hover:text-darkblue group"
              href={project.href}
            >
              <Image
                className="rounded-2xl h-[30vh] w-[60vw] object-cover"
                src={project.src}
                alt={project.title}
                width={400} 
                height={300}
              />
              <h1 className="font-semibold tracking-widest mt-6">
                {project.title}
              </h1>
              <p className="text-gray group-hover:text-darkblue transition-colors">
                {project.description}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
