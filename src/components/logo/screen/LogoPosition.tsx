import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { includes } from "@/utils/polyfills";
import SizeSelector from "../../customisation/screens/SizeSelector";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
};

const optionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const LogoPosition = ({
  customizeData,
  setCustomizeData,
  artWorkPositions,
}: {
  customizeData: any;
  artWorkPositions: any;
  setCustomizeData: any;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    (Array.isArray(customizeData?.logoPosition) &&
      customizeData?.logoPosition?.map((option: any) => option)) ??
      []
  );

  useEffect(() => {
    setCustomizeData((prev: any) => ({
      ...prev,
      logoPosition: selectedOptions,
    }));
  }, [selectedOptions.length]);

  const handleSelect = (option: any) => {
    if (
      !includes(selectedOptions, option.LogoPosition) &&
      selectedOptions.length === 3
    )
      return toast.info("You can add upto 3 options");

    setSelectedOptions((prevSelected) => {
      const updatedSelected = Array.isArray(prevSelected)
        ? includes(prevSelected, option.LogoPosition)
          ? prevSelected.filter((id) => id !== option.LogoPosition)
          : [...prevSelected, option.LogoPosition]
        : [option.LogoPosition]; // If it's not an array, set it as an array with the selected id
      return updatedSelected;
    });
  };

  const result = artWorkPositions.reduce((acc: any, curr: any) => {
    curr.ArtworkPosition.forEach((artwork: any) => {
      acc.push({
        MCode: artwork.MCode,
        Template: artwork.Template,
        TempImage: artwork.TempImage,
        MainPosition: curr.MainPosition,
        Description: artwork.Description,
        LogoPosition: artwork.LogoPosition,
      });
    });
    return acc;
  }, []);

  const renderOption = (option: any) => (
    <motion.div
      key={option.LogoPosition}
      className={`rounded-lg p-2 cursor-pointer ${
        includes(selectedOptions, option.LogoPosition)
          ? "border-green-500 border-4 scale-105"
          : "border-gray-200 border-4"
      } transition-all duration-300 bg-white`}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSelect(option)}
      variants={optionVariants}
    >
      <div className="flex group relative flex-col items-center space-y-3">
        <Image
          priority
          unoptimized
          width={100}
          height={75}
          src={option.TempImage}
          alt={`Icon for option ${option.LogoPosition}`}
          className="min-w-28 max-w-28 object-contain"
        />
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="flex gap-5 py-5 lg:px-10 items-start justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="flex w-2/3 flex-col border-r pr-10">
        <p
          className={`${bigShoulders.className} relative text-2xl w-fit uppercase text-center font-black`}
        >
          Choose logo
          <span className="text-primary"> Position/s*</span>
          <span className="text-gray-500 absolute top-2 -right-5 flex text-sm text-center">
            <span className="ml-1 bg-secondary text-white rounded-full w-5 h-5 font-black flex items-center justify-center text-xs cursor-pointer group relative">
              i
              <span className="absolute capitalize w-28 top-5 right-5 font-normal mt-1 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Must be Selected as per color
              </span>
            </span>
          </span>
        </p>
        <SizeSelector
          customizeData={customizeData}
          setCustomizeData={setCustomizeData}
        />
        {artWorkPositions &&
          artWorkPositions.length > 0 &&
          artWorkPositions.map((pos: any) => {
            return (
              <div key={pos?.MainPosition} className="flex pt-4 flex-col">
                <p
                  className={`text-xl font-semibold text-left capitalize ${bigShoulders.className}`}
                >
                  {pos?.MainPosition}
                </p>
                <div className="flex overflow-auto no-scrollbar p-2 gap-2">
                  {pos.ArtworkPosition.map(renderOption)}
                </div>
              </div>
            );
          })}
      </div>

      <div className="w-1/3 pl-10 h-full mx-auto flex flex-col items-center justify-between">
        <p
          className={`${bigShoulders.className} relative pb-4 text-2xl uppercase text-center font-black`}
        >
          Selected
          <span className="text-primary"> Position/s</span>
        </p>
        {selectedOptions.length > 0 && (
          <motion.div
            className="bg-white flex flex-col items-center"
            variants={optionVariants}
          >
            <div className="w-full h-full gap-3 py-3 flex flex-wrap justify-center items-center">
              {selectedOptions.map((id, index) => {
                const option = result.find(
                  (option: any) => option.LogoPosition === id
                );
                return option?.TempImage ? (
                  <Image
                    priority
                    key={index}
                    unoptimized
                    width={524}
                    height={350}
                    src={option.TempImage}
                    alt="Selected Icon"
                    className="min-w-28 max-w-28 object-contain border-2 p-2 rounded-xl cursor-pointer"
                  />
                ) : (
                  <div key={index}>No icon available</div>
                );
              })}
            </div>
            <p className="text-sm font-semibold">
              {selectedOptions
                .map((id) => {
                  const option = result.find(
                    (option: any) => option.LogoPosition === id
                  );
                  return (
                    option?.Description + ` (${option?.LogoPosition})` || ""
                  );
                })
                .join(", ")}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LogoPosition;
