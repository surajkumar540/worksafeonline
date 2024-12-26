import { useState } from "react";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("medium");

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="w-full text-left mt-5 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Select Size</h2>

      <div className="space-y-2">
        {/* Small */}
        <label className="flex space-x-3 justify-start items-start">
          <input
            type="radio"
            name="size"
            value="small"
            checked={selectedSize === "small"}
            onChange={handleSizeChange}
            className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="">
            <strong>Small</strong> - Best for compact designs.
          </span>
        </label>

        {/* Medium */}
        <label className="flex space-x-3 justify-start items-start">
          <input
            type="radio"
            name="size"
            value="medium"
            checked={selectedSize === "medium"}
            onChange={handleSizeChange}
            className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="">
            <strong>Medium</strong> - Perfect balance of size and clarity.
          </span>
        </label>

        {/* Large */}
        <label className="flex space-x-3 justify-start items-start">
          <input
            type="radio"
            name="size"
            value="large"
            checked={selectedSize === "large"}
            onChange={handleSizeChange}
            className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="">
            <strong>Large</strong> - Ideal for bold and prominent designs.
          </span>
        </label>
      </div>

      <p className="mt-4 text-gray-700">
        Selected Size:{" "}
        <strong>
          {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}
        </strong>
      </p>
    </div>
  );
};

export default SizeSelector;
