import Image from 'next/image';
import iPadPro from "@/assets/images/ipadPro.png";
import LevitatingCard from './levitatingCard';

function HeroPage() {
    return (
        <section 
            className="pt-24 pb-12 px-4 min-h-fit h-[95vh]"
        >
            <div 
            className="container text-black mx-auto grid xl:grid-cols-3 gap-8 items-center"
            >
                <div className="lg:col-span-1 hidden xl:block">
                    <h1 className="text-5xl font-bold mb-6">Technoclass</h1>
                    <h2 className="text-3xl font-semibold mb-4">Experience the future of teaching</h2>
                    <p className="text-gray-600 mb-8">
                        Product description will be here in one small paragraph. Product description will be here in one small paragraph. Product description
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
                        Get quotation
                    </button>
                </div>
                <div className="md:col-span-2 relative flex justify-center items-center">
                    
                    <Image 
                        src={iPadPro}
                        alt="Technology"
                        className="rounded-lg"
                        width={800}
                        height={600}
                    />
                    {/* Feature Callouts */}
                    {/* <div className="absolute -top-7 left-20 bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="font-semibold text-4xl">Some feature</h2>
                        <p className="text-gray-600 text-md">Feature description</p>
                    </div> */}

                    <LevitatingCard 
                        position="-top-7 left-20"
                        title="Some feature"
                        content="feature"
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

            {/* FOR MOBILE VIEW */}
            <div className="block border-2 lg:hidden">
                    <h1 className="text-5xl font-bold mb-6">Technoclass</h1>
                    <h2 className="text-3xl font-semibold mb-4">Experience the future of teaching</h2>
                    <p className="text-gray-600 mb-8">
                        Product description will be here in one small paragraph. Product description will be here in one small paragraph. Product description
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
                        Get quotation
                    </button>
                </div>
        </section>
    );
}

export default HeroPage;
