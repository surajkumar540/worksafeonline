import Guarantee from "./Guarantee";
import ShippingInfo from "./ShippingInfo";
import ProductDetails from "./ProductDetail";
import ProductActions from "./ProductActions";
import ProductMetaInfo from "./ProductMetaInfo";
import QuantitySelector from "./QuantitySelector";

const ProductContent = ({ product }: { product: any }) => {
  return (
    <div className="w-full lg:w-[45%] mt-4 lg:mt-0">
      <ProductDetails product={product} />
      <QuantitySelector product={product} />
      <ProductActions />
      <Guarantee />
      <ShippingInfo />
      <div className="bg-gray-300 h-[1px] my-8" />
      <ProductMetaInfo />
    </div>
  );
};

export default ProductContent;
