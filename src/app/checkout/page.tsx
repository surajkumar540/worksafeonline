"use client";

import { useEffect, useState } from "react";
import { bigShoulders } from "../layout";
import Features from "@/components/common/Features";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";

export default function Page() {
  let cart: any = localStorage.getItem("cart");
  if (cart) cart = JSON.parse(cart);
  const [cartUpdated, setCart] = useState(cart ?? []);

  useEffect(() => {
    let cart: any = localStorage.getItem("cart") || "[]";
    if (cart) cart = JSON.parse(cart);
    setCart(cart);
  }, []);

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <h1
          className={`uppercase text-3xl md:text-5xl lg:text-6xl flex items-center font-black ${bigShoulders.className}`}
        >
          checkout
        </h1>
        <div className="flex gap-10 mt-10">
          <div className="w-full lg:w-3/5">
            <CheckoutForm />
          </div>
          <div className="w-full lg:w-2/5">
            <OrderSummary cart={cart} />
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}
