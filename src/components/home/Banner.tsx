"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:h-screen pt-44 md:pt-36 lg:pt-28">
      {" "}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={100}
            height={100}
            priority
            unoptimized
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
              overflow: "hidden",
            }}
            alt="Slides"
            className="object-cover md:object-contain h-[50vh] md:h-auto lg:h-screen w-full"
            src="/assets/banner1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={100}
            priority
            unoptimized
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
              overflow: "hidden",
            }}
            alt="Slides"
            className="object-cover md:object-contain h-[50vh] md:h-auto lg:h-screen w-full"
            src="/assets/banner2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={100}
            priority
            unoptimized
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
              overflow: "hidden",
            }}
            alt="Slides"
            className="object-cover md:object-contain h-[50vh] md:h-auto lg:h-screen w-full"
            src="/assets/banner3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
