import React from "react";
import Link from "next/link";
import { servicesdata } from "@/data/Data";
import { PencilRuler, Settings } from "lucide-react";
// import { TbBracketsAngleOff } from "react-icons/tb";
import Image from "next/image";

export default function ServicesDropdown() {
  return (
    <>
      <main className="serviceDd:grid grid-cols-2 md:px-32 mb-5 text-darklab  ">
        <div className="flex flex-col  gap-4 text-sm mt-5 ">
          <div className="flex gap-5 ">
            {/* <TbBracketsAngleOff className='h-4.5 w-4.5 text-gray-600'  /> */}
            <Image
              
              src="/Home/angleicon.png"
              alt="logo"
              height={20}
              width={20}
              unoptimized
            />
            <h1 className="text-md font-semibold tracking-widest ">
              DEVELOPMENT
            </h1>
          </div>
          {servicesdata.map((service) => (
            <Link
              className="hover:text-darkblue rounded-2xl  ml-9.5 "
              key={service.href}
              href={service.href}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col  gap-8 text-sm mt-5 serviceDd:px-24 w-screen ">
          <div>
            <div className="flex gap-5 ">
              <PencilRuler className="h-4.5 w-4.5 " />
              <h1 className="text-md font-semibold  tracking-widest mb-2 ">
                DESIGN
              </h1>
            </div>
            <Link
              className="hover:text-darkblue ml-9.5 rounded-2xl"
              href="/services/ux-ui-product-design"
            >
              Custom UX/UI Design
            </Link>
          </div>
          <div>
            <div className="flex gap-5 ">
              <Settings className="h-4.5 w-4.5 text-gray-500" />
              <h1 className="text-md font-semibold  tracking-widest  mb-2 ">
                MAINENANCE
              </h1>
            </div>
            <Link
              className="hover:text-darkblue ml-9.5 rounded-2xl text-gray"
              href="/services/support-and-maintenance"
            >
              Maintenance
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
