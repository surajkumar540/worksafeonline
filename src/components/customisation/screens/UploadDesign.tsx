import { useState } from "react";
import ImageUploader from "../uploadDesign/ImageUploader";
import TextEditor from "../uploadDesign/TextEditor";

const UploadDesign = ({
  customizeData,
  setCustomizeData,
  handleCustomizeNext,
}: {
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    customizeData?.designImage ?? null
  );
  const handleProceed = () => {
    setCustomizeData({ ...customizeData, designImage: selectedImage });
    // handleCustomizeNext();
  };

  return (
    <div className="pb-5">
      {customizeData?.imageText === 1 ? (
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
        <TextEditor />
      )}
    </div>
  );
};

export default UploadDesign;
