"use client";

import { usePathname } from "next/navigation";
import { TiShoppingCart } from "react-icons/ti";
import CartListModal from "../modals/CartModal";
import React, { useState, useEffect } from "react";
import eventEmitter from "@/hooks/useEventEmitter";

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
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (Array.isArray(parsedCart)) setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    if (!openCartModal && cart.length > 0 && pathname !== "/cart")
      setOpenCartModal(true);
  }, [cart.length, pathname]);

  useEffect(() => {
    const cartListener = (product: Product) => {
      setCart((prev) => [...prev, product]);
    };
    const removeFromCartListener = (id: string) => {
      setCart((prev) => prev.filter((item) => item.ID !== parseInt(id)));
    };

    eventEmitter.on("addToCart", cartListener);
    eventEmitter.on("removeFromCart", removeFromCartListener);

    return () => {
      eventEmitter.off("addToCart", cartListener);
      eventEmitter.off("removeFromCart", removeFromCartListener);
    };
  }, [cart]);

  const handleToggle = () => {
    setOpenCartModal(!openCartModal);
  };

  const openCart = () => {
    if (pathname !== "/cart") setOpenCartModal(true);
  };

  return (
    <span className="hover:text-yellow-500 cursor-pointer relative hidden lg:block transition-all duration-100 ease-linear">
      <TiShoppingCart onClick={openCart} size={23} />
      <CartListModal
        cart={cart}
        setCart={setCart}
        isOpen={openCartModal}
        handleToggle={handleToggle}
      />
      <span
        onClick={openCart}
        className="absolute -top-3 -right-3 w-6 h-6 text-xs text-black rounded-full bg-primary flex items-center justify-center"
      >
        {cart.length > 0 && cart.length < 9
          ? "0" + cart.length
          : cart.length >= 10
          ? cart.length
          : 0}
      </span>
    </span>
  );
};

export default CartModal;
