import { bigShoulders } from "@/app/layout";
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
          </span>
          Filters
        </p>
        <button
          onClick={clearAllFilters}
          className="px-4 py-1.5 bg-primary text-black text-sm font-medium rounded-md hover:bg-primary/70 transition duration-200"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-4 bg-gray-50 rounded-xl p-4">
        <div className="flex justify-evenly items-center">
          {/* Print/Embroidery Filter */}
          <div className="">
            <label
              className={`block text-center font-black uppercase text-gray-700 mb-2 ${bigShoulders.className}`}
            >
              Print/Embroidery
            </label>
            <div className="flex gap-10">
              <div className="flex items-center">
                <input
                  id="print"
                  type="radio"
                  value="print"
                  checked={selectedFilters.printEmb === "print"}
                  onChange={() => handleFilterChange("printEmb", "print")}
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="print"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Print
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="embroidery"
                  type="radio"
                  value="embroidery"
                  checked={selectedFilters.printEmb === "embroidery"}
                  onChange={() => handleFilterChange("printEmb", "embroidery")}
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="embroidery"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Embroidery
                </label>
              </div>
            </div>
          </div>
          {/* Text/Logo Filter */}
          <div className="">
            <label
              className={`block text-center font-black uppercase text-gray-700 mb-2 ${bigShoulders.className}`}
            >
              Text/Logo
            </label>
            <div className="flex gap-10">
              <div className="flex items-center">
                <input
                  id="text"
                  type="radio"
                  value="text"
                  checked={selectedFilters.textLogo === "text"}
                  onChange={() => handleFilterChange("textLogo", "text")}
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="text"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Text
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="logo"
                  type="radio"
                  value="logo"
                  checked={selectedFilters.textLogo === "logo"}
                  onChange={() => handleFilterChange("textLogo", "logo")}
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="logo"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Logo
                </label>
              </div>
            </div>
          </div>
          {/* Recently Used, Favorites, Combination Logos */}
          <div>
            <label
              className={`block text-center font-black uppercase text-gray-700 mb-2 ${bigShoulders.className}`}
            >
              Preferences
            </label>
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center">
                <input
                  id="recentlyUsed"
                  type="radio"
                  checked={selectedFilters.recentlyUsed}
                  onChange={(e) =>
                    handleFilterChange("recentlyUsed", e.target.checked)
                  }
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="recentlyUsed"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Recently Used
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="favorites"
                  type="radio"
                  checked={selectedFilters.favorites}
                  onChange={(e) =>
                    handleFilterChange("favorites", e.target.checked)
                  }
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="favorites"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Favorites
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="combinationLogos"
                  type="radio"
                  checked={selectedFilters.combinationLogos}
                  onChange={(e) =>
                    handleFilterChange("combinationLogos", e.target.checked)
                  }
                  className="text-primary focus:ring-primary min-w-6 min-h-6 border-gray-300 rounded"
                />
                <label
                  htmlFor="combinationLogos"
                  className="ml-2 text-sm font-medium text-gray-800"
                >
                  Combination Logos
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
