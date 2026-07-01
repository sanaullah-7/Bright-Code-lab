import React from 'react'
import TrustedSection from '../Services/TrustedSection'
export default function contact({sectionRef}) {
  return (
    <div>
        <section id="contact" ref={sectionRef} className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 min-h-[90vh]">
          <div className="rounded-2xl bg-blue-600 p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-xl text-blue-100">Drop us your structural details below to get a precise timeline estimation outline within 24 hours.</p>
            <form className="mt-8 max-w-md space-y-4 text-gray-900">
              <input type="text" placeholder="Full Name" required className="w-full rounded-lg bg-white px-4 py-3 text-sm shadow focus:outline-none" />
              <button type="submit" className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">Submit Request</button>
            </form>
          </div>
        </section>
    </div>
  )
}
