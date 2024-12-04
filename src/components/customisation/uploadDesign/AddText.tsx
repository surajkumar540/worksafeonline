const colors = [
  { name: "Red", value: "#FF0000" },
  { name: "Green", value: "#008000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Cyan", value: "#00FFFF" },
  { name: "Magenta", value: "#FF00FF" },
  { name: "Gray", value: "#808080" },
  { name: "Orange", value: "#FFA500" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Purple", value: "#800080" },
  { name: "Brown", value: "#A52A2A" },
  { name: "Lime", value: "#00FF00" },
  { name: "Gold", value: "#FFD700" },
  { name: "Silver", value: "#C0C0C0" },
  { name: "Teal", value: "#008080" },
  { name: "Maroon", value: "#800000" },
  { name: "Olive", value: "#808000" },
  { name: "Navy", value: "#000080" },
];
const fonts = [
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Helvetica, sans-serif",
  "Tahoma, sans-serif",
  "Trebuchet MS, sans-serif",
  "Times New Roman, serif",
  "Georgia, serif",
  "Courier New, monospace",
  "Palatino, serif",
  "Garamond, serif",
  "Segoe UI, sans-serif",
  "Roboto, sans-serif",
  "Open Sans, sans-serif",
  "Lato, sans-serif",
  "Montserrat, sans-serif",
];

const AddText = ({
  selectedFields,
  setSelectedFilters,
}: {
  selectedFields: any;
  setSelectedFilters: any;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedFilters({ ...selectedFields, [name]: value });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters({ ...selectedFields, color: e.target.value });
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters({ ...selectedFields, font: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-3">
      {/* Color Selector */}
      <p className="font-bold flex justify-start items-center text-xl underline underline-offset-2">
        Add Text Details
      </p>
      <select
        id="color"
        onChange={handleColorChange}
        value={selectedFields?.color}
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
        onChange={handleFontChange}
        value={selectedFields?.font}
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
        maxLength={50}
        name="textLine1"
        onChange={handleInputChange}
        placeholder="Enter Line 1 Text here"
        className="border p-3 rounded-lg outline-none"
      />
      <input
        type="text"
        maxLength={50}
        name="textLine2"
        onChange={handleInputChange}
        placeholder="Enter Line 2 Text here (optional)"
        className="border p-3 rounded-lg outline-none"
      />
      <input
        type="text"
        maxLength={50}
        name="textLine3"
        onChange={handleInputChange}
        placeholder="Enter Line 3 Text here (optional)"
        className="border p-3 rounded-lg outline-none"
      />
    </div>
  );
};

export default AddText;
