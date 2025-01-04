import { bigShoulders } from "@/app/layout";
import React, { useState } from "react";

const TextSizeSelector = ({
  setSelectedFilters,
}: {
  setSelectedFilters: any;
}) => {
  const [textSize, setTextSize] = useState("text-[12px]");

  const handleTextSizeChange = (size: string) => {
    setTextSize(size);
    setSelectedFilters((prev: any) => ({ ...prev, textSize: size }));
  };

  return (
    <div>
      <h4
        className={`text-left font-bold pt-5 pb-1 text-lg ${bigShoulders.className}`}
      >
        Select Text:
      </h4>
      <select
        id="text-size"
        value={textSize}
        onChange={(e) => handleTextSizeChange(e.target.value)}
        className="border border-gray-200 text-sm px-2 py-3.5 rounded-full w-full outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select Text Size</option>
        <option value="text-[10px]">10px</option>
        <option value="text-[12px]">12px</option>
        <option value="text-[14px]">14px</option>
        <option value="text-[16px]">16px</option>
        <option value="text-[18px]">18px</option>
        <option value="text-[20px]">20px</option>
        <option value="text-[22px]">22px</option>
        <option value="text-[24px]">24px</option>
        <option value="text-[26px]">26px</option>
        <option value="text-[28px]">28px</option>
      </select>
    </div>
  );
};

export default TextSizeSelector;
