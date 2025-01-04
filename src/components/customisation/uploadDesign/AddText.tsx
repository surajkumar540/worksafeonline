import { useRef, useState } from "react";
import SelectColor from "./SelectColor";
import { bigShoulders } from "@/app/layout";
import TextSizeSelector from "./TextSizeSelector";
import CharacterSpacingSelector from "./CharacterSpacingSelector";

const fonts = [
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Verdana", value: "Verdana, sans-serif" },
  { name: "Helvetica", value: "Helvetica, sans-serif" },
  { name: "Tahoma", value: "Tahoma, sans-serif" },
  { name: "Trebuchet MS", value: "'Trebuchet MS', sans-serif" },
  { name: "Times New Roman", value: "'Times New Roman', serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Courier New", value: "'Courier New', monospace" },
  { name: "Palatino", value: "Palatino, serif" },
  { name: "Garamond", value: "Garamond, serif" },
  { name: "Segoe UI", value: "'Segoe UI', sans-serif" },
  { name: "Roboto", value: "Roboto, sans-serif" },
];

interface AddTextProps {
  setSelectedFilters: any;
  selectedFields: Record<string, string | undefined>;
}

const AddText: React.FC<AddTextProps> = ({
  selectedFields,
  setSelectedFilters,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus(); // Focus the next input field
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedFilters((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (hexCode: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, color: hexCode }));
  };

  const handleFontChange = (font: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, font }));
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <div className="flex flex-col space-y-2">
      <SelectColor handleColorChange={handleColorChange} />

      <div className="grid grid-cols-3 items-center gap-2">
        <div>
          <h4
            className={`text-left font-bold pt-5 pb-1 text-lg ${bigShoulders.className}`}
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
              className="border border-gray-200 text-left px-1 py-3 text-sm line-clamp-1 cursor-pointer outline-none focus:ring-2 focus:ring-primary rounded-full"
            >
              {selectedFields?.font || "Select Font"}
            </div>

            {/* Dropdown List */}
            {dropdownOpen && (
              <ul
                className="absolute left-0 top-full mt-1 h-48 overflow-auto w-full border border-gray-300 bg-white shadow-md rounded z-10"
                role="listbox"
              >
                {fonts.map((font) => (
                  <li
                    tabIndex={0}
                    key={font.value}
                    onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                    onClick={() => handleFontChange(font.value)}
                    style={{ fontFamily: font.value }}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  >
                    {font.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <TextSizeSelector setSelectedFilters={setSelectedFilters} />
        <CharacterSpacingSelector setSelectedFilters={setSelectedFilters} />
      </div>

      {/* Text Inputs */}
      <h4
        className={`text-left font-bold pt-3 text-lg ${bigShoulders.className}`}
      >
        Add Text:
      </h4>
      {["textLine1", "textLine2", "textLine3"].map((name, index) => (
        <input
          key={name}
          type="text"
          maxLength={50}
          name={name}
          placeholder={`Enter ${name.replace("textLine", "Line ")} Text here${
            index > 0 ? " (optional)" : ""
          }`}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyPress(e, index)}
          ref={(el: any) => (inputRefs.current[index] = el)} // Assign input ref
          className="border border-gray-200 rounded-full p-3 outline-none"
        />
      ))}
    </div>
  );
};

export default AddText;
