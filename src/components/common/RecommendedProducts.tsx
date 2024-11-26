import React from "react";
import ProductCard from "./ProductCard";
import { bigShoulders } from "@/app/layout";

const RecommendedProducts = ({ products }: { products: any }) => {
  return (
    <div className="py-10">
      <p
        className={`${bigShoulders.className} pb-10 text-2xl md:text-3xl font-black`}
      >
        You may be interested in…
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
        {products.map((product: any) => {
          return (
            <React.Fragment key={product?.ID}>
              <ProductCard product={product} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedProducts;
