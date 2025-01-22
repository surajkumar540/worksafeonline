import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoAddOutline } from "react-icons/io5";

const colorsData = [
  { name: "Red", value: "#FF0000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Cyan", value: "#00FFFF" },
  { name: "Lime", value: "#00FF00" },
  { name: "Navy", value: "#000080" },
  { name: "Black", value: "#000000" },
  { name: "Green", value: "#008000" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Orange", value: "#FFA500" },
  { name: "Purple", value: "#800080" },
  { name: "Magenta", value: "#FF00FF" },
];

const SelectColor = ({
  modalData,
  handleColorChange,
}: {
  modalData: any;
  handleColorChange: any;
}) => {
  const [colors, setColors] = useState(colorsData);
  const [newColor, setNewColor] = useState("#000000");
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h4
        className={`text-left font-bold pb-2 text-lg ${bigShoulders.className}`}
      >
        Choose Colour:
      </h4>
      <div className="flex flex-wrap gap-2">
        {colors.map((color: any) => {
          const isSelected = selectedColor === color.value;
          return (
            <div
              key={color.value}
              onClick={() => {
                setSelectedColor(color.value);
                handleColorChange(color.value);
              }}
              style={{
                boxShadow: !isSelected
                  ? "0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.2)"
                  : "",
              }}
              className="relative group cursor-pointer rounded-full"
            >
              <div
                className={`w-9 h-9 transition-all duration-200 ease-linear rounded-full ${
                  isSelected
                    ? "p-[2px] border-2 border-black/80"
                    : "p-0 border-none"
                }`}
              >
                <div
                  className={`w-full h-full rounded-full overflow-hidden`}
                  style={{ backgroundColor: color?.value }}
                ></div>
              </div>
              <span className="hidden group-hover:block absolute -top-5 left-5 bg-white font-normal px-4 py-1 rounded z-20 border text-sm">
                {color?.name}
              </span>
            </div>
          );
        })}

        {/* Add new color section */}
        <div className="relative group cursor-pointer">
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300 transition-colors">
            {/* Color Picker Input */}
            <input
              type="color"
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              className="absolute top-0 left-0 w-9 h-9 opacity-0 cursor-pointer"
            />
            <span title="Add Color" className="text-xl text-black font-bold">
              <IoAddOutline />
            </span>

            <p className="text-xs group-hover:block hidden absolute top-10 left-0 w-40 bg-white border rounded-lg p-2 shadow-md text-left text-gray-600">
              Disclaimer: {modalData?.TextColourDisclaimer}
            </p>
          </div>

          {/* Color Picker with Add Button */}
          {newColor && !colors.some((color) => color.value === newColor) && (
            <div className="absolute top-12 left-0 z-30">
              <button
                onClick={() => {
                  setColors([...colors, { name: newColor, value: newColor }]);
                  setSelectedColor(newColor);
                  handleColorChange(newColor);
                }}
                className="w-full whitespace-nowrap text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                + Add
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
