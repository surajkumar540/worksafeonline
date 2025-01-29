"use client";

import Image from "next/image";
import { Post } from "@/utils/axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { BiCloudUpload } from "react-icons/bi";

const ImageUploader = ({
  selectedImage,
  setSelectedImage,
}: {
  setSelectedImage: any;
  selectedImage: string | null;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response: any = await Post("api/UploadArtworkImage", formData);
        if (response && response[0] && response.length > 0)
          setSelectedImage(response[0]);
      } catch (error) {
        console.log("Failed to set selected image: " + error);
      }
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
            className="w-full h-full object-contain border-2 p-1 border-green-500 cursor-pointer rounded-xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveImage();
            }}
            className="absolute -top-3 -right-3 bg-red-400 text-white w-7 h-7 flex justify-center items-center aspect-square rounded-full p-1 hover:bg-red-600 transition-all duration-200 ease-linear"
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative group flex flex-col w-full mx-auto justify-start rounded-xl cursor-pointer hover:border-gray-400 transition-colors duration-300"
        >
          <div className="hidden group-hover:block absolute bg-white -top-32 z-30 w-full border shadow-md pt-2 pb-1 px-8 rounded-lg text-center mx-auto text-gray-600">
            <div className="text-xs space-y-1">
              <p className="font-bold text-lg whitespace-nowrap text-black">
                Files Types we Accept
              </p>
              <p className="text-xs">
                Jpg, jpeg, Gif, Ai, Pdf, Svg, Psd, Bmp, Tiff, Tif
              </p>
              <p>Max file size: 10MB</p>
            </div>
            <span className="flex justify-center">
              <BiCloudUpload size={40} className="text-gray-500" />
            </span>
          </div>
          <button
            type="button"
            className={`bg-blue-500 uppercase text-white w-full text-xl mt-4 px-6 py-1 font-semibold rounded-md ${bigShoulders.className}`}
          >
            Upload NEW logo
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
