"use client";

import { bigShoulders } from "../layout";
import CartSkeleton from "./CheckoutSkeleton";
import { getCartDetails } from "@/api/cartApi";
import Features from "@/components/common/Features";
import CheckoutForm from "./components/CheckoutForm";
import { useCallback, useEffect, useState } from "react";

export default function ClientPage() {
  const [cart, setCart] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchCart = useCallback(async () => {
    const response = await getCartDetails();
    if (response?.status) {
      setCart(response);
    } else setCart({});
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  if (loading) return <CartSkeleton />;

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
