import React from "react";
import Image from "next/image";
import { bigShoulders } from "./layout";
import Banner from "@/components/home/Banner";
import Upcoming from "@/components/home/Upcoming";
import WhoWeAre from "@/components/home/WhoWeAre";
import { fetchHomePageData, Get } from "@/api/generalApi";
import Categories from "@/components/home/Categories";
import ReasonsToShop from "@/components/home/ReasonToShop";
import ListingByCategory from "@/components/home/ListingByCategory";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | Home",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}



export default async function Home() {
  const {
    brands,
    products,
    categories,
    homeListing1,
    homeListing2,
    homeListing3,
    banners,
  } = await fetchHomePageData();
  return (
    <div>
      <Banner banners={banners} />
      <Upcoming products={products} slidesPerViewDesktop={5} />
      {homeListing1?.product && homeListing1?.product.length > 0 && (
        <ListingByCategory
          sectionText={homeListing1.offerName}
          bannerTitle={homeListing1?.banner_title}
          bannerImage={homeListing1?.banner_image}
          products={homeListing1?.product.slice(0, 4)}
          bannerDesc={homeListing1?.banner_description}
        />
      )}
      {homeListing2?.product && homeListing2?.product.length > 0 && (
        <ListingByCategory
          sectionText={homeListing2.offerName}
          bannerTitle={homeListing2?.banner_title}
          bannerImage={homeListing2?.banner_image}
          products={homeListing2?.product.slice(0, 4)}
          bannerDesc={homeListing2?.banner_description}
        />
      )}
      {homeListing3?.product && homeListing3?.product.length > 0 && (
        <ListingByCategory
          sectionText={homeListing3.offerName}
          bannerTitle={homeListing3?.banner_title}
          bannerImage={homeListing3?.banner_image}
          products={homeListing3?.product.slice(0, 4)}
          bannerDesc={homeListing3?.banner_description}
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-9xl mx-auto px-5 py-10">
        <div className="relative">
          <Image
            src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bn-1.jpg"
            alt="Image"
            width={100}
            height={100}
            className="object-cover w-full aspect-square md:h-[75vh] rounded-lg"
            priority
            unoptimized
          />
          <div
            className={`absolute inset-0 flex flex-col justify-between p-5 md:p-10 ${bigShoulders.className}`}
          >
            <div className="text-left pl-12 md:pl-14 relative">
              <div className="absolute tracking-widest md:text-lg top-10 md:top-12 -rotate-90 text-pink-600 font-bold -left-7">
                SALE NOW ON
              </div>
              <p className="text-7xl md:text-8xl text-stroke font-extrabold text-lime-500 leading-none">
                15% OFF
              </p>
              <p className="text-2xl font-extrabold text-gray-700">
                ALL SELECTED BRANDS
              </p>
            </div>
            <AnimatedActionButton
              text="SHOP NOW"
              href="https://example.com"
              // onClick={() => console.log("Button clicked")}
              classes="uppercase md:text-lg font-semibold whitespace-nowrap py-6 w-[165px] hover:bg-primary bg-white text-black hover:text-black"
              isLoading={false}
              type="submit"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/h1_bn-2.jpg"
            alt="Image"
            width={100}
            height={100}
            className="object-cover w-full aspect-square md:h-[75vh] rounded-lg"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black rounded-lg to-transparent transition-all duration-500 ease-linear opacity-70 group-hover:opacity-40"></div>
          <div
            className={`absolute inset-0 flex flex-col justify-between p-5 md:p-10 ${bigShoulders.className}`}
          >
            <div className="text-left uppercase pl-14 relative">
              <div className="absolute tracking-widest text-lg top-12 -rotate-90 text-[#a9bc41] font-bold -left-7">
                special offer
              </div>
              <p className="text-4xl font-extrabold text-white leading-none">
                high visibility <br /> workwear
              </p>
              <p className="text-2xl mt-5 font-extrabold text-white">
                start from <span className="text-[#a9bc41]">$299 </span>
              </p>
            </div>

            <AnimatedActionButton
              text="SHOP NOW"
              href="https://example.com"
              // onClick={() => console.log("Button clicked")}
              classes="uppercase md:text-lg font-semibold whitespace-nowrap py-6 w-[165px] hover:bg-primary bg-white text-black hover:text-black"
              isLoading={false}
              type="submit"
            />
          </div>
        </div>
      </div>
      <ReasonsToShop />
      <Categories categories={categories} />
      <WhoWeAre brands={brands} />
    </div>
  );
}
