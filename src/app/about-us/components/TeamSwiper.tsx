"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

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
      imageUrl:
        "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      designation: "Developer",
      imageUrl:
        "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      designation: "Manager",
      imageUrl:
        "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      designation: "Photographer",
      imageUrl:
        "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-4.jpg",
    }
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
            <div className="relative border rounded-lg overflow-hidden shadow-lg ">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-[300px] sm:h-[420px]"
              />
              <div className="absolute top-4 right-4  bg-opacity-60 text-white px-4 py-2 rounded-md">
                <p className="font-bold text-3xl">{product.name}</p>
                <p>{product.designation}</p>
              </div>
              <div className="absolute bottom-0 w-full h-full">
                <div className="relative font-sans uppercase font-semibold w-full    border-black/10 pt-20 h-[300px]  sm:h-[420px] flex justify-center  overflow-hidden group">
                  <span className="absolute whitespace-nowrap w-[80%]  bottom-0  transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] bg-white group-hover:opacity-100 opacity-0 translate-y-0 py-3 rounded-full p-3">
                    <div className=" space-x-4 text-center flex justify-center w-full">
                      <a href="#" className="hover:text-blue-500">
                        <FaFacebook size={14} />
                      </a>
                      <a href="#" className="hover:text-blue-400">
                        <FaTwitter size={14} />
                      </a>
                      <a href="#" className="hover:text-pink-500">
                        <FaInstagram size={14} />
                      </a>
                      <a href="#" className="hover:text-blue-700">
                        <FaLinkedin size={14} />
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
