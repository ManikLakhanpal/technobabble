import Image from "next/image";
import iPadPro from "@/assets/images/ipadPro.png";
import LevitatingCard from "../components/levitatingCard";

function HeroPage() {
    return (
        <section className="pt-10 md:pt-24 pb-12 px-4 mx-6 min-h-fit h-[90vh]">
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
                    <div className="block xl:hidden text-center py-5">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Technoclass</h1>
                        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4">
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
                            quality={100}
                            priority
                        />

                        {/* Feature Cards */}

                        {/* top left one */}
                        <LevitatingCard
                            position="-top-10 left-20 hidden xl:block"
                            title="Some features"
                            content="Feature description"
                        />

                        {/* bottom left one */}
                        <LevitatingCard
                            position="-bottom-5 -left-4"
                            title="Some features"
                            content="Feature description"
                        />

                        {/* bottom right one */}
                        <LevitatingCard
                            position="-bottom-10 right-20 hidden xl:block"
                            title="Some features"
                            content="Feature description"
                        />

                        {/* top right one for mobile/iPad */}
                        <LevitatingCard
                            position="-top-10 -right-5 xl:hidden block"
                            title="Some features"
                            content="Feature description"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile/iPad View */}
            <div className="block xl:hidden mt-12">
                <p className="text-gray-600 mb-8 text-center lg:mx-20">
                    Product description will be here in one small paragraph. Product
                    description will be here in one small paragraph. Product description
                    Product description will be here in one small paragraph. Product des
                </p>
                <button className="bg-black w-full text-white px-8 py-3 rounded-full hover:bg-gray-800">
                    Get quotation
                </button>
            </div>
        </section>
    );
}

export default HeroPage;
