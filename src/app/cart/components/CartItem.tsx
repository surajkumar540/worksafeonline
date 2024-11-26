import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";

interface CartItemProps {
  cart: any;
  handleRemove: any;
  handleUpdateQuantity: any;
}

const CartItem: React.FC<CartItemProps> = ({
  cart,
  handleRemove,
  handleUpdateQuantity,
}) => {
  return (
    <>
      <div className="md:hidden">
        {cart.map((item: any) => {
          return (
            <div key={item?.ID} className="border-b flex gap-5 items-start">
              <div className="w-1/4 p-2">
                <Image
                  width={200}
                  height={200}
                  alt={item.Description}
                  src={item.ListingImage}
                  className="w-full aspect-square object-contain rounded-md border"
                />
              </div>
              <div className="w-3/4 pt-3">
                <p
                  className={`line-clamp-1 font-bold mb-1 text-xl ${bigShoulders.className}`}
                >
                  {item.Description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg">
                    {(item.EndPrice * item.quantity).toFixed(2)}$
                  </p>
                  <div className="flex items-center">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        handleUpdateQuantity(
                          item.ID,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        handleUpdateQuantity(item.ID, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block">
        <div
          className={`grid grid-cols-6 border-y py-4 gap-5 justify-center items-center ${bigShoulders.className}`}
        >
          <p></p>
          <p className="text-2xl col-span-2 font-black uppercase">Product</p>
          <p className="text-2xl font-black uppercase">Price</p>
          <p className="text-2xl font-black uppercase">Quantity</p>
          <p className="text-2xl font-black uppercase">Subtotal</p>
        </div>
        {cart.map((item: any) => {
          return (
            <div
              key={item?.ID}
              className="border-b grid grid-cols-6 gap-5 justify-center items-center"
            >
              <div className="p-2 flex justify-center items-center">
                <span
                  onClick={() => handleRemove(item?.ID)}
                  className="flex justify-center items-center my-auto h-full transition-all duration-200 ease-linear cursor-pointer rounded-full hover:bg-gray-200 p-2 mr-1"
                >
                  <RxCross1 />
                </span>
                <Image
                  width={200}
                  height={200}
                  alt={item.Description}
                  src={item.ListingImage}
                  className="w-full aspect-square object-contain rounded-md border"
                />
              </div>
              <p className="col-span-2 line-clamp-3">{item.Description}</p>
              <p className="text-lg">{item.EndPrice}$</p>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>
                    handleUpdateQuantity(
                      item.ID,
                      Math.max(1, item.quantity - 1)
                    )
                  }
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>
                    handleUpdateQuantity(item.ID, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <p className="text-lg">
                {(item.EndPrice * item.quantity).toFixed(2)}$
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartItem;
