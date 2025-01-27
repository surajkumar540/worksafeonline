import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoMdSearch } from "react-icons/io";
import { BsFilterLeft } from "react-icons/bs";
const GalleryFilters = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    printEmb: "",
    textLogo: "",
    recentlyUsed: false,
    favorites: false,
    combinationLogos: false,
  });
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const handleFilterChange = (
    key: keyof typeof selectedFilters,
    value: string | boolean
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // const handleSearch = () => {
  //   console.log("Filters applied:", selectedFilters);
    // Perform search or filter logic
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
    <div className={`mb-5 mt-1 ${bigShoulders.className}`}>
      <div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setAccordionOpen(!isAccordionOpen)}
            className={`flex items-center gap-2 p-2 bg-gray-200 rounded-md text-sm font-bold uppercase text-gray-700 hover:bg-gray-300 transition ${bigShoulders.className}`}
          >
            <BsFilterLeft size={20} />
            {isAccordionOpen ? "Hide" : "Show"} Filters
          </button>
          <button
            onClick={clearAllFilters}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black text-sm font-medium rounded-md transition"
          >
            Clear All
          </button>
        </div>

        {isAccordionOpen && (
          <div className="mt-4 bg-gray-50 rounded-xl p-3 space-y-4">
            <div className="grid grid-cols-5 justify-center items-center">
              <div className="flex justify-between items-center gap-5">
                <div className="relative hidden w-full lg:block">
                  <input
                    type="text"
                    value={searchText}
                    // autoFocus={searchBar}
                    onChange={handleInputChange}
                    placeholder={"Search by name or description..."}
                    className="w-full pl-4 pr-10 text-sm py-3 border text-gray-500 rounded-full outline-none"
                  />
                  <IoMdSearch
                    size={20}
                    className="absolute right-2 top-3 text-gray-400 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Print / Embroidery
                </label>
                <div className="flex gap-5 mt-2 justify-center">
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
                      onChange={() =>
                        handleFilterChange("printEmb", "embroidery")
                      }
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

              <div>
                <label className="block text-sm font-bold text-gray-700">
                  Text / Logo
                </label>
                <div className="flex gap-5 mt-2 justify-center">
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
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700">
                  Preferences
                </label>
                <div className="flex flex-wrap gap-5 mt-2 justify-center">
                  <div className="flex items-center">
                    <input
                      id="recentlyUsed"
                      type="checkbox"
                      checked={selectedFilters.recentlyUsed}
                      onChange={(e) =>
                        handleFilterChange("recentlyUsed", e.target.checked)
                      }
                      className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
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
                      type="checkbox"
                      checked={selectedFilters.favorites}
                      onChange={(e) =>
                        handleFilterChange("favorites", e.target.checked)
                      }
                      className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
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
                      type="checkbox"
                      checked={selectedFilters.combinationLogos}
                      onChange={(e) =>
                        handleFilterChange("combinationLogos", e.target.checked)
                      }
                      className="text-primary focus:ring-primary min-w-5 min-h-5 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="combinationLogos"
                      className="ml-2 text-sm font-medium text-gray-800"
                    >
                      My Logos
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryFilters;
