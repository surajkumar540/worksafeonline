import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoMdSearch } from "react-icons/io";
import { BsFilterLeft } from "react-icons/bs";

const GalleryFilters = ({
  productID,
  getFilteredResults,
}: {
  productID: any;
  getFilteredResults: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    printEmb: -1,
    preference: 0,
  });
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const handleFilterChange = (
    key: keyof typeof selectedFilters,
    value: string | number
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const params = {
      Style: productID ?? "",
      search: searchText ?? "",
      EmbPrint: selectedFilters.printEmb ?? "",
      RFavMyLogo: selectedFilters.preference ?? "",
    };

    if (params.EmbPrint !== -1) getFilteredResults(params);
    // eslint-disable-next-line
  }, [selectedFilters]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearAllFilters = async () => {
    try {
      setLoading(true);
      setSelectedFilters({
        printEmb: -1,
        preference: 0,
      });
      setSearchText("");
      await getFilteredResults({ Style: productID ?? "", search: "" });
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const params = {
        Style: productID ?? "",
        search: searchText ?? "",
        EmbPrint: selectedFilters.printEmb ?? "",
        RFavMyLogo: selectedFilters.preference ?? "",
      };
      await getFilteredResults(params);
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setLoading(false);
    }
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
            type="button"
            disabled={loading}
            onClick={clearAllFilters}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black text-sm font-medium rounded-md transition"
          >
            Clear All
          </button>
        </div>

        {isAccordionOpen && (
          <div className="mt-4 bg-gray-50 transition rounded-xl p-3 space-y-4">
            <div className="grid grid-cols-5 justify-center items-center gap-5 lg:gap-10">
              <div className="flex col-span-2 justify-between items-center gap-10">
                <div className="relative flex gap-2 items-center w-full">
                  <input
                    type="text"
                    value={searchText}
                    onChange={handleInputChange}
                    placeholder={"Search by name or description..."}
                    className="w-full pl-4 pr-10 text-sm py-3 border text-gray-500 rounded-full outline-none"
                  />
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleSearch}
                    className="flex items-center gap-2 bg-gray-200 py-1.5 px-4 rounded-lg text-lg"
                  >
                    Search{" "}
                    <IoMdSearch
                      size={20}
                      className="text-gray-400 cursor-pointer"
                    />
                  </button>
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
                      checked={selectedFilters.printEmb === 0}
                      onChange={() => handleFilterChange("printEmb", 0)}
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
                      checked={selectedFilters.printEmb === 1}
                      onChange={() => handleFilterChange("printEmb", 1)}
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

              {/* <div>
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
              </div> */}

              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700">
                  Preferences
                </label>
                <div className="flex flex-wrap gap-5 mt-2 justify-center">
                  <div className="flex items-center">
                    <input
                      id="recentlyUsed"
                      type="checkbox"
                      checked={selectedFilters.preference === 1}
                      onChange={() => handleFilterChange("preference", 1)}
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
                      checked={selectedFilters.preference === 2}
                      onChange={() => handleFilterChange("preference", 2)}
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
                      checked={selectedFilters.preference === 3}
                      onChange={() => handleFilterChange("preference", 3)}
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
