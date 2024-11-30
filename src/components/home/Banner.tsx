"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

const Banner = ({ banners }: { banners: any }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
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
        {banners &&
          banners.length > 0 &&
          banners.map((banner: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  priority
                  width={100}
                  height={100}
                  unoptimized
                  alt={banner?.OfferName}
                  src={banner?.DesktopOfferImage}
                  className="object-contain h-[50vh] md:h-auto w-full hidden sm:block"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
                    overflow: "hidden",
                  }}
                />
                <Image
                  priority
                  width={100}
                  height={100}
                  unoptimized
                  alt={banner?.OfferName}
                  src={banner?.OfferImage}
                  className="object-cover h-[50vh] md:h-auto w-full block sm:hidden"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
                    overflow: "hidden",
                  }}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Banner;
