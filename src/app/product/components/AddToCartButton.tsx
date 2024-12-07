"use client";

import { Product } from "@/types/api";
import { bigShoulders } from "@/app/layout";
import { handleAddToCart } from "@/hooks/useEventEmitter";

const AddToCartButton = ({
  product,
  quantity,
  selectedFields,
}: {
  product: Product;
  quantity: number;
  selectedFields: any;
}) => {
  const handleCart = async (product: any) => {
    const updatedData = {
      quantity: quantity,
      MenuId: product.MenuId,
      Style: product?.ProductID,
      Size: selectedFields?.size,
      Color: selectedFields?.color,
      Fitting: selectedFields?.fitting,
      Description: product?.ProductName,
      ListingImage: product?.ProductImage,
      EndPrice: product?.ProductSellingPrice,
    };
    await handleAddToCart(updatedData);
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
