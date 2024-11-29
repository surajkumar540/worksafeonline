import Link from "next/link";
import StarRating from "./StarRating";
import { bigShoulders } from "@/app/layout";
import ImageComponent from "./ImageComponent";
import AddtoCartButton from "./AddtoCartButton";

const ProductCard = ({ product }: { product: any }) => {
  const slug = `/product/${product?.MenuId}/${product?.Style}`;
  return (
    <div>
      <ImageComponent slug={slug} product={product} />
      <div
        className={`flex flex-col justify-center items-centers ${bigShoulders.className}`}
      >
        <StarRating rating={4} />
        <h3 className="font-extrabold text-lg mt-2 line-clamp-1 hover:text-primary transition-all duration-200 ease-linear">
          <Link href={slug}>{product?.Description}</Link>
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
  );
};

export default ProductCard;
