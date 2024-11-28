import StarRating from "./StarRating";

import { bigShoulders } from "@/app/layout";
import ImageComponent from "./ImageComponent";
import AddtoCartButton from "./AddtoCartButton";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {

  function generateSlug(title: string): string {
    return title.trim().toLowerCase().replace(/\s+/g, "-"); // Replace spaces with hyphens
  }


  // Slug of product
  const slug = generateSlug(product.Description); // Output: 'smart-phone

  return (
   // TODO: category is static
   <Link href={`product/jacket/${slug}`}>
    <div>
      <ImageComponent product={product} />
      <div
        className={`flex flex-col justify-center items-centers ${bigShoulders.className}`}
      >
        <StarRating rating={4} />
        <h3 className="font-extrabold text-lg mt-2 line-clamp-1">
          {product?.Description}
        </h3>
        <button className="flex mt-2 justify-between items-center">
          <span className="space-x-1 flex items-center">
            <span className="text-2xl">{product?.EndPrice}$</span>
            {product?.StartPrice !== product?.EndPrice && (
              <span className="text-xl text-gray-400 line-through">
                {product?.StartPrice}$
              </span>
            )}
          </span>
          <AddtoCartButton product={product} />
        </button>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
