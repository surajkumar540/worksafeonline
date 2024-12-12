import React from "react";
import { bigShoulders } from "../layout";

const CartSkeleton: React.FC = () => {
  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
      <h1
        className={`uppercase text-3xl md:text-5xl pb-8 lg:text-7xl flex items-center font-black ${bigShoulders.className}`}
      >
        Checkout
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        <div className="space-y-6 col-span-2 w-full">
          {/* Cart Table */}
          <div className="space-y-6">
            <div className="h-6 bg-gray-300 rounded animate-pulse w-48"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-300 rounded animate-pulse w-64 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-300 rounded animate-pulse w-64 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-300 rounded animate-pulse w-64 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded animate-pulse"></div>
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
