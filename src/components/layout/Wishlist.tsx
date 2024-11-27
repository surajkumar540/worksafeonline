"use client";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import eventEmitter from "@/hooks/useEventEmitter";

type Product = {
  ID: number;
  Style: string;
  Description: string;
  [key: string]: any;
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        }
      }
    }
  }, []);

  useEffect(() => {
    const wishlistListener = (product: Product) => {
      setWishlist((prev) => [
        ...prev.filter((item) => item.ID !== product.ID),
        product,
      ]);
    };

    const removeFromwishlistListener = (id: string) => {
      setWishlist((prev) => prev.filter((item) => item.ID !== parseInt(id)));
    };

    if (typeof window !== "undefined" && eventEmitter) {
      eventEmitter.on("addToWishlist", wishlistListener);
      eventEmitter.on("removeFromWishlist", removeFromwishlistListener);
    }
    return () => {
      if (typeof window !== "undefined" && eventEmitter) {
        eventEmitter.off("addToWishlist", wishlistListener);
        eventEmitter.off("removeFromWishlist", removeFromwishlistListener);
      }
    };
  }, []);

  return (
    <>
      <Link
        href="/wishlist"
        className="hover:text-yellow-500 relative hidden lg:block transition-all duration-100 ease-linear"
      >
        <FaRegHeart size={23} />
        <span className="absolute -top-3 -right-3 w-6 h-6 text-xs text-black rounded-full bg-primary flex items-center justify-center">
          {wishlist.length > 0 && wishlist.length < 9
            ? "0" + wishlist.length
            : wishlist.length >= 10
            ? wishlist.length
            : 0}
        </span>
      </Link>
    </>
  );
};

export default Wishlist;
