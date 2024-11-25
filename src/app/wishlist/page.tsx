"use client";
import { bigShoulders } from "../layout";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";
import React, { useState } from "react";

export default function Page() {
  let wishlist: any = localStorage.getItem("wishlist") || "[]";
  if (wishlist) wishlist = JSON.parse(wishlist);

  const [wishlistUpdated, setWishlistUpdated] = useState(wishlist);

  const handleRemove = (id: string) => {
    wishlist = wishlist.filter((item: any) => item?.ID !== id);
    setWishlistUpdated(wishlist);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  return (
    <>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
        <h1
          className={`uppercase text-7xl font-black ${bigShoulders.className}`}
        >
          Wishlist
        </h1>
        <div className="py-10">
          {wishlistUpdated &&
            wishlistUpdated.length > 0 &&
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
            })}
        </div>
      </div>
      <Features />
    </>
  );
}
