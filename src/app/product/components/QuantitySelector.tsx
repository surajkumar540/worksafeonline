"use client";

import { Product } from "@/types/api";
import ProductSizes from "./ProductSizes";
import ProductColors from "./ProductColor";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import ProductFitting from "./ProductFitting";
import AddToCartButton from "./AddToCartButton";
import Logo from "@/components/customisation/Logo";

const QuantitySelector = ({
  product,
  showLogoCustomisation = true,
}: {
  product: Product;
  showLogoCustomisation?: boolean;
}) => {
  const [selectedFields, setSelectedFields] = useState({
    size: {},
    color: {},
    fitting: {},
  });
  const [countItem, setCountItem] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageCart = JSON.parse(localStorage.getItem("cart") ?? `[]`);
      const filtered = localStorageCart.filter(
        (prod: any) => prod.ID === product?.ProductID
      );
      if (filtered.length > 0) {
        const product = filtered[0];
        setSelectedFields({
          size: product?.Size ?? {},
          color: product?.Color ?? {},
          fitting: product?.Fitting ?? {},
        });
        setCountItem(product.Quantity);
      }
    }
  }, [product]);

  const increaseCount = () => setCountItem((prev) => prev + 1);
  const decreaseCount = () => setCountItem((prev) => (prev > 1 ? prev - 1 : 1));

  const filterProductFittings = product?.ProductFittings.filter(
    (fittings: any) => fittings.Fitting.trim() !== "NA"
  );

  return (
    <>
      {product.ProductActualPrice && product.ProductSellingPrice && (
        <p className={`mt-4 text-4xl space-x-2 ${bigShoulders.className}`}>
          <span>{product.ProductSellingPrice}$</span>
          <span className="text-3xl text-gray-500 line-through">
            {product.ProductActualPrice}$
          </span>
        </p>
      )}
      {product?.ProductSizes.length > 0 && (
        <ProductSizes
          sizes={product?.ProductSizes}
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
        />
      )}
      {product?.ProductColour.length > 0 && (
        <ProductColors
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
          productColors={product?.ProductColour}
        />
      )}
      {filterProductFittings.length > 0 && (
        <ProductFitting
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
          productFittings={filterProductFittings}
        />
      )}
      <div className="flex text-center py-5 gap-3">
        <div className="w-[150px] text-xl flex gap-5 rounded-full justify-center items-center bg-[#F5F5F5] font-bold">
          <button
            className="w-full rounded-l-full h-full px-2 pl-4"
            onClick={decreaseCount}
          >
            -
          </button>
          <h3>{countItem}</h3>
          <button
            className="w-full rounded-r-full h-full px-2 pr-4"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
        <AddToCartButton
          product={product}
          quantity={countItem}
          selectedFields={selectedFields}
        />
      </div>
      {showLogoCustomisation && (
        <Logo
          product={{
            ...(product || {}),
            ...(selectedFields || {}),
            quantity: countItem || 0,
          }}
        />
      )}
    </>
  );
};

export default QuantitySelector;
