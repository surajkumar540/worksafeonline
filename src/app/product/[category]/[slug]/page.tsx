import { use } from "react";
import Breadcrumbs from "../../components/Bradcrumbs";
import ProductImage from "../../components/ProductImage";
import ProductContent from "../../components/ProductContent";
import ProductFeatures from "../../components/ProductFeatures";

type ProductPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

const ProductPage = ({ params }: ProductPageProps) => {
  const { category, slug } = use(params);
  const formattedSlug = slug.replace(/-/g, " ");

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
      <Breadcrumbs category={category} formattedSlug={formattedSlug} />
      <div className="mt-10 block lg:flex gap-12">
        <ProductImage />
        <ProductContent />
      </div>
      <div className="bg-gray-300 h-[1px] my-[30px]" />
      <ProductFeatures />
    </div>
  );
};

export default ProductPage;
