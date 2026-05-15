import React from 'react'
import Image from 'next/image'
export default function section() {
  return (
    <div>
      
      <div className="flex justify-center mx-auto ">
        <div className="space-y-8">
        <h1 className="w-60">
          Build a custom solution or scale your digital product by engaging our
          full-cycle development expertise.
        </h1>
         <h1 className="space-x-8">
        <Image src="/Home/review.png" alt="Logo" width={200} height={200}/>
            <span className="font-bold text-2xl">Clutch</span>
            <span className="text-gray-700 text-sm">REVIEWS</span>
            </h1>
        </div>

        <div>
            <div className="h-145 relative w-xl rounded-[120px] bg-darkblue">
            <Image className="h-140 w-64 absolute left-10 bottom-16  " src="/Home/mob1.png" alt="" width={800} height={800} />
            <Image className=" w-full h-130 absolute left-100 top-60  " src="/Home/mob2.png" alt="" width={300} height={1000} />
        
            </div>
        </div>
      </div>
    </div>
  )
}
