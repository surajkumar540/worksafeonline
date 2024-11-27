"use client";
import React from "react";
import Link from "next/link";
import ActivateLink from "./ActivateLink";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";

const Categories = ({ categories }: { categories: any }) => {
  const navigate = useRouter();
  const handleNavigation = (menu_id: string | number) => {
    const href = `/shop?category=${menu_id}`;
    if (href && menu_id) return navigate.push(href);
  };

  return (
    <div className="flex lg:flex-wrap gap-3 lg:gap-5 items-center overflow-x-auto lg:overflow-x-visible">
      {categories.map((link: any) => {
        return (
          <span
            key={link.menu_id}
            className="text-base group cursor-pointer relative lg:text-sm whitespace-nowrap hover:text-primary capitalize"
          >
            <span onClick={() => handleNavigation(link?.menu_id)}>
              <ActivateLink
                name={link?.menu_name || "Unnamed"}
                id={link.menu_id?.toString() || ""}
              />
            </span>
            <span className="w-fit bg-white gap-2 shadow-lg py-3 rounded-b-lg hidden group-hover:flex text-black flex-col left-0 z-20 absolute opacity-0 h-0 group-hover:h-fit transition-all duration-300 ease-in-out group-hover:opacity-100">
              {Array.isArray(link?.subcategories) &&
              link?.subcategories.length > 0 ? (
                link.subcategories.map((category: any) => {
                  if (!category?.menu_id || !category?.menu_name) {
                    console.warn("Invalid category data:", category);
                    return null;
                  }

                  return (
                    <Link
                      key={category.menu_id}
                      href={`/shop?category=${category.parent_id}&subcategory=${category?.menu_id}`}
                      className={`px-4 text-lg font-semibold hover:text-primary ${bigShoulders.className}`}
                    >
                      {category.menu_name}
                    </Link>
                  );
                })
              ) : (
                <span className="px-4 text-gray-500 text-lg font-medium">
                  No subcategories available
                </span>
              )}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
