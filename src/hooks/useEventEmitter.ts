"use client";

import { Cart } from "@/types/api";
import { EventEmitter } from "events";
import { toast } from "react-toastify";
import { getDeviceData, storeDeviceData } from "@/api/generateDeviceId";

let eventEmitter: EventEmitter | undefined;

if (typeof window !== "undefined") eventEmitter = new EventEmitter();

export interface Product {
  ID?: any;
  Size: object;
  Color: object;
  Style?: string;
  MenuId?: string;
  Fitting: object;
  EndPrice: number;
  quantity?: number;
  Description: string;
  ListingImage: string;
  DiscountedPrice?: number;
  StartPrice?: number | string;
  CustomisationDetails?: Record<string, unknown>;
}

export const handleAddToWishlist = async (product: Product) => {
  try {
    const deviceData = getDeviceData();
    if (!deviceData) await storeDeviceData();

    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
    if (!Array.isArray(wishlist))
      throw new Error("Invalid wishlist format in localStorage");

    const isAlreadyInWishlist = wishlist.some(
      (item) => item.ID === (product.Style ?? product.ID)
    );

    if (isAlreadyInWishlist) {
      toast.warn("Already in wishlist!");
      return false;
    }

    const productData: Cart = {
      createdAt: new Date(),
      Size: product?.Size ?? "",
      Color: product?.Color ?? "",
      EndPrice: product?.EndPrice,
      ID: product.Style ?? product?.ID,
      Fitting: product?.Fitting ?? "",
      Quantity: product?.quantity ?? 1,
      Description: product?.Description,
      ListingImage: product?.ListingImage,
      DiscountedPrice: product?.DiscountedPrice ?? 0,
      CustomisationDetails: product?.CustomisationDetails ?? {},
      FinalPrice: (product?.quantity ?? 1 * product?.EndPrice).toFixed(2),
      CategoryData: product?.MenuId ? { categoryId: product?.MenuId } : {},
    };

    toast.success("Added to wishlist!");

    localStorage.setItem(
      "wishlist",
      JSON.stringify([...wishlist, productData])
    );
    eventEmitter?.emit("addToWishlist", productData);
    return true;
  } catch (error) {
    console.error("Error accessing or updating wishlist:", error);
    return false;
  }
};

export const handleAddToCart = async (product: Product) => {
  try {
    const deviceData = getDeviceData();
    if (!deviceData) await storeDeviceData();

    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    if (!Array.isArray(cart))
      throw new Error("Invalid cart format in localStorage");

    const isAlreadyInCart = cart.some(
      (item) => item.ID === (product.Style ?? product.ID)
    );

    if (isAlreadyInCart) {
      toast.warn("Already in cart!");
      return false;
    }
    const productData: Cart = {
      createdAt: new Date(),
      Size: product?.Size ?? [],
      Color: product?.Color ?? {},
      EndPrice: product?.EndPrice,
      ID: product.Style ?? product.ID,
      Fitting: product?.Fitting ?? {},
      Quantity: product?.quantity ?? 1,
      Description: product?.Description,
      ListingImage: product?.ListingImage,
      DiscountedPrice: product?.DiscountedPrice ?? 0,
      CustomisationDetails: product?.CustomisationDetails ?? {},
      FinalPrice: (product?.quantity ?? 1 * product?.EndPrice).toFixed(2),
      CategoryData: product?.MenuId ? { categoryId: product?.MenuId } : {},
    };
    localStorage.setItem("cart", JSON.stringify([...cart, productData]));
    eventEmitter?.emit("addToCart", productData);
    return true;
  } catch (error) {
    console.error("Error accessing or updating cart:", error);
    return false;
  }
};

export default eventEmitter;
