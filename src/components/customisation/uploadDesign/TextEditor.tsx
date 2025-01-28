import AddText from "./AddText";
import { useEffect, useState } from "react";
import TextGalleryFilters from "../screens/TextGalleryFilters";

const TextEditor = ({
  fonts,
  colors,
  modalData,
  savedTexts,
  customizeData,
  setCustomizeData,
  getFilteredResults,
}: {
  fonts: any;
  colors: any;
  modalData: any;
  savedTexts: any;
  customizeData: any;
  setCustomizeData: any;
  getFilteredResults: any;
}) => {
  const [selectedFields, setSelectedFilters] = useState({
    spacing1: "",
    spacing2: "",
    spacing3: "",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    fontStyle1: "",
    fontStyle2: "",
    fontStyle3: "",
    textAlign1: "",
    textAlign2: "",
    textAlign3: "",
    fontWeight1: "",
    fontWeight2: "",
    fontWeight3: "",
    color: "#000000",
    textSize1: "text-[12px]",
    textSize2: "text-[12px]",
    textSize3: "text-[12px]",
    font: "Arial, sans-serif",
  });

  useEffect(() => {
    setCustomizeData((prev: any) => ({ ...prev, addtext: selectedFields }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFields]);

  return (
    <>
      <TextGalleryFilters
        productID={customizeData.ProductID}
        getFilteredResults={getFilteredResults}
      />
      <div className="flex justify-center items-start w-full mx-auto mb-5 gap-10">
        <AddText
          fonts={fonts}
          colors={colors}
          modalData={modalData}
          savedTexts={savedTexts}
          selectedFields={selectedFields}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </>
  );
};

export default TextEditor;
