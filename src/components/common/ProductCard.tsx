import StarRating from "./StarRating";
import { BsHandbag } from "react-icons/bs";
import { bigShoulders } from "@/app/layout";
import ImageComponent from "./ImageComponent";

const ProductCard = ({ product }: { product: any }) => {
  return (
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
          <span className="relative group z-40">
            <span className="group-hover:bg-black group-hover:text-white flex items-center rounded-full">
              <span className="absolute font-sans tracking-tight right-8 text-sm opacity-0 whitespace-nowrap group-hover:delay-100 font-semibold transition-all duration-600 ease-in-out group-hover:opacity-100 group-hover:right-10">
                Add to Cart
              </span>
              <span className="flex pl-2 group-hover:pl-24 transition-all duration-200 ease-linear items-center bg-gray-200/80 group-hover:bg-black rounded-full p-2">
                <BsHandbag size={22} />
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
