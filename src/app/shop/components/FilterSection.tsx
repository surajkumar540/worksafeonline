"use client";

import Filter from "./Filter";
import { useState } from "react";
import { Post } from "@/utils/axios";
import ProductSection from "./ProductSection";
import { BASE_URL, getPaginateData } from "@/api/generalApi";

interface Filter {
  sizes: [];
  colors: [];
  brands: [];
  fittings: [];
  products: [];
  categories: [];
  category: number;
  subcategory: number;
}

const FilterSection = ({
  sizes,
  colors,
  brands,
  products,
  fittings,
  category,
  categories,
  subcategory,
}: Filter) => {
  const [filters, setFilters] = useState<any>({});
  const [filteredProducts, setFilteredProducts] = useState(products);
  const handleProducts = async (filters: any) => {
    const updatedData = getPaginateData({ ...filters, category_id: category });
    const response: any = await Post(
      BASE_URL + "api/FilterSortProductsByPageN",
      updatedData
    );
    if (response?.status) setFilteredProducts(response?.product ?? []);
  };
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 max-w-9xl mx-auto p-4 lg:p-10">
      <div className="col-span-1 hidden md:block space-y-6">
        {categories && categories.length > 0 && (
          <Filter
            countKey="Count"
            filters={filters}
            category={category}
            labelKey="menu_name"
            options={categories}
            setFilters={setFilters}
            subcategory={subcategory}
            heading="Product categories"
            handleProducts={handleProducts}
          />
        )}
        {colors && colors.length > 0 && (
          <Filter
            heading="Color"
            countKey="Count"
            options={colors}
            filters={filters}
            labelKey="Colour"
            category={category}
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
        {fittings && fittings.length > 0 && (
          <Filter
            countKey="Count"
            heading="Fittings"
            filters={filters}
            category={category}
            options={fittings}
            labelKey="Fitting"
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
        {sizes && sizes.length > 0 && (
          <Filter
            heading="Sizes"
            options={sizes}
            labelKey="Size"
            countKey="Count"
            filters={filters}
            category={category}
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
        {brands && brands.length > 0 && (
          <Filter
            heading="brands"
            countKey="Count"
            options={brands}
            labelKey="Brand"
            filters={filters}
            category={category}
            setFilters={setFilters}
            subcategory={subcategory}
            handleProducts={handleProducts}
          />
        )}
      </div>
      <ProductSection products={filteredProducts} />
    </div>
  );
};

export default FilterSection;
