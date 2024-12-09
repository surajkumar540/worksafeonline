"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import CartItem from "./components/CartItem";
import React, { useEffect, useState } from "react";
import CartSummary from "./components/CartSummary";
import eventEmitter from "@/hooks/useEventEmitter";
import ApplyCoupon from "./components/ApplyCoupon";
import Features from "@/components/common/Features";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

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
    const cart = cartUpdated.filter((item: any) => item?.ID !== id);
    setCartUpdated(cart);
    if (eventEmitter) eventEmitter.emit("removeFromCart", id);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleUpdateQuantity = (id: string, Quantity: number) => {
    if (Quantity === 11) return toast.warn("You can add up to 10 items!");
    setCartUpdated((prev: any) => {
      const updatedCart = prev.map((item: any) =>
        item.ID === id ? { ...item, Quantity } : item
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
            <AnimatedActionButton
              text="View Products"
              href="/shop-all"
              // onClick={() => console.log("Button clicked")}
              classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[180px] hover:bg-primary bg-white text-black hover:text-black"
              isLoading={false}
              type="submit"
            />
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
            {/* {cartUpdated && cartUpdated.length > 0 && (
              <RecommendedProducts products={cartUpdated} />
            )} */}
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
