import React from "react";
import Image from "next/image";
import { bigShoulders } from "@/app/layout";

// Define the type for props (expecting `homeListing1` to be of type `HomeListing`)
interface BannerProps {
  homeListing1: {
    banner_image: string; // The `banner_image` is expected to be a string (image URL)
  };
}

const Banner: React.FC<BannerProps> = ({ homeListing1 }) => {
  return (
    <div className="py-10">
      <div className="relative">
        <Image
          alt="Image"
          width={100}
          height={100}
          src={homeListing1?.banner_image}
          className="object-cover w-screen h-[50vh] lg:h-screen"
          priority
          style={{
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
            overflow: "hidden",
          }}
          unoptimized
        />
        <div
          style={{
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
            overflow: "hidden",
          }}
          className="absolute inset-0 bg-gradient-to-r from-black to-transparent transition-all duration-500 ease-linear opacity-70 group-hover:opacity-40"
        ></div>
        <div
          className={`absolute animate-fade-up text-white inset-0 flex text-left flex-col justify-center max-w-9xl pl-5 md:pl-10 ${bigShoulders.className}`}
        >
          <p className="text-6xl lg:text-7xl uppercase w-1/2 mb-5 font-bold">
            About Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
