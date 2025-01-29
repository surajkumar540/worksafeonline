import { bigShoulders } from "@/app/layout";
import React, { useState } from "react";

// Define types for the props
interface FontSelectorProps {
  localData: {
    textFontFamily: { FontFamily: string }[]; // assuming textFontFamily is an array of objects with FontFamily as string
  };
  updateForm: any;
  selectedFields: any;
}

const FontSelector = ({
  localData,
  updateForm,
  selectedFields,
}: FontSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // Ensure dropdownOpen is typed as boolean

  const handleFontChange = (font: string): void => {
    updateForm("textLine1", "FontFamily", font);
    updateForm("textLine2", "FontFamily", font);
    updateForm("textLine3", "FontFamily", font);
    setDropdownOpen(false);
  };

  return (
    <div className="grid grid-cols-4 items-center gap-2">
      <div className="col-span-4 flex justify-between mt-5 items-center gap-2">
        <h4
          className={`text-left font-bold whitespace-nowrap text-lg ${bigShoulders.className}`}
        >
          Select font:
        </h4>
        <div className="relative w-full">
          {/* Trigger Button */}
          <div
            tabIndex={0}
            onClick={() => setDropdownOpen((prev) => !prev)}
            onBlur={() => setDropdownOpen(false)}
            aria-expanded={dropdownOpen}
            className="border border-gray-300 text-left px-3 py-2 text-sm line-clamp-1 cursor-pointer outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full"
          >
            {selectedFields?.textLine1?.FontFamily || "Select Font"}
          </div>

          {/* Dropdown List */}
          {dropdownOpen && (
            <ul
              className="absolute left-0 top-full mt-1 h-48 overflow-auto w-full border border-gray-300 bg-white shadow-md rounded z-10"
              role="listbox"
            >
              {localData.textFontFamily.map((font) => (
                <li
                  tabIndex={0}
                  key={font.FontFamily}
                  onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                  onClick={() => handleFontChange(font.FontFamily)}
                  style={{ fontFamily: font.FontFamily }}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                >
                  {font.FontFamily}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FontSelector;
