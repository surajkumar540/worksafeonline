import React, { useState } from "react";
import { bigShoulders } from "@/app/layout";

const CharacterSpacingSelector = ({
  space,
  hideText,
  setSelectedFilters,
}: {
  space: string;
  hideText?: boolean;
  setSelectedFilters: any;
}) => {
  const [characterSpacing, setCharacterSpacing] = useState("tracking-normal");

  const handleCharacterSpacingChange = (spacing: string) => {
    setCharacterSpacing(spacing);
    setSelectedFilters((prev: any) => ({ ...prev, [space]: spacing }));
  };

  return (
    <div className="relative">
      {!hideText && (
        <h4
          className={`text-left font-bold pt-5 pb-1 text-lg ${bigShoulders.className}`}
        >
          Select Spacing:
        </h4>
      )}
      <select
        id="character-spacing"
        value={characterSpacing}
        onChange={(e) => handleCharacterSpacingChange(e.target.value)}
        className="border appearance-none border-gray-300 text-sm px-3 py-3 rounded-full w-full outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
      >
        <option value="">Select Spacing</option>
        <option value="tracking-tighter">Tighter</option>
        <option value="tracking-tight">Tight</option>
        <option value="tracking-normal">Normal</option>
        <option value="tracking-wide">Wide</option>
        <option value="tracking-wider">Wider</option>
        <option value="tracking-widest">Widest</option>
      </select>
      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-sm text-black">
        ▼
      </span>
    </div>
  );
};

export default CharacterSpacingSelector;
