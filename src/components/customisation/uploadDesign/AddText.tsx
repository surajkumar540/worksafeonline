import SelectColor from "./SelectColor";
import { bigShoulders } from "@/app/layout";

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

  // const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedFilters({ ...selectedFields, color: e.target.value });
  // };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters({ ...selectedFields, font: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className={`${bigShoulders.className} text-3xl font-black`}>
        Add
        <span className="text-primary"> Text</span> Details
      </p>
      <SelectColor />

      {/* Font Selector */}
      <select
        id="font"
        onChange={handleFontChange}
        value={selectedFields?.font}
        className="border-b border-b-gray-600 py-3 outline-none"
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
        className="border-b border-b-gray-600 py-3 outline-none"
      />
      <input
        type="text"
        maxLength={50}
        name="textLine2"
        onChange={handleInputChange}
        placeholder="Enter Line 2 Text here (optional)"
        className="border-b border-b-gray-600 py-3 outline-none"
      />
      <input
        type="text"
        maxLength={50}
        name="textLine3"
        onChange={handleInputChange}
        placeholder="Enter Line 3 Text here (optional)"
        className="border-b border-b-gray-600 py-3 outline-none"
      />
    </div>
  );
};

export default AddText;
