import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";

const GalleryFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    printEmb: "",
    textLogo: "",
    recentlyUsed: false,
    favorites: false,
    combinationLogos: false,
  });

  const handleFilterChange = (
    key: keyof typeof selectedFilters,
    value: string | boolean
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      printEmb: "",
      textLogo: "",
      recentlyUsed: false,
      favorites: false,
      combinationLogos: false,
    });
  };

  return (
    <div className="mb-5">
      <div className="flex mb-3 justify-between items-center">
        <p className="flex items-center font-extralight text-lg gap-2">
          <span>
            <BsFilterLeft size={25} />
          </span>{" "}
          Filters
        </p>
        {/* Clear All Button */}
        <button
          onClick={clearAllFilters}
          className="px-4 py-1.5 bg-primary text-black text-sm font-medium rounded-md hover:bg-primary/70 transition duration-200"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap">
        {/* Print/Embroidery Filter */}
        <div className="w-1/2 mb-3">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Print/Embroidery
          </label>
          <select
            value={selectedFilters.printEmb}
            onChange={(e) => handleFilterChange("printEmb", e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          >
            <option value="">Select</option>
            <option value="print">Print</option>
            <option value="embroidery">Embroidery</option>
          </select>
        </div>
        {/* Text/Logo Filter */}
        <div className="w-1/2 pl-5 mb-3">
          <label className="block text-left text-sm font-medium text-gray-700 mb-2">
            Text/Logo
          </label>
          <select
            value={selectedFilters.textLogo}
            onChange={(e) => handleFilterChange("textLogo", e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          >
            <option value="">Select</option>
            <option value="text">Text</option>
            <option value="logo">Logo</option>
          </select>
        </div>
        {/* Recently Used */}
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center">
            <input
              id="recentlyUsed"
              type="radio"
              checked={selectedFilters.recentlyUsed}
              onChange={(e) =>
                handleFilterChange("recentlyUsed", e.target.checked)
              }
              className="min-w-5 min-h-5 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="recentlyUsed"
              className="ml-2 text-base font-medium text-gray-700"
            >
              Recently Used
            </label>
          </div>

          {/* Favorites */}
          <div className="flex items-center">
            <input
              id="favorites"
              type="radio"
              checked={selectedFilters.favorites}
              onChange={(e) =>
                handleFilterChange("favorites", e.target.checked)
              }
              className="min-w-5 min-h-5 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="favorites"
              className="ml-2 text-base font-medium text-gray-700"
            >
              Favorites
            </label>
          </div>

          {/* Combination Logos */}
          <div className="flex items-center">
            <input
              id="combinationLogos"
              type="radio"
              checked={selectedFilters.combinationLogos}
              onChange={(e) =>
                handleFilterChange("combinationLogos", e.target.checked)
              }
              className="min-w-5 min-h-5 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="combinationLogos"
              className="ml-2 text-base font-medium text-gray-700"
            >
              Combination Logos
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
