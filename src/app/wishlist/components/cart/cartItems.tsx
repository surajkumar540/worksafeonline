import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

const CartItem = ({
  product,
  handleRemove,
}: {
  product: any;
  handleRemove: any;
}) => {
  const slug = `/product/1/${product?.ProductCode}`;
  return (
    <div className="flex relative hover:bg-gray-100 gap-3 md:p-3 lg:p-4 pr-10 border-b border-b-gray-200">
      <span
        onClick={() => handleRemove(product?.Line)}
        className="hover:bg-gray-200 text-gray-500 absolute top-2 p-1 rounded-full right-2 transition-all duration-200 ease-linear"
      >
        <RxCross1 size={15} />
      </span>
      <div className="w-1/5">
        <Image
          width={200}
          height={200}
          src={product?.ProductImage}
          alt={product?.ProductDescription}
          onClick={() => (window.location.href = slug)}
          className="w-full aspect-square object-contain rounded-md border"
        />
      </div>
      <div>
        <h2
          className="text-black font-semibold"
          onClick={() => (window.location.href = slug)}
        >
          {product.ProductDescription} ({product.ProductCode})
        </h2>
        <p>
          {product?.Colour && (
            <span className="text-sm">Color: {product?.Colour}</span>
          )}
          {product?.Fitting && (
            <span className="border-x text-sm px-2 mx-2 border-black">
              Fitting: {product?.Fitting}
            </span>
          )}
          {product?.Size && (
            <span className="text-sm">Size: {product?.Size}</span>
          )}
        </p>
        <p className="text-primary font-semibold">
          <span className="text-black font-normal">{product?.Quantity} x</span>{" "}
          £ {product?.SalesPrice}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
