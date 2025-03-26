import Image from "next/image";
import ScrollableGallery from "@/components/scrollableGallery";
import girl from "@/assets/images/girl.png";
import earphones from "@/assets/images/earphones.png";
import headsets from "@/assets/images/headsets.png";
import manWithHeadphones from "@/assets/images/manWithHeadphones.png";
import europe from "@/assets/images/europe.png";

const images = [
  {
    src: girl.src,
    alt: "Product 1",
    caption: "Some product image will be here",
  },
  {
    src: earphones.src,
    alt: "Product 2",
    caption: "Some product image will be here",
  },
  {
    src: headsets.src,
    alt: "Product 3",
    caption: "Some product image will be here",
  },
  {
    src: manWithHeadphones.src,
    alt: "Product 4",
    caption: "Some feature will be here",
  },
  {
    src: girl.src,
    alt: "Product 4",
    caption: "Some feature will be here",
  },
  {
    src: girl.src,
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

              <p className="text-white text-center mb-4">
                Product description will be here in one small <span className="text-orange-500"> paragrah </span>. Product
                description will be here in one small paragraph. Product
                description
              </p>
            </div>
            <div className="rounded-lg flex justify-center overflow-hidden pt-10">
              <Image
                src={europe}
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
