"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaAngleUp } from "react-icons/fa";
import { bigShoulders } from "@/app/layout";
import { includes } from "@/utils/polyfills";

interface FilterProps {
  filters: any;
  setFilters: any;
  heading: string;
  labelKey: string;
  countKey: string;
  category: number;
  handleProducts: any;
  subcategory: number;
  options: Array<Record<string, any>>;
}

const Filter = ({
  heading,
  options,
  labelKey,
  countKey,
  filters,
  setFilters,
  subcategory,
  handleProducts,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [subcategoryInput, setSubcategory] = useState<string | null>(
    subcategory ? subcategory.toString() : null
  );

  const handleUrl = async (data: any) => {
    try {
      const updatedValues =
        filters[labelKey] && includes(filters[labelKey], data[labelKey])
          ? filters[labelKey].filter((value: any) => value !== data[labelKey]) // Remove if exists
          : [...(filters[labelKey] || []), data[labelKey]]; // Add if not exists

      const updated = { ...filters, [labelKey]: updatedValues };
      setFilters(updated);

      await handleProducts(updated);
    } catch (error) {
      console.error("Error updating filters or handling products:", error);
      toast.error(
        "Something went wrong while updating filters. Please try again."
      );
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer ${
          isOpen && "pb-2 border-b"
        }`}
      >
        <h2
          className={`text-lg font-black uppercase ${bigShoulders.className}`}
        >
          {heading}
        </h2>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaAngleUp size={18} />
        </div>
      </div>

      {/* Filter Options with scrollable animation and blurred edges */}
      <div
        className={`overflow-y-auto hide-scrollbar transition-["height"] duration-300 ease-in-out mt-4 space-y-3 ${
          isOpen ? "md:max-h-96 lg:max-h-[33vh]" : "max-h-0"
        }`}
      >
        {options.map((option: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => handleUrl(option)}
              className="flex justify-between cursor-pointer items-center text-gray-800"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={
                    (filters?.[labelKey]?.length > 0 &&
                      option?.[labelKey] &&
                      filters[labelKey].includes(option[labelKey])) ||
                    (option?.menu_id &&
                      subcategoryInput === option?.menu_id.toString())
                  }
                  onChange={(e) => {
                    setSubcategory(e.target.checked ? option?.menu_id : null);
                  }}
                  className="w-4 h-4 border-gray-300 rounded !text-primary focus:ring-primary"
                />
                <span
                  className={`text-sm cursor-pointer ${
                    ((option?.[labelKey] &&
                      filters?.[labelKey]?.length > 0 &&
                      filters[labelKey].includes(option[labelKey])) ||
                      (option?.menu_id &&
                        subcategoryInput === option?.menu_id.toString())) &&
                    "text-primary"
                  }`}
                >
                  {option[labelKey]}
                </span>
              </span>
              <span className="text-sm text-gray-500">
                ({option[countKey] ?? 1})
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
