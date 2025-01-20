import React, { useState } from "react";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

const TextAlignButtons = ({
  setSelectedFilters,
  font,
}: {
  setSelectedFilters: any;
  font: string;
}) => {
  const [selectedAlignment, setSelectedAlignment] = useState("text-center");

  const handleAlignmentChange = (alignment: string) => {
    setSelectedAlignment(alignment);
    setSelectedFilters((prev: any) => ({
      ...prev,
      [font]: alignment,
    }));
  };

  return (
    <div className="flex space-x-1">
      <button
        onClick={() => handleAlignmentChange("text-left")}
        className={`p-1.5 rounded border-[0.5px] text-sm ${
          selectedAlignment === "text-left"
            ? "text-white bg-black border-black font-bold"
            : "text-gray-500 bg-white hover:bg-black hover:border-black hover:text-white"
        }`}
      >
        <FaAlignLeft />
      </button>
      <button
        onClick={() => handleAlignmentChange("text-center")}
        className={`p-1.5 rounded border-[0.5px] text-sm ${
          selectedAlignment === "text-center"
            ? "text-white bg-black border-black font-bold"
            : "text-gray-500 bg-white hover:bg-black hover:border-black hover:text-white"
        }`}
      >
        <FaAlignCenter />
      </button>
      <button
        onClick={() => handleAlignmentChange("text-right")}
        className={`p-1.5 rounded border-[0.5px] text-sm ${
          selectedAlignment === "text-right"
            ? "text-white bg-black border-black font-bold"
            : "text-gray-500 bg-white border hover:bg-black hover:border-black hover:text-white"
        }`}
      >
        <FaAlignRight />
      </button>
    </div>
  );
};

export default TextAlignButtons;
