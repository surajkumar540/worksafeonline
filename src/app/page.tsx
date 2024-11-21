import React from "react";
import Image from "next/image";
import Banner from "@/components/home/Banner";
import Upcoming from "@/components/home/Upcoming";
import WhoWeAre from "@/components/home/WhoWeAre";
import { fetchHomePageData } from "@/api/generalApi";
import ReasonsToShop from "@/components/home/ReasonToShop";
import CategoryCard from "@/components/common/CategoryCard";
import ListingByCategory from "@/components/home/ListingByCategory";

export default async function Home() {
  const {
    brands,
    products,
    categories,
    homeListing1,
    homeListing2,
    homeListing3,
  } = await fetchHomePageData();
  return (
    <div>
      <Banner />
      <Upcoming products={products} />
      {homeListing1?.product && homeListing1?.product.length > 0 && (
        <ListingByCategory
          sectionText={homeListing1.offerName}
          products={homeListing1?.product.slice(0, 4)}
          bannerImage="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bg-1.jpg"
        />
      )}
      {homeListing2?.product && homeListing2?.product.length > 0 && (
        <ListingByCategory
          sectionText={homeListing2.offerName}
          products={homeListing2?.product.slice(0, 4)}
          bannerImage="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bg-2.jpg"
        />
      )}
      {homeListing3?.product && homeListing3?.product.length > 0 && (
        <ListingByCategory
          sectionText={homeListing3.offerName}
          products={homeListing3?.product.slice(0, 4)}
          bannerImage="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bg-3.jpg"
        />
      )}
      <div className="grid grid-cols-2 gap-5 max-w-9xl mx-auto px-5 py-10">
        <div className="relative">
          <Image
            src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bn-1.jpg"
            alt="Image"
            width={100}
            height={100}
            className="object-cover w-full h-[75vh] rounded-lg"
            priority
            unoptimized
          />
          <div className="absolute inset-0">
            <div className="relative flex items-center">
              <div className="absolute z-40 left-0 top-0 h-full flex flex-col justify-center items-center transform rotate-[-90deg] origin-bottom-left text-gray-700 font-bold text-sm tracking-wide">
                SALE NOW ON
              </div>
              <div className="mx-auto text-center">
                <p className="text-[96px] font-bold text-lime-500 leading-none">
                  15% <span className="text-gray-700">OFF</span>
                </p>
                <p className="mt-4 text-xl font-bold text-gray-900 tracking-widest">
                  ALL SELECTED BRANDS
                </p>
              </div>
            </div>
          </div>
        </div>
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
          categories.slice(0, 4).map((category: unknown, index: number) => {
            return (
              <React.Fragment key={index}>
                <CategoryCard category={category} />
              </React.Fragment>
            );
          })}
      </div>
      <WhoWeAre brands={brands} />
    </div>
  );
}
