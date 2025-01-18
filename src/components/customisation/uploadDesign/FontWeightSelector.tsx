import React, { useState } from "react";
import { bigShoulders } from "@/app/layout";

const FontWeightSelector = ({
  font,
  hideText,
  setSelectedFilters,
}: {
  font: string;
  hideText?: boolean;
  setSelectedFilters: any;
}) => {
  const [fontWeight, setFontWeight] = useState("font-normal");

  const handleFontWeightChange = (weight: string) => {
    setFontWeight(weight);
    setSelectedFilters((prev: any) => ({ ...prev, [font]: weight }));
  };

  return (
    <div className="relative">
      {!hideText && (
        <h4
          className={`text-left font-bold pt-5 pb-1 text-lg ${bigShoulders.className}`}
        >
          Select Font Weight:
        </h4>
      )}
      <select
        id="font-weight"
        value={fontWeight}
        onChange={(e) => handleFontWeightChange(e.target.value)}
        className="border appearance-none border-gray-300 text-sm px-3 py-3 rounded-full w-full outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
      >
        <option value="">Select Font Weight</option>
        <option value="font-thin">Thin</option>
        <option value="font-extralight">Extra Light</option>
        <option value="font-light">Light</option>
        <option value="font-normal">Normal</option>
        <option value="font-medium">Medium</option>
        <option value="font-semibold">Semi-Bold</option>
        <option value="font-bold">Bold</option>
        <option value="font-extrabold">Extra Bold</option>
        <option value="font-black">Black</option>
      </select>
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-sm text-black">
        ▼
      </span>
    </div>
  );
};

export default FontWeightSelector;
