"use client";

import { usePathname } from "next/navigation";
import { TiShoppingCart } from "react-icons/ti";
import CartListModal from "../modals/CartModal";
import eventEmitter from "@/hooks/useEventEmitter";
import React, { useState, useEffect, useCallback } from "react";

type Product = {
  ID: number;
  Style: string;
  Description: string;
  [key: string]: any;
};

const CartModal = () => {
  const pathname = usePathname();
  const [cart, setCart] = useState<Product[]>([]);
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const parsedCart = JSON.parse(storedCart);
          if (Array.isArray(parsedCart)) setCart(parsedCart);
        } catch (error) {
          console.error("Error parsing cart from localStorage", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    const cartListener = (product: Product) => {
      setCart((prev) => [
        ...prev.filter((item) => item.ID !== product.ID),
        product,
      ]);
      setOpenCartModal(true);
    };
    const removeFromCartListener = (id: string) => {
      setCart((prev) => prev.filter((item) => item.ID !== parseInt(id)));
    };
    if (typeof window !== "undefined" && eventEmitter) {
      eventEmitter.on("addToCart", cartListener);
      eventEmitter.on("removeFromCart", removeFromCartListener);
    }

    return () => {
      if (typeof window !== "undefined" && eventEmitter) {
        eventEmitter.off("addToCart", cartListener);
        eventEmitter.off("removeFromCart", removeFromCartListener);
      }
    };
  }, []);

  const openCart = useCallback(() => {
    if (!["/cart", "/checkout"].includes(pathname)) {
      setOpenCartModal(true);
    }
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
        {cart.length > 0 && cart.length < 9 ? `0${cart.length}` : cart.length}
      </span>
    </span>
  );
};

export default CartModal;
