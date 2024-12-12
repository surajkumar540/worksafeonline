import React from "react";
import { bigShoulders } from "../layout";

const CartSkeleton: React.FC = () => {
  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
      <h1
        className={`uppercase text-3xl md:text-5xl pb-8 lg:text-7xl flex items-center font-black ${bigShoulders.className}`}
      >
        Cart
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        <div className="space-y-6 col-span-2 w-full">
          {/* Cart Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 p-4 bg-gray-100 font-semibold text-gray-800">
              <div className="col-span-2">PRODUCT</div>
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>SUBTOTAL</div>
            </div>
            {/* Skeleton Rows */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 p-4 border-b border-gray-200"
              >
                <div className="col-span-2 flex space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-4 w-6 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded animate-pulse w-32"></div>
            <div className="flex items-center space-x-4">
              <div className="flex-1 h-10 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-32 h-10 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="p-4 border col-span-1 border-gray-200 rounded-lg space-y-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse w-40"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded animate-pulse w-32"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse w-20"></div>
              </div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded animate-pulse w-64 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
