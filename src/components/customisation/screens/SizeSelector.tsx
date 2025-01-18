import { useState } from "react";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("medium");

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="w-full text-left mt-5 mx-auto">
      <h2 className="text-xl text-center font-semibold mb-2">Select Size</h2>

      <div className="flex justify-center">
        {/* Small */}
        <label className="flex flex-col space-y-3 w-1/3 p-2 text-center">
          <input
            type="radio"
            name="size"
            value="small"
            checked={selectedSize === "small"}
            onChange={handleSizeChange}
            className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-xs font-normal flex flex-col">
            <strong className="text-lg pb-1 font-semibold">Small</strong> Ideal
            for most embroidered logos.
          </span>
        </label>

        {/* Medium */}
        <label className="flex flex-col space-y-3 w-1/3 p-2 text-center">
          <input
            type="radio"
            name="size"
            value="medium"
            checked={selectedSize === "medium"}
            onChange={handleSizeChange}
            className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-xs font-normal flex flex-col">
            <strong className="text-lg pb-1 font-semibold">Medium</strong>{" "}
            Perfect balance for size, clarity and impact.
          </span>
        </label>

        {/* Large */}
        <label className="flex flex-col space-y-3 w-1/3 p-2 text-center">
          <input
            type="radio"
            name="size"
            value="large"
            checked={selectedSize === "large"}
            onChange={handleSizeChange}
            className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-xs font-normal flex flex-col">
            <strong className="text-lg pb-1 font-semibold">Large</strong> Great
            value for large printed designs.
          </span>
        </label>
      </div>
    </div>
  );
};

export default SizeSelector;
