import { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";

const UploadDesign = ({
  customizeData,
  setCustomizeData,
}: {
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    customizeData?.designImage ?? null
  );

  useEffect(() => {
    setCustomizeData((prev: any) => ({
      ...prev,
      designImage: selectedImage,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  return (
    <div className="pb-5 flex w-full flex-col justify-center items-center">
      <ImageUploader
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};

export default UploadDesign;
