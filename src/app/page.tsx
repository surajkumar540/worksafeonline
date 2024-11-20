import React from "react";
import { Get } from "@/api/generalApi";
import Banner from "@/components/home/Banner";
import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { bigShoulders } from "./layout";
import ReasonsToShop from "@/components/home/ReasonToShop";
import CategoryCard from "@/components/common/CategoryCard";

import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { SlSocialDropbox } from "react-icons/sl";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import Marquee from "@/components/common/Marquee";

const features = [
  { icon: <SlSocialDropbox />, title: "Free Shipping & Return" },
  { icon: <BsTelephoneOutbound />, title: "Customer Support 24/7" },
  { icon: <BsCreditCard />, title: "100% Secure Payment" },
  { icon: <RiMoneyPoundCircleLine />, title: "Money Back Guarantee" },
];

export default async function Home() {
  const response = await Get("api/Products?category_id=1");
  const products = response.product.filter(
    (product: any) => product?.Status === 1
  );
  const resp = await Get("api/Categories");
  const categories = resp.categories;
  const data = await Get("api/Brands");
  const brands = data?.brand;
  return (
    <div>
      <Banner />
      <div className="flex mt-10 pt-32 space-x-4 items-center max-w-9xl mx-auto p-10 pb-0">
        <Button
          text="NEW ARRIVALS"
          classes="!rounded-full bg-black text-3xl py-3 font-semibold border-2 tracking-tight !px-10 hover:bg-black border-black text-white"
        />
        <Button
          text="BEST SELLERS"
          classes="!rounded-full text-3xl py-3 font-semibold border-2 tracking-tight !px-10"
        />
      </div>
      <div className="max-w-9xl mx-auto grid grid-cols-5 gap-5 py-10 px-10 items-center">
        {products &&
          products.length > 0 &&
          products.slice(8, 13).map((product: any) => {
            return (
              <React.Fragment key={product.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
      </div>
      <Image
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bg-1.jpg"
        alt="Image"
        width={100}
        height={100}
        className="object-cover w-screen h-screen"
        priority
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
          overflow: "hidden",
        }}
        unoptimized
      />
      <div className="flex max-w-9xl mx-auto px-10 pt-10 justify-between items-center">
        <p
          className={`uppercase text-5xl tracking-tight font-extrabold ${bigShoulders.className}`}
        >
          shop all <span className="text-primary">winter jacket</span> products
        </p>
        <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-28 pr-4 overflow-hidden group">
          <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
            View More
          </span>
          <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
            View More
          </span>
          <FaArrowRightLong className="ml-2" />
        </span>
      </div>
      <div className="max-w-9xl mx-auto grid grid-cols-4 gap-10 py-10 px-10 items-center">
        {products &&
          products.length > 0 &&
          products.slice(8, 12).map((product: any) => {
            return (
              <React.Fragment key={product.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
      </div>

      <Image
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bg-2.jpg"
        alt="Image"
        width={100}
        height={100}
        className="object-cover w-screen h-screen"
        priority
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
          overflow: "hidden",
        }}
        unoptimized
      />
      <div className="flex max-w-9xl mx-auto px-10 pt-10 justify-between items-center">
        <p
          className={`uppercase text-5xl tracking-tight font-extrabold ${bigShoulders.className}`}
        >
          shop all <span className="text-primary">winter jacket</span> products
        </p>
        <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-28 pr-4 overflow-hidden group">
          <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
            View More
          </span>
          <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
            View More
          </span>
          <FaArrowRightLong className="ml-2" />
        </span>
      </div>
      <div className="max-w-9xl mx-auto grid grid-cols-4 gap-10 py-10 px-10 items-center">
        {products &&
          products.length > 0 &&
          products.slice(10, 14).map((product: any) => {
            return (
              <React.Fragment key={product.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
      </div>
      <Image
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bg-3.jpg"
        alt="Image"
        width={100}
        height={100}
        className="object-cover w-screen h-screen"
        priority
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
          overflow: "hidden",
        }}
        unoptimized
      />
      <div className="flex max-w-9xl mx-auto px-10 pt-10 justify-between items-center">
        <p
          className={`uppercase text-5xl tracking-tight font-extrabold ${bigShoulders.className}`}
        >
          shop all <span className="text-primary">winter jacket</span> products
        </p>
        <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-28 pr-4 overflow-hidden group">
          <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
            View More
          </span>
          <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
            View More
          </span>
          <FaArrowRightLong className="ml-2" />
        </span>
      </div>
      <div className="max-w-9xl mx-auto grid grid-cols-4 gap-10 py-10 px-10 items-center">
        {products &&
          products.length > 0 &&
          products.slice(15, 19).map((product: any) => {
            return (
              <React.Fragment key={product.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
      </div>
      <div className="grid grid-cols-2 gap-5 max-w-9xl mx-auto px-5 py-10">
        <Image
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bn-1.jpg"
          alt="Image"
          width={100}
          height={100}
          className="object-cover w-full h-[75vh] rounded-lg"
          priority
          unoptimized
        />
        <Image
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bn-2.jpg"
          alt="Image"
          width={100}
          height={100}
          className="object-cover w-full h-[75vh] rounded-lg"
          priority
          unoptimized
        />
      </div>
      <ReasonsToShop />
      <div className="max-w-9xl mx-auto px-10 py-20 grid grid-cols-4 gap-5">
        {categories &&
          categories.length > 0 &&
          categories.slice(0, 4).map((category: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <CategoryCard category={category} />
              </React.Fragment>
            );
          })}
      </div>

      <div
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
          overflow: "hidden",
        }}
        className="min-h-screen relative"
      >
        <Image
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/02/h1_bg-4.jpg"
          alt="Image"
          width={100}
          height={100}
          className="object-cover w-screen min-h-screen"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black transition-all duration-500 ease-linear opacity-80 group-hover:opacity-40"></div>
        <div className="absolute inset-0 z-50 flex justify-between gap-10 items-center px-10">
          <div className="w-1/3 leading-none">
            <p
              className={`uppercase text-[112px] text-white font-black ${bigShoulders.className}`}
            >
              who <br />
              <span className="text-primary">we are</span>
            </p>
            <span className="relative flex space-x-2 mt-4 items-center border rounded-full cursor-pointer w-fit hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-28 pr-4 overflow-hidden group">
              <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                Our Story
              </span>
              <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
                Our Story
              </span>
              <FaArrowRightLong className="ml-2" />
            </span>
          </div>
          <div className="w-2/3">
            <div className="border-b-2 border-b-white pb-10 mb-5 flex justify-start gap-20">
              <Image
                src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/02/certification.svg"
                alt="Image"
                width={100}
                height={100}
                className="object-contain w-40"
                priority
                unoptimized
              />
              <p className="text-xl flex flex-col gap-5 text-white">
                <span>
                  Founded in 1983, Axetor are still today&apos;s leader in
                  industrial clothing in Australia and they offer a range of
                  durable and functional workwear for the most demanding jobs.
                </span>
                <span>
                  We prioritize providing excellent customer service and support
                  throughout your shopping journey with us.
                </span>
              </p>
            </div>
            <div className="text-white">
              <p
                className={`${bigShoulders.className} text-3xl font-black uppercase`}
              >
                Popular Brands
              </p>
              <div className="grid grid-cols-5 mt-5 mb-10">
                {brands &&
                  brands.length > 0 &&
                  brands.slice(1, 6).map((brand: any, index: number) => {
                    return (
                      <span
                        className="flex justify-center text-lg font-semibold items-center border py-7"
                        key={index}
                      >
                        {brand?.Brand_Name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />

      <div className="bg-white">
        {/* Features Section */}
        <div className="grid grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex py-16 flex-col border items-center"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <p className="text-center text-lg font-medium">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Guide Section */}
        <div className="relative">
          {/* Background Image */}
          <Image
            width={100}
            height={100}
            priority
            unoptimized
            src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/ft1-img.jpg"
            alt="Guide Background"
            className="w-full h-24 object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center gap-5 px-8">
            <h2
              className={`text-white text-3xl font-black ${bigShoulders.className}`}
            >
              LET US GUIDE YOU IN YOUR CHOICE OF WORKWEAR
            </h2>
            <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-64 pr-4 overflow-hidden group">
              <span className="absolute text-sm font-semibold whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                CHECK OUT OUR GUIDES
              </span>
              <span className="absolute text-sm font-semibold whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
                CHECK OUT OUR GUIDES
              </span>
              <FaArrowRightLong className="ml-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
