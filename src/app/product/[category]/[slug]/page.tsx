import { Get } from "@/api/generalApi";
import { redirect } from "next/navigation";
import { productData } from "@/data/productData";
import Features from "@/components/common/Features";
import Breadcrumbs from "../../components/Bradcrumbs";
import ProductImage from "../../components/ProductImage";
import ProductContent from "../../components/ProductContent";
import ProductFeatures from "../../components/ProductFeatures";
import RecommendedProducts from "@/components/common/RecommendedProducts";
import BreadcrumbsHeader from "../../components/BradcrumbsHeader";

type ProductPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};


export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | Product Details",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/product}`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}



export default async function Page(ctx: ProductPageProps) {
  const { category, slug } = (await ctx.params) || {};
  const productResponse = await Get(
    `api/ProductDetails12?product_id=${slug}&category_id=${category}`
  );
  if (productResponse.status && !productResponse?.ProductID)
    return redirect("/error");
  const productListImages = productResponse.ProductImageList.map(
    (image: any) => image?.ProductImage
  );
  const product = productData;
  return (
    <>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10">
        <BreadcrumbsHeader
          text={"shop"}
          category={category}
          formattedSlug={productResponse?.ProductName}
        />
        <div className="mt-5 lg:mt-10 block min-h-screen lg:flex gap-14">
          <ProductImage images={productListImages} />
          <ProductContent product={{ ...product, ...productResponse }} />
        </div>
        <div className="bg-gray-300 h-[1px] my-[30px]" />
        <ProductFeatures product={productResponse} />
      </div>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-10 !py-0">
        <RecommendedProducts products={product.recommended_products} />
      </div>
      <Features />
    </>
  );
}
