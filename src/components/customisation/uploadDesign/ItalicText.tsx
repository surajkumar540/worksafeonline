import React, { useState } from "react";

const ItalicButton = ({
  font,
  setSelectedFilters,
}: {
  font: string;
  setSelectedFilters: any;
}) => {
  const [isItalic, setIsItalic] = useState(false);

  const handleToggleItalic = () => {
    const newItalicState = !isItalic;
    setIsItalic(newItalicState);
    setSelectedFilters((prev: any) => ({
      ...prev,
      [font]: newItalicState ? "italic" : "", // Apply italic when true, or reset when false
    }));
  };

  return (
    <div className="mt-4">
      <button
        title="Italic"
        onClick={handleToggleItalic}
        className={`px-3 py-1 italic border rounded ${
          isItalic
            ? "text-white bg-black font-bold"
            : "text-gray-400 bg-white hover:bg-black hover:text-white"
        }`}
      >
        I
      </button>
    </div>
  );
};

export default ItalicButton;
