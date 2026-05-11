import React from 'react'
import Link from "next/link";
import { servicesdata } from '@/data/Data'
export default function ServicesDropdown() {
  return (
    <>
    <main className='grid grid-cols-2 px-52 p-5  w-[80vw]  '>
    <div className='flex flex-col  gap-4 text-sm mt-5 '>
        <h1 className='text-md font-semibold tracking-widest '>DEVELOPMENT</h1>
      {servicesdata.map((service)=>(
        <Link 
        className='hover:text-darkblue rounded-2xl text-gray'
        key={service.href}
        href={service.href}
        >
          {service.title}
        </Link>
      ))}
    </div>
    <div className='flex flex-col  gap-8 text-sm mt-6 px-20 w-[40vw] '>
    <div>
        <h1 className='text-md font-semibold  tracking-widest mb-2 '>DESIGN</h1>
        <Link className='hover:text-darkblue rounded-2xl text-gray' href="/services/ux-ui-product-design">Custom UX/UI Design</Link>
    </div>
    <div>
        <h1 className='text-md font-semibold  tracking-widest  mb-2 '>MAINENANCE</h1>
        <Link className='hover:text-darkblue rounded-2xl text-gray' href="/services/support-and-maintenance">Maintenance</Link>
    </div>
    </div>
    </main>
    </>
  )
}
