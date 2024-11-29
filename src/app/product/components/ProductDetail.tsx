import Link from "next/link";
import { Product } from "@/types/api";
import { BiCheck } from "react-icons/bi";
import { bigShoulders } from "@/app/layout";
import StarRating from "@/components/common/StarRating";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const savePercent =
    ((product.ProductActualPrice - product.ProductSellingPrice) /
      product.ProductActualPrice) *
    100;
  const save = Math.round(savePercent * 10) / 10;
  return (
    <div>
      <span className="px-3 py-1 bg-[#C70A33] text-sm text-white rounded-full">
        Save {save}%
      </span>
      <h1
        className={`text-3xl md:text-5xl py-5 font-black uppercase ${bigShoulders.className}`}
      >
        {product.ProductName}
      </h1>
      <div className="flex flex-wrap text-gray-600 items-center gap-3 md:gap-5">
        <span className="pt-px">
          <span>Brands: </span>
          <span className="text-primary font-semibold">
            {product.productBrand}
          </span>
        </span>
        <Link
          href="#reviews"
          className="hover:underline hover:underline-offset-2"
        >
          <StarRating rating={product.reviewsCount} showText={true} />
        </Link>
        <div className="flex items-center gap-1 text-green-500">
          <BiCheck size={20} />
          <span className="rounded-full">{product.availability}</span>
        </div>
      </div>

      <div className="bg-gray-300 h-[1px] mt-5" />

      <p className="mt-4 text-gray-500 font-thin">{product.Detail}</p>
      {product.ProductActualPrice && product.ProductSellingPrice && (
        <p className={`mt-4 text-4xl space-x-2 ${bigShoulders.className}`}>
          <span>{product.ProductSellingPrice}$</span>
          <span className="text-3xl text-gray-500 line-through">
            {product.ProductActualPrice}$
          </span>
        </p>
      )}
      {/* <p className={`mt-4 text-4xl ${bigShoulders.className}`}>
          {product.price.minPrice.toString()}$ -{" "}
          {product.price.maxPrice.toString()}$
        </p> */}
    </div>
  );
};

export default ProductDetails;
