import { bigShoulders } from "@/app/layout";
import React, { useState } from "react";

const TextSizeSelector = ({
  hideText,
  size: sizeKey,
  setSelectedFilters,
}: {
  size: string;
  hideText?: boolean;
  setSelectedFilters: any;
}) => {
  const [textSize, setTextSize] = useState("text-[12px]");

  const handleTextSizeChange = (size: string) => {
    setTextSize(size);
    setSelectedFilters((prev: any) => ({ ...prev, [sizeKey]: size }));
  };

  return (
    <div className="relative w-32">
      {!hideText && (
        <h4
          className={`text-left font-bold pt-5 pb-1 text-lg ${bigShoulders.className}`}
        >
          Select Text:
        </h4>
      )}
      <select
        id="text-size"
        value={textSize}
        onChange={(e) => handleTextSizeChange(e.target.value)}
        className="border appearance-none  border-gray-300 text-sm px-3 py-3 rounded-full w-full outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
      >
        <option value="">Select Size</option>
        <option value="text-[12px]">S</option>
        <option value="text-[14px]">M</option>
        <option value="text-[16px]">L</option>
        <option value="text-[18px]">XL</option>
      </select>
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-sm text-black">
        ▼
      </span>
    </div>
  );
};

export default TextSizeSelector;
