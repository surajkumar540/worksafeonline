import { useState, useEffect } from "react";

interface SizeSelectorProps {
  logoPosition: any;
}

const SizeSelector = ({ logoPosition }: SizeSelectorProps) => {
  const availableSizes = ["small", "medium", "large"];
  const [selectedSize, setSelectedSize] = useState("medium");

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {
    setSelectedSize("medium");
  }, [logoPosition]);

  return (
    <div className="w-full text-left mt-5 mx-auto">
      <h2 className="text-xl text-center font-semibold mb-2">Select Size</h2>
      <div className="flex justify-center">
        {availableSizes.map((size) => (
          <label
            key={size}
            className="flex flex-col space-y-3 w-1/3 p-2 text-center"
          >
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
              className="min-w-6 min-h-6 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-xs font-normal flex flex-col">
              <strong className="text-lg pb-1 font-semibold">
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </strong>
              {size === "small" && "Ideal for most embroidered logos."}
              {size === "medium" &&
                "Perfect balance for size, clarity and impact."}
              {size === "large" && "Great value for large printed designs."}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
