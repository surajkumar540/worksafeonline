import { useState } from "react";

const colors = [
  { name: "Red", value: "#FF0000" },
  { name: "Green", value: "#00FF00" },
  { name: "Blue", value: "#0000FF" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
];

const fonts = ["Arial", "Verdana", "Courier New", "Times New Roman", "Georgia"];

const AddText = ({
  setText,
}: {
  setText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("#000000");
  const [selectedFont, setSelectedFont] = useState<string>("Arial");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "textline1") setText(value);
    else setText((prevText: string) => `${prevText}\n${e.target.value}`);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-3">
      {/* Color Selector */}
      <p className="font-bold flex justify-start items-center text-xl underline underline-offset-2">
        Add Text Details
      </p>
      <select
        id="color"
        value={selectedColor}
        onChange={handleColorChange}
        className="border p-3 rounded-lg outline-none"
      >
        <option value="">Select Color</option>
        {colors.map((color) => (
          <option key={color.value} value={color.value}>
            {color.name}
          </option>
        ))}
      </select>

      {/* Font Selector */}
      <select
        id="font"
        value={selectedFont}
        onChange={handleFontChange}
        className="border p-3 rounded-lg outline-none"
      >
        <option value="">Select Font</option>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      {/* Text Inputs */}
      <input
        type="text"
        name="textline1"
        placeholder="Enter Line 1 Text here"
        className="border p-3 rounded-lg outline-none"
        style={{ color: selectedColor, fontFamily: selectedFont }}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="textline2"
        placeholder="Enter Line 2 Text here (optional)"
        className="border p-3 rounded-lg outline-none"
        style={{ color: selectedColor, fontFamily: selectedFont }}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="textline3"
        placeholder="Enter Line 3 Text here (optional)"
        className="border p-3 rounded-lg outline-none"
        style={{ color: selectedColor, fontFamily: selectedFont }}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AddText;
