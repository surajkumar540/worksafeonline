import Gallery from "./common/Gallery";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import UploadDesign from "./components/UploadDesign";
import SelectedLogo from "./components/SelectedLogo";
import GalleryFilters from "./components/GalleryFilters";

interface SavedLogosProps {
  localData: any;
  customizeData: any;
  setCustomizeData: React.Dispatch<React.SetStateAction<any>>;
  getFilteredResults: (params: any) => void;
}

const SavedLogos = ({
  localData,
  customizeData,
  setCustomizeData,
  getFilteredResults,
}: SavedLogosProps) => {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [isLogoSelected, setIsLogoSelected] = useState<any>({});

  // Function to show a warning message when trying to select a new design while one is already selected
  const showDeselectWarning = () => {
    toast.warn(
      "To select a new design, please deselect the uploaded image first.",
      { autoClose: 2000 }
    );
  };

  useEffect(() => {
    if (customizeData?.logoDesign?.Item_Code && !customizeData?.designImage)
      setIsLogoSelected(customizeData?.logoDesign);
    if (!isLogoSelected)
      setCustomizeData((prev: any) => ({ ...prev, logoDesign: null }));
  }, [
    customizeData?.logoDesign?.Item_Code,
    isLogoSelected,
    customizeData?.designImage,
  ]);

  // Effect hook to adjust selected option based on customizeData or isLogoSelected
  useEffect(() => {
    if (customizeData?.designImage) {
      setIsLogoSelected({});
      setSelectedOption(2);
    } else if (!customizeData?.designImage && isLogoSelected?.Item_Code) {
      setSelectedOption(1);
    }
  }, [customizeData?.designImage, isLogoSelected?.Item_Code]);

  // Handles the selection of Option 1
  const handleSelectedOption1 = () => {
    if (customizeData.designImage) return showDeselectWarning();
    setSelectedOption(1);
  };

  // Handles the selection of Option 2
  const handleSelectedOption2 = () => {
    if (selectedOption === 1 && customizeData?.designImage)
      setSelectedOption(2);
  };

  return (
    <>
      {/* Gallery Filters */}
      <GalleryFilters
        getFilteredResults={getFilteredResults}
        productID={customizeData.ProductID}
      />
      <div className="flex items-start my-5 justify-between gap-8">
        <div onClick={handleSelectedOption1} className="w-3/5">
          {/* Gallery (SAVED LOGOS) */}
          <Gallery
            field="logo"
            localData={localData}
            isLogoSelected={isLogoSelected}
            selectedOption={selectedOption}
            setCustomizeData={setCustomizeData}
          />
        </div>
        <div
          onClick={handleSelectedOption2}
          className={`w-2/5 border-4 p-5 rounded-2xl ${
            selectedOption === 2 ? "border-green-500" : "border-gray-100"
          }`}
        >
          <div className="flex text-2xl uppercase font-semibold items-center justify-center mb-6">
            <span
              className={`border border-green-500 text-xl text-green-500 px-2 p-0.5 rounded-md ${bigShoulders.className}`}
            >
              Option 2
            </span>
            <span className={`px-2 text-black ${bigShoulders.className}`}>
              - UPLOAD NEW LOGO
            </span>
          </div>
          <UploadDesign
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
          />
          {isLogoSelected?.Item_Code && !customizeData.designImage && (
            <SelectedLogo
              isLogoSelected={isLogoSelected}
              setIsLogoSelected={setIsLogoSelected}
            />
          )}
          <div className="pt-5">
            <textarea
              rows={4}
              onChange={(e) =>
                setCustomizeData((prev: any) => ({
                  ...prev,
                  logoDescription: e.target.value,
                }))
              }
              value={customizeData.logoDescription ?? ""}
              className={`w-full border border-gray-300 text-sm rounded-lg p-3 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 resize-none ${bigShoulders.className}`}
              placeholder="Add Notes (optional)..."
            />
            <p className="text-xs text-left text-gray-400">
              Disclaimer: {localData?.modalData?.LogoColourDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedLogos;
