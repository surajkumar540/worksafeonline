"use client";

import Button from "../common/Button";
import { bigShoulders } from "@/app/layout";
import { useEffect, useState } from "react";
import CustomizeLogoModal from "../modals/CustomizeLogoModal";

const Logo = ({ product }: { product: any }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleToggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const {
    size,
    color,
    price,
    Detail,
    fitting,
    quantity,
    ProductID,
    Composition,
    ProductName,
    availability,
    ProductImage,
    productBrand,
    reviewsCount,
    ProductActualPrice,
    ProductSellingPrice,
  } = product;

  const updatedProduct = {
    size,
    color,
    price,
    Detail,
    fitting,
    quantity,
    ProductID,
    Composition,
    ProductName,
    availability,
    ProductImage,
    productBrand,
    reviewsCount,
    ProductActualPrice,
    ProductSellingPrice,
  };
  return (
    <>
      <CustomizeLogoModal
        data={updatedProduct}
        isVisible={isVisible}
        onclose={handleToggle}
      />
      <Button
        type="button"
        text="Customize Logo"
        onClick={handleToggle}
        classes={`w-full flex items-center justify-center px-4 py-2 transition-all duration-200 ease-linear hover:bg-primary !rounded-full text-2xl font-bold uppercase bg-black hover:!text-black ${bigShoulders.className}`}
      />
    </>
  );
};

export default Logo;
