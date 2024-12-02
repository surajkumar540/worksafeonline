import Guarantee from "./Guarantee";
import ShippingInfo from "./ShippingInfo";
import ProductSizes from "./ProductSizes";
import ProductColors from "./ProductColor";
import ProductDetails from "./ProductDetail";
import ProductFitting from "./ProductFitting";
import ProductActions from "./ProductActions";
import ProductMetaInfo from "./ProductMetaInfo";
import QuantitySelector from "./QuantitySelector";
import Logo from "@/components/customisation/Logo";

const ProductContent = ({ product }: { product: any }) => {
  const filterProductFittings = product?.ProductFittings.filter(
    (fittings: any) => fittings.Fitting.trim() !== "NA"
  );
  return (
    <div className="w-full lg:w-[45%] mt-4 lg:mt-0">
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
      <Logo product={product} />
      <ProductActions />
      <Guarantee />
      <ShippingInfo />
      <div className="bg-gray-300 h-[1px] my-8" />
      <ProductMetaInfo />
    </div>
  );
};

export default ProductContent;
