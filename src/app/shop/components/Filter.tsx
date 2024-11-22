"use client";

import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { bigShoulders } from "@/app/layout";
import { buildQueryUrl } from "@/api/generalApi";

interface FilterProps {
  heading: string;
  labelKey: string;
  countKey: string;
  category: number;
  subcategory: number;
  options: Array<Record<string, any>>;
}

const Filter = ({
  heading,
  options,
  labelKey,
  countKey,
  category,
  subcategory,
}: FilterProps) => {
  console.log(subcategory);
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleUrl = (data: any) => {
    if (data.menu_id) {
      const queryParams = {
        category,
        subcategory: data.menu_id,
      };
      const url = buildQueryUrl("/shop", queryParams);
      if (url) return navigate.push(url);
    }
  };

  return (
    <div className="w-full">
      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer pb-2 border-b"
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
        className={`overflow-y-auto hide-scrollbar transition-all duration-300 ease-in-out mt-4 space-y-3`}
        style={{
          maxHeight: isOpen ? "33vh" : "0px",
          transitionProperty: "max-height",
        }}
      >
        {options.map((option: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center text-gray-800"
            >
              <span
                className="flex items-center gap-2"
                onClick={() => handleUrl(option)}
              >
                <input
                  type="checkbox"
                  checked={
                    subcategory && subcategory == option?.menu_id ? true : false
                  }
                  className="w-4 h-4 border-gray-300 rounded focus:ring-primary"
                />
                <span
                  className={`${
                    subcategory &&
                    subcategory == option?.menu_id &&
                    "text-primary"
                  } text-sm cursor-pointer`}
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
