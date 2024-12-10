"use client";

import Image from "next/image";
import { bigShoulders } from "../layout";
import React, { useEffect, useState } from "react";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";
import eventEmitter, { handleAddToCart } from "@/hooks/useEventEmitter";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

export default function ClientPage() {
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
    const updatedWishlist = wishlistUpdated.filter(
      (item: any) => item?.ID !== id
    );
    setWishlistUpdated(updatedWishlist);
    if (eventEmitter) eventEmitter.emit("removeFromWishlist", id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  const onAddToCart = async (data: any) => {
    if (await handleAddToCart(data)) handleRemove(data?.ID);
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
            <AnimatedActionButton
              text="View Products"
              href="/shop-all"
              classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[180px] hover:bg-primary bg-white text-black hover:text-black"
              isLoading={false}
              type="submit"
            />
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
