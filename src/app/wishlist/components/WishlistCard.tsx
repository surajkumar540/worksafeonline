import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

type Product = {
  ID: string;
  date: string;
  EndPrice: string;
  Description: string;
  ListingImage: string;
};

type WishlistCardProps = {
  product: Product;
  handleRemove: any;
  onAddToCart: (product: Product) => void;
};

const WishlistCard: React.FC<WishlistCardProps> = ({
  product,
  onAddToCart,
  handleRemove,
}) => {
  const newdate: any = new Date();
  return (
    <div className="flex items-center justify-between border hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-linear">
      <div className="flex justify-center items-center">
        <span
          onClick={() => handleRemove(product?.ID)}
          className="flex justify-center hover:bg-gray-200 items-center h-full p-4 transition-all duration-200 ease-linear"
        >
          <RxCross1 />{" "}
        </span>
        <div className="flex items-start border-l border-gray-300 gap-4 p-4">
          <Image
            width={200}
            height={200}
            alt={product.Description}
            src={product.ListingImage}
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {product.Description}
          </h2>
          <p className="text-gray-500 font-medium">{product.EndPrice}$</p>
          <p className="text-gray-400 text-sm">{newdate.toString()}</p>
        </div>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-yellow-400 text-black font-semibold px-6 text-sm mr-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-150 ease-in-out"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default WishlistCard;
