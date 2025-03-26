import Image from "next/image";
import iPadPro from "@/assets/images/ipadPro.png";
import LevitatingCard from "./levitatingCard";

function HeroPage() {
  return (
    <section className="pt-24 pb-12 px-4 min-h-fit h-[90vh]">
      <div className="container mx-auto grid xl:grid-cols-3 gap-8 items-center text-black">
        {/* Desktop View */}
        <div className="hidden xl:block lg:col-span-1">
          <h1 className="text-5xl font-bold mb-6">Technoclass</h1>
          <h2 className="text-3xl font-semibold mb-4">
            Experience the future of teaching
          </h2>
          <p className="text-gray-600 mb-8">
            Product description will be here in one small paragraph. Product
            description will be here in one small paragraph. Product description
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
            Get quotation
          </button>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col justify-center items-center md:col-span-2">
          {/* Mobile Header */}
          <div className="block xl:hidden text-center pb-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Technoclass</h1>
            <h2 className="text-lg lg:text-3xl font-semibold mb-4">
              Experience the future of teaching
            </h2>
          </div>
          {/* Image Section */}
          <div className="relative">
            <Image
              src={iPadPro}
              alt="Technology"
              className="rounded-lg"
              width={700}
              height={600}
            />

            {/* Feature Cards */}
            <LevitatingCard
              position="-top-5 -left-4"
              title="Some features"
              content="Feature description"
            />
            <div className="absolute -bottom-5 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <h2 className="font-semibold text-4xl">Some feature</h2>
              <p className="text-gray-600 text-md">Feature description</p>
            </div>
            <div className="absolute -bottom-10 right-20 bg-white p-4 rounded-lg shadow-lg">
              <h2 className="font-semibold text-4xl">Some feature</h2>
              <p className="text-gray-600 text-md">Feature description</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden border-2">
        <h1 className="text-5xl font-bold mb-6">Technoclass</h1>
        <h2 className="text-3xl font-semibold mb-4">
          Experience the future of teaching
        </h2>
        <p className="text-gray-600 mb-8">
          Product description will be here in one small paragraph. Product
          description will be here in one small paragraph. Product description
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
          Get quotation
        </button>
      </div>
    </section>
  );
}

export default HeroPage;
