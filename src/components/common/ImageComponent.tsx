"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import WishlistButton from "./WishlistButton";

const ImageComponent = ({ product, slug }: { product: any; slug: string }) => {
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
    <div className="relative group">
      <Link href={slug}>
        <Image
          width={400}
          key={imgSrc}
          height={400}
          src={imgSrc}
          onError={handleError}
          alt={product?.Description}
          className="h-48 md:h-64 object-contain transition-all duration-200 ease-linear p-2 border mb-4 rounded-lg"
        />
      </Link>
      <WishlistButton product={product} imgSrc={imgSrc} setImgSrc={setImgSrc} />
    </div>
  );
};

export default ImageComponent;
