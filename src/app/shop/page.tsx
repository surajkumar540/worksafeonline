import React from "react";
import { fetchMetaData, Get } from "@/api/generalApi";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";

interface PageData {
  title?: string;
  keyword?: string;
  descriptions?: string;
  noIndex?: boolean;
}

export async function generateMetadata() {
  const pageData: PageData = await fetchMetaData("/shop"); // Use the defined interface
  return {
    title: "WorkSafeOnline | Shop",
    keywords: "seo",
    alternates: { canonical: `https://www.worksafeonline.co.uk/shop` },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}

export default async function Page(ctx: any) {
  const { category = null, subcategory = null } =
    (await ctx.searchParams) || {};
  let response = null,
    categoryResponse = null,
    subcategoryName = null;

  if (category) {
    const id = subcategory || category;
    const [productsResult, categoriesResult] = await Promise.allSettled([
      Get(`api/ProductsByPageN?category_id=${id}&page=1&pagesize=12`),
      Get(`api/SubCategories?category_id=${category}`),
    ]);

    if (productsResult.status === "fulfilled") response = productsResult.value;
    if (categoriesResult.status === "fulfilled")
      categoryResponse = categoriesResult.value;

    if (subcategory && categoryResponse?.subcategories?.length > 0) {
      const subcategoryMatch = categoryResponse.subcategories.find(
        (item: any) => item.menu_id == subcategory
      );
      if (subcategoryMatch) subcategoryName = subcategoryMatch.menu_name;
    }
  } else {
    response = await Get("api/ProductsByPageN?category_id=0&page=1&pagesize=12");
  }
  return (
    <>
      <Header title="Shop" />
      <FilterSection
        category={category}
        response={response}
        subcategory={subcategoryName}
        categoryResponse={categoryResponse}
      />
    </>
  );
}
