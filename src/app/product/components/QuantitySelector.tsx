"use client";

import { Product } from "@/types/api";
import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";

const QuantitySelector = ({ product }: { product: Product }) => {
  const [countItem, setCountItem] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageCart = JSON.parse(localStorage.getItem("cart") ?? `[]`);
      const filtered = localStorageCart.filter(
        (prod: any) => prod.ID === product?.ProductID
      );
      if (filtered.length > 0) setCountItem(filtered[0].quantity);
    }
  }, [product]);

  const increaseCount = () => setCountItem((prev) => prev + 1);
  const decreaseCount = () => setCountItem((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex text-center py-5 gap-3">
      <div className="w-[150px] text-xl flex gap-5 rounded-full justify-center items-center bg-[#F5F5F5] font-bold">
        <button
          className="w-full rounded-l-full h-full px-2 pl-4"
          onClick={decreaseCount}
        >
          -
        </button>
        <h3>{countItem}</h3>
        <button
          className="w-full rounded-r-full h-full px-2 pr-4"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
      <AddToCartButton quantity={countItem} product={product} />
    </div>
  );
};

export default QuantitySelector;
