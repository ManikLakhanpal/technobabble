import Image from "next/image";
import ScrollableGallery from "@/components/scrollableGallery";

const images = [
  {
    src: "/assets/images/girl.png",
    alt: "Product 1",
    caption: "Some product image will be here",
  },
  {
    src: "/assets/images/earphones.png",
    alt: "Product 2",
    caption: "Some product image will be here",
  },
  {
    src: "/assets/images/headsets.png",
    alt: "Product 3",
    caption: "Some product image will be here",
  },
  {
    src: "/assets/images/manWithHeadphones.png",
    alt: "Product 4",
    caption: "Some feature will be here",
  },
  {
    src: "/assets/images/girl.png",
    alt: "Product 4",
    caption: "Some feature will be here",
  },
  {
    src: "/assets/images/girl.png",
    alt: "Product 4",
    caption: "Some feature will be here",
  },
];

function ProductVideoShowcase() {
  return (
    <section className="max-h-fit min-h-[90vh]">
      {/* Product Showcase */}
      <div className="relative">
        <div className="relative z-10">
          <ScrollableGallery images={images} />
        </div>
        <div className="absolute bottom-0 w-full h-1/2 bg-black"></div>
      </div>

      {/* Video Section */}
      <div className="relative -top-px py-16 bg-gray-50">
        <div className="absolute w-full h-1/2 bg-black top-0"></div>
        <div className="container relative z-10 mx-auto px-4">

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <h3 className="text-3xl font-black text-white text-center">
                Video tile will be here
              </h3>

              <p className="text-white mb-4 xl:mx-32">
                Product description will be here in one small <span className="text-orange-500"> paragrah </span>. Product
                description will be here in one small paragraph. Product
                description
              </p>
            </div>
            <div className="rounded-lg flex justify-center overflow-hidden pt-10">
              <Image
                src="/assets/images/europe.png"
                alt="Video thumbnail"
                className="xl:w-2/4 object-contain rounded-2xl"
                width={800}
                height={384}
              />
            </div>

        </div>
      </div>

      
    </section>
  );
}

export default ProductVideoShowcase;
