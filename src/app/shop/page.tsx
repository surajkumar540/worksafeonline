import React from "react";
import { Get } from "@/api/generalApi";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";

export default async function Page(ctx: any) {
  const { category, subcategory } = (await ctx.searchParams) || {};
  let response = null,
    categoryResponse = null,
    subcategoryName = null;

  if (category) {
    const id = subcategory || category;
    const [productsResult, categoriesResult] = await Promise.allSettled([
      Get(`api/ProductsByPage?category_id=${id}&page=1&pagesize=12`),
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
    response = await Get("api/ProductsByPage?category_id=0&page=1&pagesize=20");
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
