"use client";

import React, { useRef } from "react";
import { toast } from "react-toastify";
import { BiCloudUpload } from "react-icons/bi";
import Image from "next/image";

const ImageUploader = ({
  selectedImage,
  setSelectedImage,
}: {
  setSelectedImage: any;
  selectedImage: string | null;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const maxSizeInBytes = 1024 * 1024 * 10; // 10 MB
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];

      if (file.size > maxSizeInBytes) {
        return toast.warn(
          "File size exceeds 10 MB. Please select a smaller file."
        );
      }

      if (!validTypes.includes(file.type)) {
        return toast.warn(
          "Invalid file type. Please select a PNG, JPG, or JPEG image."
        );
      }
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
      />
      {selectedImage ? (
        <div className="w-3/4 relative flex justify-center items-center">
          <Image
            width={150}
            height={150}
            priority
            unoptimized
            alt="Selected"
            src={selectedImage}
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full object-contain border-2 cursor-pointer rounded-xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveImage();
            }}
            className="absolute -top-3 -right-3 bg-gray-400 text-white w-7 h-7 flex justify-center items-center aspect-square rounded-full p-1 hover:bg-gray-500 transition-all duration-200 ease-linear"
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative group flex flex-col w-full mx-auto justify-start rounded-xl cursor-pointer hover:border-gray-400 transition-colors duration-300"
        >
          <div className="hidden group-hover:flex absolute bg-white -top-32 z-30 right-10 border shadow-md py-4 px-8 rounded-lg flex-col text-center justify-center items-center h-32 text-gray-600">
            <div className="text-xs space-y-1">
              <p className="font-bold text-base text-black">
                Files Types we Accept
              </p>
              <p>Jpg, jpeg, Gif, Ai, Pdf, Svg, Psd, Bmp, Tiff, Tif</p>
              <p>Max file size: 10MB</p>
            </div>
            <span>
              <BiCloudUpload size={50} className="text-gray-500" />
            </span>
            {/* <span className="text-gray-600 text-sm">
              Click to upload or Browse
            </span> */}
          </div>
          <button
            type="button"
            // onClick={handleProceed}
            className="bg-blue-500 text-white w-full mt-4 px-6 py-2 rounded-md"
          >
            Upload logo
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
