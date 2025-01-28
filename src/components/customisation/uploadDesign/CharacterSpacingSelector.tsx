import React, { useState } from "react";

const CharacterSpacingSelector = ({
  space,
  setSelectedFilters,
}: {
  space: string;
  setSelectedFilters: any;
}) => {
  const spacingOptions = [
    "tracking-tighter",
    "tracking-tight",
    "tracking-normal",
    "tracking-wide",
    "tracking-wider",
    "tracking-widest",
  ];

  const [characterSpacingIndex, setCharacterSpacingIndex] = useState(2); // Default to "Normal"

  const handleSliderChange = (index: number) => {
    setCharacterSpacingIndex(index);
    setSelectedFilters((prev: any) => ({
      ...prev,
      [space]: spacingOptions[index],
    }));
  };

  return (
    <>
      <p className="text-xs font-semibold text-left">Spacing</p>
      <input
        min="0"
        type="range"
        max={spacingOptions.length - 1}
        value={characterSpacingIndex}
        onChange={(e) => handleSliderChange(Number(e.target.value))}
        className="w-full appearance-none rounded-lg bg-gray-200 outline-none range-input"
      />
    </>
  );
};

export default CharacterSpacingSelector;
