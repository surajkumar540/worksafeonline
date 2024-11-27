"use client";

import { bigShoulders } from "../layout";
import { useEffect, useState } from "react";
import Features from "@/components/common/Features";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";

export default function Page() {
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let cartData: any = localStorage.getItem("cart");
      if (cartData) cartData = JSON.parse(cartData);
      setCart(cartData ?? []);
    }
  }, []);

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <h1
          className={`uppercase text-4xl md:text-5xl lg:text-6xl flex items-center font-black ${bigShoulders.className}`}
        >
          checkout
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-20 mt-5 md:mt-10">
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
