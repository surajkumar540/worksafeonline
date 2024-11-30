"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import CategoryCard from "../common/CategoryCard";

const Categories = ({ categories }: { categories: any }) => {
  return (
    <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 py-20">
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
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {categories &&
          categories.length > 0 &&
          categories.map((category: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <CategoryCard category={category} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Categories;
