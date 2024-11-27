import React from "react";
import { Get } from "@/api/generalApi";
import FilterSection from "./components/FilterSection";

export default async function Page(ctx: any) {
  let isLoading = true;
  const categoryExists = await ctx.searchParams;
  let category, subcategory, response, categoryResponse;

  if (categoryExists && categoryExists.category) {
    category = categoryExists?.category;
    subcategory = categoryExists?.subcategory;
    const id = category && subcategory ? subcategory : category;
    response = await Get(
      "api/ProductsByPage?category_id=" + id + "&page=1&pagesize=12"
    );
    categoryResponse = await Get("api/SubCategories?category_id=" + category);
  } else
    response = await Get("api/ProductsByPage?category_id=0&page=1&pagesize=20");

  const sizes = response?.Sizes ?? [];
  const brands = response?.Brands ?? [];
  const prices = response?.Prices ?? [];
  const colors = response?.Colours ?? [];
  const products = response?.product ?? [];
  const fittings = response?.Fittings ?? [];
  const pageCount = response?.PageCount ?? [];
  const currentPage = response?.CurrentPage ?? [];
  const categories = categoryResponse?.subcategories ?? [];
  isLoading = false;
  return (
    <FilterSection
      sizes={sizes}
      colors={colors}
      brands={brands}
      products={products}
      fittings={fittings}
      category={category}
      isLoading={isLoading}
      categories={categories}
      subcategory={subcategory}
    />
  );
}
