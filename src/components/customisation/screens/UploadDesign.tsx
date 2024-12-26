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
  console.log(handleCustomizeNext);
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
  };

  return (
    <div className="pb-5 w-1/2">
      {customizeData?.imageText?.id === 1 ? (
        <div className="flex w-full flex-col justify-center items-center">
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
        </div>
      ) : (
        <div className="w-full">
          <TextEditor
            product={product}
            selectedFields={selectedFields}
            setSelectedFilters={setSelectedFilters}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-primary uppercase font-semibold transition text-black mt-4 px-8 py-3 w-full rounded-full"
          >
            Upload Data
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadDesign;
