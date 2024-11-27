import React from "react";
import ProductCard from "@/components/common/ProductCard";

const ProductSection = ({ products }: { products: any }) => {
  return (
    <div className="col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-5">
      {products && products.length > 0 ? (
        products.map((product: any) => {
          return (
            <React.Fragment key={product?.ID}>
              <ProductCard product={product} />
            </React.Fragment>
          );
        })
      ) : (
        <div>No Product Avaiable</div>
      )}
    </div>
  );
};

export default ProductSection;
