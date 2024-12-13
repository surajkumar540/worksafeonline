import { useState } from "react";
import { toast } from "react-toastify";
import TextEditor from "../uploadDesign/TextEditor";
import ImageUploader from "../uploadDesign/ImageUploader";

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
    // handleCustomizeNext();
  };
  const handleSubmit = () => {
    if (!selectedFields?.font) return toast.info("Please select a font!");
    if (!selectedFields?.color) return toast.info("Please select a color!");
    if (!selectedFields?.textLine1)
      return toast.info("Please add a text in line 1!");

    setCustomizeData({
      ...customizeData,
      addtext: selectedFields,
    });
    // handleCustomizeNext();
  };

  console.log(handleCustomizeNext);

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
