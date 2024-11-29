"use client";

import { EventEmitter } from "events";
import { toast } from "react-toastify";

let eventEmitter: EventEmitter | undefined;

if (typeof window !== "undefined") eventEmitter = new EventEmitter();

export const handleAddToWishlist = (product: any) => {
  try {
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
    if (!Array.isArray(wishlist))
      throw new Error("Invalid wishlist format in localStorage");

    const isAlreadyInWishlist = wishlist.some((item) => item.ID === product.ID);

    if (isAlreadyInWishlist) {
      toast.warn("Already in wishlist!");
      return false;
    }
    const updatedWishlist = [
      ...wishlist,
      { ...product, createdAt: new Date(), quantity: 1 },
    ];
    toast.success("Added to wishlist!");
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    eventEmitter?.emit("addToWishlist", product);
    return true;
  } catch (error) {
    console.error("Error accessing or updating wishlist:", error);
    return false;
  }
};

export const handleAddToCart = (product: any) => {
  try {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    if (!Array.isArray(cart))
      throw new Error("Invalid cart format in localStorage");

    const isAlreadyInCart = cart.some((item) => item.ID === product.ID);

    if (isAlreadyInCart) {
      toast.warn("Already in cart!");
      return false;
    }
    const updatedCart = [
      ...cart,
      { ...product, createdAt: new Date(), quantity: product?.quantity ?? 1 },
    ];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    eventEmitter?.emit("addToCart", product);
    return true;
  } catch (error) {
    console.error("Error accessing or updating cart:", error);
    return false;
  }
};

export default eventEmitter;
