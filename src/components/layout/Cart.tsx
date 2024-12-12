"use client";

import { usePathname } from "next/navigation";
import { getCartDetails } from "@/api/cartApi";
import { TiShoppingCart } from "react-icons/ti";
import CartListModal from "../modals/CartModal";
import eventEmitter from "@/hooks/useEventEmitter";
import React, { useState, useEffect, useCallback } from "react";

// type Product = {
//   ID: number;
//   Style: string;
//   Description: string;
//   [key: string]: any;
// };

const CartModal = () => {
  const pathname = usePathname();
  const [cart, setCart] = useState<any>({});
  // const [loading, setLoading] = useState(true);
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const cartListener = async () => {
      const response: any = await fetchCart();
      if (response?.status) setOpenCartModal(true);
    };
    if (typeof window !== "undefined" && eventEmitter) {
      eventEmitter.on("addToCart", cartListener);
      eventEmitter.on("removeFromCart", fetchCart);
    }

    return () => {
      if (typeof window !== "undefined" && eventEmitter) {
        eventEmitter.off("addToCart", cartListener);
        eventEmitter.off("removeFromCart", fetchCart);
      }
    };
    // eslint-disable-next-line
  }, []);

  const fetchCart = useCallback(async () => {
    const response = await getCartDetails();
    if (response?.status) {
      setCart(response);
      // setLoading(false);
      return response;
    } else return { status: false };
  }, []);

  const openCart = useCallback(async () => {
    if (cart && cart?.Products && cart?.Products.length === 0)
      await fetchCart();
    if (!["/cart", "/checkout"].includes(pathname)) {
      setOpenCartModal(true);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const handleToggle = () => {
    setOpenCartModal((prev) => !prev);
  };

  return (
    <span className="hover:text-yellow-500 cursor-pointer relative transition-all duration-100 ease-linear">
      <TiShoppingCart onClick={openCart} size={23} />
      <CartListModal
        cart={cart}
        setCart={setCart}
        isOpen={openCartModal}
        handleToggle={handleToggle}
      />
      <span
        onClick={openCart}
        className="absolute -top-3 -right-3 w-5 md:w-6 h-5 md:h-6 text-xs text-black rounded-full bg-primary flex items-center justify-center"
      >
        {cart?.Products &&
        cart?.Products.length > 0 &&
        cart?.Products.length < 9
          ? `0${cart?.Products.length}`
          : (cart?.Products && cart?.Products.length) ?? 0}
      </span>
    </span>
  );
};

export default CartModal;
