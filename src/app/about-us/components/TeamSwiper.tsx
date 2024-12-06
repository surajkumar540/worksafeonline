"use client";

import React, { useState, useEffect } from "react";
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
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
}

interface OurTeamSwiperProps {
  slidesPerViewDesktop?: number;
}

const OurTeamSwiper: React.FC<OurTeamSwiperProps> = ({
  slidesPerViewDesktop,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  // Simulating an API call
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulating delay
      setTimeout(() => {
        setProducts([
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
          },
        ]);
        setIsLoading(false);
      }, 0); // Simulated 2-second delay
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative border rounded-lg overflow-hidden shadow-lg animate-pulse bg-gray-300"
          >
            <div className="w-full h-[300px] bg-gray-400"></div>
            <div className="p-4 space-y-4">
              <div className="h-6 bg-gray-500 w-1/2 rounded"></div>
              <div className="h-4 bg-gray-500 w-2/3 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No Teams available at the moment.</p>
      </div>
    );
  }

  return (
    <div>
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
          1260: {
            slidesPerView: slidesPerViewDesktop ?? 4,
            spaceBetween: slidesPerViewDesktop ? 25 : 20,
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.imageUrl}
                alt={product.name}
                height={100}
                width={100}
                unoptimized
                className="object-cover w-full"
              />
              <div className="absolute top-4 right-4 bg-opacity-60 text-white px-4 py-2 rounded-md flex flex-col items-end justify-end">
                <p className="font-bold text-3xl">{product.name}</p>
                <p>{product.designation}</p>
              </div>
              <div className="absolute bottom-0 w-full h-full">
                <div className="relative font-sans uppercase font-semibold w-full border-black/10 pt-20 flex justify-center overflow-hidden group h-full">
                  <span className="absolute whitespace-nowrap w-[80%] bottom-0 transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] bg-white group-hover:opacity-100 opacity-0 translate-y-0 py-3 rounded-full p-3">
                    <div className="space-x-4 text-center flex justify-center w-full">
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

export default OurTeamSwiper;
