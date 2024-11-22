import { Get } from "@/api/generalApi";
import ProductCard from "@/components/common/ProductCard";
import React from "react";
import Filter from "./components/Filter";

export default async function Page(ctx: any) {
  const categoryExists = await ctx.searchParams;
  let category, subcategory, response, categoryResponse;

  if (categoryExists && categoryExists.category) {
    category = categoryExists?.category;
    subcategory = categoryExists?.subcategory;
    const id = category && subcategory ? subcategory : category;
    response = await Get("api/Products?category_id=" + id);
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
  return (
    <div className="grid grid-cols-4 gap-20 max-w-9xl mx-auto p-10 pt-52 md:pt-44 lg:pt-36">
      <div className="col-span-1 space-y-6">
        {categories && categories.length > 0 && (
          <Filter
            countKey="Count"
            category={category}
            labelKey="menu_name"
            options={categories}
            subcategory={subcategory}
            heading="Product categories"
          />
        )}
        {colors && colors.length > 0 && (
          <Filter
            heading="Color"
            countKey="Count"
            category={category}
            options={colors}
            labelKey="Colour"
            subcategory={subcategory}
          />
        )}
        {fittings && fittings.length > 0 && (
          <Filter
            heading="Fittings"
            countKey="Count"
            category={category}
            options={fittings}
            labelKey="Fitting"
            subcategory={subcategory}
          />
        )}
        {sizes && sizes.length > 0 && (
          <Filter
            heading="Sizes"
            countKey="Count"
            category={category}
            options={sizes}
            labelKey="Size"
            subcategory={subcategory}
          />
        )}
        {brands && brands.length > 0 && (
          <Filter
            heading="brands"
            countKey="Count"
            category={category}
            options={brands}
            labelKey="Brand"
            subcategory={subcategory}
          />
        )}
      </div>
      <div className="col-span-3 grid grid-cols-4 gap-5">
        {products && products.length > 0 ? (
          products.map((product: any) => {
            return (
              <React.Fragment key={product?.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })
        ) : (
          <div>No Product Avaiable</div>
        )}
      </div>
    </div>
  );
}
