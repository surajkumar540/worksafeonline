"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import ProductCard from "../common/ProductCard";

const ProductSwiper = ({
  products,
  slidesPerViewDesktop,
}: {
  products: any;
  slidesPerViewDesktop?: number;
}) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: slidesPerViewDesktop ?? 4,
            spaceBetween: slidesPerViewDesktop ? 25 : 40,
          },
        }}
        className="mySwiper"
      >
        {products &&
          products.length > 0 &&
          products.map((product: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
