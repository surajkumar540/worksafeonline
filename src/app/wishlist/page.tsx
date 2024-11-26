"use client";

import Image from "next/image";
import { bigShoulders } from "../layout";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";
import eventEmitter, { handleAddToCart } from "@/hooks/useEventEmitter";

export default function Page() {
  const [wishlistUpdated, setWishlistUpdated] = useState<any>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedWishlist: any = localStorage.getItem("wishlist");
      if (storedWishlist) {
        storedWishlist = JSON.parse(storedWishlist);
      } else storedWishlist = [];
      setWishlistUpdated(storedWishlist);
    }
  }, []);

  const handleRemove = (id: string) => {
    let updatedWishlist = wishlistUpdated.filter(
      (item: any) => item?.ID !== id
    );
    setWishlistUpdated(updatedWishlist);
    if (eventEmitter) eventEmitter.emit("removeFromWishlist", id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  const onAddToCart = (data: any) => {
    if (handleAddToCart(data)) {
      if (eventEmitter) eventEmitter.emit("addToCart", data);
      handleRemove(data?.ID);
    }
  };
  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <div className="flex justify-between items-center">
          <h1
            className={`uppercase text-3xl md:text-5xl lg:text-7xl flex items-center font-black ${bigShoulders.className}`}
          >
            Wishlist{" "}
            <span className="text-lg md:text-2xl lg:text-4xl">
              {" "}
              ({wishlistUpdated.length})
            </span>
          </h1>
          {wishlistUpdated.length === 0 && (
            <span className="relative flex w-fit space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-3 md:py-4 pl-32 pr-4 overflow-hidden group">
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
        <div className="pt-4 md:pt-6 lg:pt-10">
          {wishlistUpdated && wishlistUpdated.length > 0 ? (
            wishlistUpdated.map((list: any) => {
              return (
                <React.Fragment key={list?.ID}>
                  <WishlistCard
                    product={list}
                    onAddToCart={onAddToCart}
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
              className="w-full lg:w-1/2 mx-auto object-contain rounded-md"
            />
          )}
        </div>
      </div>
      <Features />
    </>
  );
}
