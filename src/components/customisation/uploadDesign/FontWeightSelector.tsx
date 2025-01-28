import React, { useState } from "react";

const FontWeightSelector = ({
  font,
  setSelectedFilters,
}: {
  font: string;
  setSelectedFilters: any;
}) => {
  const fontWeightOptions = [
    "font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
  ];

  const [fontWeightIndex, setFontWeightIndex] = useState(3); // Default to "Normal"

  const handleSliderChange = (index: number) => {
    setFontWeightIndex(index);
    setSelectedFilters((prev: any) => ({
      ...prev,
      [font]: fontWeightOptions[index],
    }));
  };

  return (
    <>
      <p className="text-xs font-semibold mt-2 text-left">Bold (B)</p>
      <input
        min="0"
        type="range"
        max={fontWeightOptions.length - 1}
        value={fontWeightIndex}
        onChange={(e) => handleSliderChange(Number(e.target.value))}
        className="w-full appearance-none rounded-lg bg-gray-200 outline-none range-input"
      />
    </>
  );
};

export default FontWeightSelector;
