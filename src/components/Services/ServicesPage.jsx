import Image from "next/image";

export default function HeroSection({
  description,
  para,
  image,
  // web
  borderClass,
  topClass,
}) {

  return (
    <>
      <section className="md:hidden mt-20 md:mt-0 pb-8 sm:pb-12 overflow-hidden">
        <div className="px-5 sm:px-8 space-y-4 sm:space-y-5">
          {/* Border Line */}
          <div className="border-t-4 sm:border-t-6 border-darkblue mb-2 w-48 sm:w-60 md:w-14 rounded-full"></div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl max-w-xs text-darklab leading-tight tracking-wider">
            {description}
          </h1>

          {/* Description Text */}
          <p className="sm:max-w-80 max-w-96 text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
            {para}
          </p>

          {/* Clutch Review */}
          <div>
            <Image
              src="/Home/review.png"
              alt="review"
              width={180}
              height={40}
              className="h-auto w-auto"
            />

            <div className="flex items-center gap-6 mt-2">
              <span className="font-bold text-lg">
                Clutch
              </span>

              <span className="text-xs text-gray-500">
                35 REVIEWS
              </span>
            </div>
          </div>
        </div>

        {/* Image Below Text */}
        <div className=" w-full h-auto mt-6">
          <Image
            src={image}
            height={600}
            width={1400}
            alt="hero"
            // loading="lazy"
            priority
            className="object-cover h-auto w-full"
          />
        </div>
      </section>

     {/* hidden on small */}
      <section className="hidden md:block pb-8  sm:pb-12 mdd:pb-16 lg:pb-20 overflow-hidden relative">
        <div className="w-full flex relative">
          
          {/* Background Image - Full Width */}
          <div className="relative w-full h-auto ">
            <Image
              src={image}
              height={600}
              width={1400}
              alt="hero"
              // loading="lazy"
              priority
              className="object-cover h-aut o w-full"
            />
          </div>

          {/* Text Overlay - Absolute Positioned */}
          <div className="absolute inset-0 flex items-center ">
            <div className={topClass||""}>
              <div className=" mt-20 xl:mt-0 ml-16 mdd:ml-20 lg:ml-40  xl:ml-52 space-y-4 sm:space-y-5 mdd:space-y-6 lg:space-y-7">
                
                {/* Border Line */}
                <div className= {borderClass|| " border-t-none mdd:border-t-8 mb-1 border-darkblue mdd:w-46 rounded-full"}></div>
               

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl max-w-xs mdd:text-4xl lg:text-5xl text-darklab leading-tight tracking-wider">
                  {description}
                </h1>

                {/* Description Text */}
                <p className=" sm:max-w-80 max-mdd:max-w-96 text-gray-600 leading-6 sm:leading-8 ">
                  {para}
                </p>

                {/* Clutch Review */}
                <div>
                  <Image
                    src="/Home/review.png"
                    alt="review"
                    width={180}
                    height={40}
                    className="h-auto w-auto"
                  />

                  <div className="flex items-center gap-6 mt-1 ">
                    <span className="font-bold text-lg sm:text-2xl">
                      Clutch
                    </span>

                    <span className="text-xs sm:text-sm text-gray-500">
                      35 REVIEWS
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}