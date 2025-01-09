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
      <div className="space-y-4 bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between gap-10 items-start">
          <p
            className={`flex text-sm uppercase items-center font-black text-gray-700 gap-2 ${bigShoulders.className}`}
          >
            <span>
              <BsFilterLeft size={20} />
            </span>
            Filters
          </p>
          {/* Print/Embroidery Filter */}
          <div className="">
            <label
              className={`block text-sm text-center font-black uppercase text-gray-700 mb-2 ${bigShoulders.className}`}
            >
              Print/Embroidery
            </label>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  id="print"
                  type="radio"
                  value="print"
                  checked={selectedFilters.printEmb === "print"}
                  onChange={() => handleFilterChange("printEmb", "print")}
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="print"
                  className="ml-1 text-sm font-medium text-gray-800"
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
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="embroidery"
                  className="ml-1 text-sm font-medium text-gray-800"
                >
                  Embroidery
                </label>
              </div>
            </div>
          </div>
          {/* Text/Logo Filter */}
          {/* <div className="">
            <label
              className={`block text-sm text-center font-black uppercase text-gray-700 mb-2 ${bigShoulders.className}`}
            >
              Text/Logo
            </label>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  id="text"
                  type="radio"
                  value="text"
                  checked={selectedFilters.textLogo === "text"}
                  onChange={() => handleFilterChange("textLogo", "text")}
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="text"
                  className="ml-1 text-sm font-medium text-gray-800"
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
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="logo"
                  className="ml-1 text-sm font-medium text-gray-800"
                >
                  Logo
                </label>
              </div>
            </div>
          </div> */}
          {/* Recently Used, Favorites, Combination Logos */}
          <div>
            <label
              className={`block text-sm text-center font-black uppercase text-gray-700 mb-2 ${bigShoulders.className}`}
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
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="recentlyUsed"
                  className="ml-1 text-sm font-medium text-gray-800"
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
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="favorites"
                  className="ml-1 text-sm font-medium text-gray-800"
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
                  className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="combinationLogos"
                  className="ml-1 text-sm font-medium text-gray-800"
                >
                  My Logos
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={clearAllFilters}
            className="px-2 py-1 hover:bg-black border border-black hover:text-white text-black text-sm font-medium rounded-md transition"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
