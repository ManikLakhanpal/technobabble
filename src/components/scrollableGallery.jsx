import Image from "next/image";

function ScrollableGallery({ images }) {
  return (
    <div className="container ml-auto relative w-full py-20 inset-auto overflow-hidden">
      <div className="-mx-4 overflow-x-auto">
        <div className="pl-15 flex lg:pl-0">
        {/* <div className="w-[calc(100%/1.5)] lg:w-[calc(100%/3.5)] px-4 flex-shrink-0 relative"></div> */}
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[calc(100%/1.5)] lg:w-[calc(100%/3.5)] px-4 flex-shrink-0 relative"
            >
              <Image
                className="object-contain rounded-4xl border/0"
                src={image.src} 
                alt={image.alt} 
                width={800} 
                height={800} 
                quality={100}
              />

              <p className="absolute bottom-0 pt-10 lg:pt-52 right-2 text-white text-center px-6 py-4 font-bold bg-gradient-to-t from-black to-transparent z-10 text-xs md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non,
                nam quo cumque commodi.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollableGallery;
