export default function ResultsSection() {
  const stats = [
    {
      value: "+70",
      unit: "%",
      label: "month-to-month revenue growth rate",
    
    },
    {
      value: "+30",
      unit: "%",
      label: "month-to-month userbase growth rate",
    
    },
    {
      value: "38",
      unit: "%",
      label: "of new customers book the trip with Plannin",
    
    },
  ];

  return (
    <section className="max-w-7xl px-5 sm:px-10 mdd:px-16 lg:px-24 pb-20 ">

      {/* Top green line */}
      <div className="w-26 sm:w-32 h-2 rounded-2xl bg-darkblue mb-6" />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl mdd:text-5xl font-semibold text-gray-900 mb-4">
        Results We Deliver
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-sm sm:text-base max-w-lg mb-12">
        It's not enough to build a marvelous solution. It needs to drive your
        business growth and ROI.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-3xl p-8 flex flex-col justify-between min-h-[180px] ${
              i === 2
                ? "bg-darkblue text-white"
                : "bg-white  "
            }`}
          >
            {/* Big number */}
            <div className="flex items-end gap-1">
              <span
                className={`text-5xl sm:text-6xl font-bold leading-none `}
              >
                {stat.value}
              </span>
              <span
                className={`text-2xl font-semibold mb-1`}
              >
                {stat.unit}
              </span>
            </div>

            {/* Bottom label with left border accent */}
            <div
              className={`border-l-4 pl-3 mt-6  tracking-wider ${
                i === 2
                  ? ""
                  : "border-darkblue "
              }`}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}