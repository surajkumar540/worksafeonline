import { use } from "react";
import Breadcrumbs from "../../components/Bradcrumbs";
import { bigShoulders } from "@/app/layout";
import ProductContent from "../../components/ProductContent";
import ProductImage from "../../components/ProductImage";
import Button from "@/components/common/Button";
import Image from "next/image";
import ProductFeatures from "../../components/ProductFeatures";

// This is necessary to enable client-side functionality
type ProductPageProps = {
    params: Promise<{
        category: string;
        slug: string;
    }>;
};

const ProductPage = ({ params }: ProductPageProps) => {
    // Unwrap the params from the Promise
    const { category, slug } = use(params);

    // Replace hyphens with spaces in slug
    const formattedSlug = slug.replace(/-/g, " ");

    return (
        <div className="p-4 ">
            {/* Breadcrumbs */}
            <Breadcrumbs category={category} formattedSlug={formattedSlug} />

            <div className=" mt-10 block lg:flex gap-12">
                {/* Product Image */}
                <ProductImage />

                {/* product content */}

                <ProductContent />
            </div>

            <div className="bg-gray-300 h-[1px] my-[30px]" />

            <ProductFeatures/>
        </div>
    );
};

export default ProductPage