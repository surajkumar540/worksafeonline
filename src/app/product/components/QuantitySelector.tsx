"use client";

import { Product } from "@/types/api";
import ProductColors from "./ProductColor";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import SizeQuantities from "./SizeQuantities";
import ProductFitting from "./ProductFitting";
import AddToCartButton from "./AddToCartButton";
import Logo from "@/components/customisation/Logo";

interface QuantitySelectorProps {
  product: Product;
  showLogoCustomisation?: boolean;
}

const QuantitySelector = ({
  product,
  showLogoCustomisation = true,
}: QuantitySelectorProps) => {
  const [price, setPrice] = useState({
    ProductSellingPrice: product?.ProductSellingPrice,
    ProductActualPrice: product?.ProductActualPrice,
  });
  const [countItem, setCountItem] = useState(1);
  const [selectedFields, setSelectedFields] = useState({
    size: [],
    color: {},
    fitting: {},
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageCart = JSON.parse(localStorage.getItem("cart") ?? `[]`);
      const filtered = localStorageCart.filter(
        (prod: any) => prod.ID === product?.ProductID
      );
      if (filtered.length > 0) {
        const product = filtered[0];
        setSelectedFields({
          size: product?.Size ?? [],
          color: product?.Color ?? {},
          fitting: product?.Fitting ?? {},
        });
        setCountItem(product.Quantity);
      }
    }
  }, [product]);

  const filterProductFittings = product?.ProductFittings.filter(
    (fittings: any) => fittings?.Fitting?.trim() !== "NA"
  );

  const filterProductSizes = product?.ProductSizes.filter(
    (size: any) => size?.Size?.trim() !== "NA"
  );

  useEffect(() => {
    const filterProducts = (products: any[], config: any) => {
      return products.filter((product) => {
        const sizeMatch = config?.size?.some(
          (selectedSize: any) =>
            selectedSize.Size_Sequence_No === product?.Size_Sequence_No
        );
        return (
          sizeMatch &&
          product?.Colour_Sequence_No === config?.color?.Colour_Sequence_No &&
          product?.Fitting_Sequence_No === config?.fitting?.Fitting_Sequence_No
        );
      });
    };

    if (
      product?.ProductPricingByColourSizeFit &&
      product?.ProductPricingByColourSizeFit.length > 0
    ) {
      const filteredProducts = filterProducts(
        product?.ProductPricingByColourSizeFit,
        selectedFields
      );
      if (filteredProducts.length > 0) {
        setPrice({
          ProductSellingPrice: filteredProducts[0]?.SPPrice,
          ProductActualPrice: filteredProducts[0]?.TCPrice,
        });
      }
    }
  }, [selectedFields, product]);

  return (
    <>
      {price?.ProductActualPrice && price?.ProductSellingPrice && (
        <p className={`mt-4 text-4xl space-x-2 ${bigShoulders.className}`}>
          <span>£{price.ProductSellingPrice}</span>
          <span className="text-3xl text-gray-500 line-through">
            £{price.ProductActualPrice}
          </span>
        </p>
      )}
      {product?.ProductColour.length > 0 && (
        <ProductColors
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
          productColors={product?.ProductColour}
        />
      )}
      {filterProductSizes.length > 0 && (
        <SizeQuantities
          sizes={filterProductSizes}
          selectedFields={selectedFields}
          setSelectedFields={setSelectedFields}
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
        <AddToCartButton
          quantity={countItem}
          selectedFields={selectedFields}
          product={{
            ...product,
            ProductSellingPrice: price.ProductSellingPrice,
          }}
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
