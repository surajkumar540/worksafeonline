import React from "react";
import Button from "../common/Button";
import ProductSwiper from "./ProductSwiper";

const Upcoming = ({ products }: { products: any }) => {
  return (
    <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 pt-4 md:pt-6 lg:pt-32">
      <div className="flex py-10 space-x-4 items-center">
        <Button
          text="NEW ARRIVALS"
          classes="!rounded-full bg-black w-full md:w-fit text-3xl py-3 font-semibold border-2 tracking-tight !px-10 hover:bg-black border-black text-white"
        />
        <Button
          text="BEST SELLERS"
          classes="!rounded-full text-3xl py-3 hidden md:block font-semibold border-2 tracking-tight !px-10"
        />
      </div>
      <ProductSwiper products={products} />
      <Button
        text="BEST SELLERS"
        classes="!rounded-full text-3xl py-3 !mt-5 w-full md:w-fit md:hidden font-semibold border-2 tracking-tight !px-10"
      />
    </div>
  );
};

export default Upcoming;
