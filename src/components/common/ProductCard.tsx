import Link from "next/link";
import StarRating from "./StarRating";
import { bigShoulders } from "@/app/layout";
import ImageComponent from "./ImageComponent";
import AddtoCartButton from "./AddtoCartButton";
import { Product } from "@/hooks/useEventEmitter";

const ProductCard = ({ product }: { product: Product }) => {
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
            <span className="text-2xl">£{product?.EndPrice.toFixed(2)}</span>
            {product?.StartPrice &&
              product?.StartPrice !== product?.EndPrice && (
                <span className="text-xl text-gray-400 line-through">
                  £{Number(product?.StartPrice).toFixed(2)}
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
