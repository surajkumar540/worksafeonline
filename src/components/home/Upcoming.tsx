import React from "react";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";

const Upcoming = ({ products }: { products: any }) => {
  return (
    <div className="max-w-9xl mx-auto px-10 pt-32">
      <div className="flex py-10 space-x-4 items-center">
        <Button
          text="NEW ARRIVALS"
          classes="!rounded-full bg-black text-3xl py-3 font-semibold border-2 tracking-tight !px-10 hover:bg-black border-black text-white"
        />
        <Button
          text="BEST SELLERS"
          classes="!rounded-full text-3xl py-3 font-semibold border-2 tracking-tight !px-10"
        />
      </div>
      <div className="grid grid-cols-5 gap-5 items-center">
        {products &&
          products.length > 0 &&
          products.slice(8, 13).map((product: any) => {
            return (
              <React.Fragment key={product.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Upcoming;
