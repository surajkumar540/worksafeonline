"use client";

import { BsHandbag } from "react-icons/bs";
import eventEmitter, { handleAddToCart } from "@/hooks/useEventEmitter";

const AddtoCartButton = ({ product }: { product: any }) => {
  const handleCart = (data: any) => {
    if (handleAddToCart(data) && eventEmitter)
      eventEmitter.emit("addToCart", data);
  };
  return (
    <span onClick={() => handleCart(product)} className="relative group z-40">
      <span className="group-hover:bg-black group-hover:text-white flex items-center rounded-full">
        <span className="absolute font-sans tracking-tight right-8 text-sm opacity-0 whitespace-nowrap group-hover:delay-100 font-semibold transition-all duration-600 ease-in-out group-hover:opacity-100 group-hover:right-10">
          Add to Cart
        </span>
        <span className="flex pl-2 group-hover:pl-24 transition-all duration-200 ease-linear items-center bg-gray-200/80 group-hover:bg-black rounded-full p-2">
          <BsHandbag size={22} />
        </span>
      </span>
    </span>
  );
};

export default AddtoCartButton;
