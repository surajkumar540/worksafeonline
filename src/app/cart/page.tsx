"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import CartItem from "./components/CartItem";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CartSummary from "./components/CartSummary";
import eventEmitter from "@/hooks/useEventEmitter";
import ApplyCoupon from "./components/ApplyCoupon";
import Features from "@/components/common/Features";
import RecommendedProducts from "@/components/common/RecommendedProducts";

export default function Page() {
  const [cartUpdated, setCartUpdated] = useState<any>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedCart: any = localStorage.getItem("cart");
      if (storedCart) {
        storedCart = JSON.parse(storedCart);
      } else storedCart = [];
      setCartUpdated(storedCart);
    }
  }, []);

  const handleRemove = (id: string) => {
    let cart = cartUpdated.filter((item: any) => item?.ID !== id);
    setCartUpdated(cart);
    if (eventEmitter) eventEmitter.emit("removeFromCart", id);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 11) return toast.warn("You can add up to 10 items!");
    setCartUpdated((prev: any) => {
      const updatedCart = prev.map((item: any) =>
        item.ID === id ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <div className="flex justify-between items-center">
          <h1
            className={`uppercase text-3xl md:text-5xl lg:text-7xl flex items-center font-black ${bigShoulders.className}`}
          >
            Cart{" "}
            <span className="text-xl md:text-2xl lg:text-4xl">
              {" "}
              ({cartUpdated.length})
            </span>
          </h1>
          {cartUpdated.length === 0 && (
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
        {cartUpdated && cartUpdated.length > 0 ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pt-4 md:pt-6 lg:pt-8">
              <div className="col-span-2">
                <CartItem
                  cart={cartUpdated}
                  handleRemove={handleRemove}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
                <ApplyCoupon />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <CartSummary cart={cartUpdated} />
              </div>
            </div>
            {cartUpdated && cartUpdated.length > 0 && (
              <RecommendedProducts products={cartUpdated} />
            )}
          </>
        ) : (
          <Image
            width={200}
            height={200}
            priority
            unoptimized
            alt={"Empty Wishlist"}
            src={"/assets/empty_cart.avif"}
            className="w-full lg:w-1/2 mx-auto object-contain rounded-md"
          />
        )}
      </div>
      <Features />
    </>
  );
}
