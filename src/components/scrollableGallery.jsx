"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollableGallery({ images }) {
  const scrollRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setContainerWidth(scrollRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="container mx-auto relative w-full py-20 overflow-hidden">
      <div className="-mx-4 overflow-x-auto">
        <div className="pl-15 flex lg:pl-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[calc(100%/1.5)] lg:w-[calc(100%/3.5)] px-4 flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
              />
              <div className="mt-4 text-center">
                <p className="text-neutral-800 dark:text-white text-lg md:text-xl font-bold">
                  {image.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mt-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollableGallery;
