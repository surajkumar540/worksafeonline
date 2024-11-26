"use client";

import Image from "next/image";
import React, { useState } from "react";
import { bigShoulders } from "../layout";
import eventEmitter from "@/hooks/useEventEmitter";
import { FaArrowRightLong } from "react-icons/fa6";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";

export default function Page() {
  let wishlist: any = localStorage.getItem("wishlist") || "[]";
  if (wishlist) wishlist = JSON.parse(wishlist);

  const [wishlistUpdated, setWishlistUpdated] = useState(wishlist);

  const handleRemove = (id: string) => {
    wishlist = wishlist.filter((item: any) => item?.ID !== id);
    setWishlistUpdated(wishlist);
    eventEmitter.emit("removeFromWishlist", id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  return (
    <>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
        <div className="flex justify-between items-center">
          <h1
            className={`uppercase text-7xl flex items-center font-black ${bigShoulders.className}`}
          >
            Wishlist{" "}
            <span className="text-4xl"> ({wishlistUpdated.length})</span>
          </h1>
          {wishlistUpdated.length === 0 && (
            <span className="relative flex mt-5 w-fit space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-32 pr-4 overflow-hidden group">
              <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                View Products
              </span>
              <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
                View Products
              </span>
              <FaArrowRightLong className="ml-2" />
            </span>
          )}
        </div>
        <div className="pt-10">
          {wishlistUpdated && wishlistUpdated.length > 0 ? (
            wishlistUpdated.map((list: any) => {
              return (
                <React.Fragment key={list?.ID}>
                  <WishlistCard
                    product={list}
                    onAddToCart={() => {}}
                    handleRemove={handleRemove}
                  />
                </React.Fragment>
              );
            })
          ) : (
            <Image
              width={200}
              height={200}
              priority
              unoptimized
              alt={"Empty Wishlist"}
              src={"/assets/empty_wishlist.jpg"}
              className="w-1/2 mx-auto object-contain rounded-md"
            />
          )}
        </div>
      </div>
      <Features />
    </>
  );
}
