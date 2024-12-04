import { useState } from "react";
import ImageUploader from "../uploadDesign/ImageUploader";
import TextEditor from "../uploadDesign/TextEditor";

const UploadDesign = ({
  product,
  customizeData,
  setCustomizeData,
  handleCustomizeNext,
}: {
  product: any;
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    customizeData?.designImage ?? null
  );
  const [selectedFields, setSelectedFilters] = useState({
    font: "Arial, sans-serif",
    color: "#000000",
    textLine1: "",
    textLine2: "",
    textLine3: "",
  });
  const handleProceed = () => {
    setCustomizeData({ ...customizeData, designImage: selectedImage });
    handleCustomizeNext();
  };
  const handleSubmit = () => {
    setCustomizeData({
      ...customizeData,
      addtext: selectedFields,
    });
    handleCustomizeNext();
  };

  return (
    <div className="pb-5">
      {customizeData?.imageText?.id === 1 ? (
        <>
          <ImageUploader
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          {selectedImage && !customizeData?.designImage && (
            <button
              type="button"
              onClick={handleProceed}
              className="bg-blue-500 text-white mt-4 px-6 py-2 rounded-md"
            >
              Upload logo
            </button>
          )}
        </>
      ) : (
        <>
          <TextEditor
            product={product}
            selectedFields={selectedFields}
            setSelectedFilters={setSelectedFilters}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white mt-4 px-6 py-2 rounded-md"
          >
            Upload Data
          </button>
        </>
      )}
    </div>
  );
};

export default UploadDesign;
