import { bigShoulders } from "@/app/layout";
import ProductCard from "./ProductCard";

const RecommendedProducts = ({ products }: { products: any }) => {
  return (
    <div className="py-10">
      <p className={`${bigShoulders.className} pb-10 text-3xl font-black`}>
        You may be interested in…
      </p>
      <div className="grid grid-cols-5 gap-5 ">
        {products.map((product: any) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedProducts;
