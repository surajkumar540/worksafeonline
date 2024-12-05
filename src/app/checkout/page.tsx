"use client";

import { bigShoulders } from "../layout";
import { useEffect, useState } from "react";
import Features from "@/components/common/Features";
import CheckoutForm from "./components/CheckoutForm";

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
        <CheckoutForm cart={cart} />
      </div>
      {/* <div className="flex items-center justify-center">
        <PayPalCheckout />
      </div> */}
      <Features />
    </>
  );
}
