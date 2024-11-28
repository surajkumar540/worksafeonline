import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

type Product = {
  ID: string;
  quantity: number;
  EndPrice: string;
  Description: string;
  ListingImage: string;
};

type WishlistCardProps = {
  product: Product;
  handleRemove: any;
};

const CartItem: React.FC<WishlistCardProps> = ({ product, handleRemove }) => {
  return (
    <div className="flex relative hover:bg-gray-100 gap-5 p-4 pr-10 border-b border-b-gray-200">
      <span
        onClick={() => handleRemove(product?.ID)}
        className="hover:bg-gray-200 text-gray-500 absolute top-2 p-1 rounded-full right-2 transition-all duration-200 ease-linear"
      >
        <RxCross1 size={15} />
      </span>
      <Image
        width={200}
        height={200}
        alt={product.Description}
        src={product.ListingImage}
        className="w-16 h-16 aspect-square object-contain rounded-md border"
      />
      <div>
        <h2 className="text-gray-700 text-sm">{product.Description}</h2>
        <p className="text-primary font-semibold">
          <span className="text-black font-normal">{product?.quantity} x</span>{" "}
          {product.EndPrice}$
        </p>
      </div>
    </div>
  );
};

export default CartItem;
