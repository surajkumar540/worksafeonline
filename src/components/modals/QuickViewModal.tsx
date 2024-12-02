import Link from "next/link";
import Modal from "../common/Modal";
import { bigShoulders } from "@/app/layout";
import { productData } from "@/data/productData";
import QuickViewProductSwiper from "./QuickViewProductSwiper";
import ProductSizes from "@/app/product/components/ProductSizes";
import ProductColors from "@/app/product/components/ProductColor";
import ProductDetails from "@/app/product/components/ProductDetail";
import ProductFitting from "@/app/product/components/ProductFitting";
import ProductMetaInfo from "@/app/product/components/ProductMetaInfo";
import QuantitySelector from "@/app/product/components/QuantitySelector";

const QuickViewModal = ({
  data,
  onclose,
  isVisible,
}: {
  data: any;
  isVisible: boolean;
  onclose: () => void;
}) => {
  if (!data) return null;

  const productListImages = data.ProductImageList.map(
    (image: any) => image?.ProductImage
  );
  const filterProductFittings = data?.ProductFittings.filter(
    (fittings: any) => fittings.Fitting.trim() !== "NA"
  );
  const product = { ...data, ...productData };
  return (
    <Modal onClose={onclose} isVisible={isVisible}>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <QuickViewProductSwiper productListingImages={productListImages} />
        </div>
        <div className="w-full lg:w-1/2">
          <ProductDetails product={product} />
          {product?.ProductSizes.length > 0 && (
            <ProductSizes sizes={product?.ProductSizes} />
          )}
          {product?.ProductColour.length > 0 && (
            <ProductColors productColors={product?.ProductColour} />
          )}
          {filterProductFittings.length > 0 && (
            <ProductFitting productFittings={filterProductFittings} />
          )}
          <QuantitySelector product={product} />
          <Link
            href={product?.slug}
            className={`w-full flex items-center justify-center px-4 py-2 transition-all duration-200 ease-linear hover:bg-primary rounded-full text-2xl font-bold uppercase bg-black text-white hover:text-black ${bigShoulders.className}`}
          >
            View Product
          </Link>
          <div className="bg-gray-300 mt-5 h-[1px]" />
          <ProductMetaInfo />
          <div className="bg-gray-300 h-[1px] mt-5" />
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
