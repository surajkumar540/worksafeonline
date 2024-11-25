import React from "react";
import Image from "next/image";

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
    <div className="flex items-center justify-between p-4 border hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-linear">
      {/* Left Section: Image and Details */}
      <div className="flex justify-center items-center gap-3">
        <span
          onClick={() => handleRemove(product?.ID)}
          className="flex justify-center items-center h-full"
        >
          x
        </span>
        <div className="flex items-start border-l border-gray-300 gap-4">
          {/* Product Image */}
          <Image
            width={200}
            height={200}
            alt={product.Description}
            src={product.ListingImage}
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>
        {/* Product Details */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {product.Description}
          </h2>
          <p className="text-gray-500 font-medium">{product.EndPrice}$</p>
          <p className="text-gray-400 text-sm">{newdate.toString()}</p>
        </div>
      </div>

      {/* Right Section: Add to Cart Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition-all duration-150 ease-in-out"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default WishlistCard;
