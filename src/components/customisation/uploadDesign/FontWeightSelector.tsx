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
    <div>
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
        className="border border-gray-300 text-sm px-2 py-3.5 rounded-full w-full outline-none focus:ring-2 focus:ring-primary"
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
    </div>
  );
};

export default FontWeightSelector;
