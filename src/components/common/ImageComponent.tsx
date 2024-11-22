"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageComponent = ({ product }: { product: any }) => {
  const [imgSrc, setImgSrc] = useState(product?.ListingImage);
  const handleError = () => {
    const fallbackImageUrl =
      "https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg";
    setImgSrc(fallbackImageUrl);
  };
  useEffect(() => {
    setImgSrc(product?.ListingImage);
  }, [product?.ListingImage]);

  return (
    <Image
      width={400}
      key={imgSrc}
      height={400}
      src={imgSrc}
      onError={handleError}
      alt={product?.Description}
      className="h-64 object-contain p-2 border mb-4 rounded-lg"
    />
  );
};

export default ImageComponent;
