"use client";

import Image from "next/image";
import { TbZoomScan } from "react-icons/tb";
import React, { useState, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

type ProductImageProps = {
  images: string[];
};

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  // const thumbnailsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  }, []);

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  const handleSwiperInstance = useCallback((swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  if (!images || images.length === 0) {
    return <div className="text-center">No images available</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-5 w-full lg:w-[55%] h-full lg:h-screen lg:sticky lg:top-32">
      <div className="hidden lg:block col-span-1 gap-2">
        <Swiper
          spaceBetween={15}
          modules={[Thumbs]}
          direction="vertical"
          onSwiper={setThumbsSwiper}
          className="h-[50vh] lg:h-screen"
          onSlideChange={handleSlideChange}
          slidesPerView={Math.min(4, images.length)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <div
                className={`w-full rounded-md shadow-sm cursor-pointer ${
                  activeIndex === index
                    ? "border-black shadow-lg border-2"
                    : "border-gray-300 border"
                }`}
                onClick={() => thumbsSwiper?.slideTo(index)} // Added this line to sync thumbs with main swiper
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="lg:hidden col-span-5 gap-2">
        <Swiper
          spaceBetween={15}
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          className="h-fit"
          onSlideChange={handleSlideChange}
          slidesPerView={Math.min(4, images.length)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <div
                className={`w-full rounded-md shadow-sm cursor-pointer ${
                  activeIndex === index
                    ? "border-black shadow-lg border-2"
                    : "border-gray-300 border"
                }`}
                onClick={() => thumbsSwiper?.slideTo(index)} // Added this line to sync thumbs with main swiper
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <div className="col-span-5 lg:col-span-4 order-first lg:order-last">
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
          onSwiper={handleSwiperInstance}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Thumbs, Autoplay]}
          className="w-full h-[50vh] lg:h-screen border-2 border-black/10 rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative group cursor-zoom-in overflow-hidden w-full h-[50vh] lg:h-screen rounded-md"
              >
                <Image
                  src={src}
                  alt={`Main Image ${index + 1}`}
                  width={600}
                  height={400}
                  unoptimized
                  priority
                  style={{
                    transformOrigin: `${position.x}% ${position.y}%`,
                  }}
                  className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-[2.25] rounded-md"
                />
                <TbZoomScan className="absolute top-3 right-3 text-4xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImage;
// useEffect(() => {
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         if (thumbnailsRef.current[activeIndex]) {
//           thumbnailsRef.current[activeIndex]?.scrollIntoView({
//             block: "center",
//             inline: "nearest",
//             behavior: "smooth",
//           });
//         }
//       }
//     },
//     { root: null, rootMargin: "0px", threshold: 0.5 }
//   );

//   if (thumbnailContainerRef.current)
//     observer.observe(thumbnailContainerRef.current);

//   return () => {
//     if (thumbnailContainerRef.current)
//       observer.unobserve(thumbnailContainerRef.current);
//   };
// }, [activeIndex]);
