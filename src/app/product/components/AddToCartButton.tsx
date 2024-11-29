"use client";

import { Product } from "@/types/api";
import { bigShoulders } from "@/app/layout";
import eventEmitter, { handleAddToCart } from "@/hooks/useEventEmitter";

const AddToCartButton = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  const handleCart = (data: any) => {
    const updatedData = {
      ...data,
      quantity: quantity,
      ID: product?.ProductID,
      Description: product?.ProductName,
      ListingImage: product?.ProductImage,
      EndPrice: product?.ProductSellingPrice,
    };
    if (handleAddToCart(updatedData) && eventEmitter)
      eventEmitter.emit("addToCart", updatedData);
  };
  return (
    <button
      type="button"
      onClick={() => handleCart(product)}
      className={`w-full flex items-center justify-center px-4 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-2xl font-bold uppercase bg-primary/80 text-black ${bigShoulders.className}`}
    >
      Add to Cart
    </button>
  );
};
export default AddToCartButton;
