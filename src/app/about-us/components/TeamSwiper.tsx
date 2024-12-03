"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const ProductSwiper = ({
  slidesPerViewDesktop,
}: {
  slidesPerViewDesktop?: number;
}) => {
  // Static array of products
  const products = [
    {
      id: 1,
      name: "Product 1",
      designation: "Designer",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Product 2",
      designation: "Developer",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Product 3",
      designation: "Manager",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      name: "Product 4",
      designation: "Photographer",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      name: "Product 5",
      designation: "Artist",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  if (!products || products.length === 0)
    return (
      <div className="text-center text-gray-500">
        <p>No products available at the moment.</p>
      </div>
    );

  return (
    <div className="container mx-auto px-10">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
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
            slidesPerView: slidesPerViewDesktop ?? 3,
            spaceBetween: slidesPerViewDesktop ? 25 : 40,
          },
          1680: {
            slidesPerView: products.length >= 5 ? 5 : 4,
            spaceBetween: 25,
          },
          1920: {
            slidesPerView: products.length >= 6 ? 6 : 4,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
        {products.map((product: any) => (
          <SwiperSlide key={product.id}>
            <div className="relative border rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-[500px]"
              />
              <div className="absolute top-4 right-4  bg-opacity-60 text-white px-4 py-2 rounded-md">
                <p className="font-bold text-3xl shadow-md">{product.name}</p>
                <p className="shadow-md">{product.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
