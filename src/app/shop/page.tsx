import React from "react";
import { Get } from "@/api/generalApi";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";

export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | Shop",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/shop`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
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
