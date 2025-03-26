function ShowCase() {
  const stats = [
    { value: "105", label: "Net Weight" },
    { value: "26", label: "Top Speed" },
    { value: "38", label: "Max Range" },
    { value: "89", label: "Max Torques" },
    { value: "22%", label: "Hill Climbing" },
    { value: "2x", label: "Hydraulic Disc Brakes" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Technoclass
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-8">
          Think. Create. Innovate.
        </h3>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Product description will be here in one small paragraph. Product
          description will be here in one small paragraph. Product description
          Product description will be here in one small paragraph. Product
          description Product description will be here in one small paragraph.
          Product description will be here in one small paragraph. Product
          description Product description will be here in one small paragraph.
          Product description will be here in one small paragraph.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {stats.map((stat, index) => (
            <div 
              className="border-2 border-gray-900 border-opacity-30 p-10"
              key={index}
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShowCase;