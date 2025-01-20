import Image from "next/image";
import { motion } from "framer-motion";
import SizeSelector from "./SizeSelector";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { includes } from "@/utils/polyfills";

interface Option {
  id: number;
  icon: string;
  title?: string;
  position?: { top: number; bottom: number; left: number; right: number };
}

const options = [
  {
    id: 1,
    title: "front-center-left",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/3.jpg",
  },
  {
    id: 2,
    title: "front-center",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/4.jpg",
  },
  {
    id: 3,
    title: "front-center-right",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/5.jpg",
  },
  {
    id: 4,
    title: "front-top-center",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/17.jpg",
  },
];

const optionsBack = [
  {
    id: 5,
    title: "back-center",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/8.jpg",
  },
  {
    id: 6,
    title: "back-top-center",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/9.jpg",
  },
  {
    id: 7,
    title: "back-bottom-centered",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/12.jpg",
  },
  {
    id: 8,
    title: "back-top-inbetween-center",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/65.jpg",
  },
];

const optionsSide = [
  {
    id: 9,
    title: "front-right",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/7.jpg",
  },
  {
    id: 10,
    title: "front-left",
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/1.jpg",
  },
];

const LogoPosition = ({
  customizeData,
  setCustomizeData,
}: {
  customizeData: any;
  setCustomizeData: any;
}) => {
  // Change selectedOption to an array to store multiple selected options
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    (Array.isArray(customizeData?.logoPosition) &&
      customizeData?.logoPosition?.map((option: any) => option.id)) ??
      []
  );

  const handleSelect = (option: Option) => {
    setSelectedOptions((prevSelected) => {
      const updatedSelected = Array.isArray(prevSelected)
        ? includes(prevSelected, option.id)
          ? prevSelected.filter((id) => id !== option.id)
          : [...prevSelected, option.id]
        : [option.id]; // If it's not an array, set it as an array with the selected id
      return updatedSelected;
    });
  };

  // // This function will handle the selection of an option along with its size
  // const handleSelectSelected = (option: string | number, size: string) => {
  //   // Check if the option already exists in selectedOptions
  //   setSelectedOptions((prevSelected: any) => {
  //     const existingOptionIndex = prevSelected.findIndex(
  //       (item: any) => item.id === option
  //     );

  //     if (existingOptionIndex > -1) {
  //       // Option already exists, update size
  //       const updatedOptions = [...prevSelected];
  //       updatedOptions[existingOptionIndex].size = size;
  //       return updatedOptions;
  //     }

  //     // Option doesn't exist, add a new one
  //     return [...prevSelected, { id: option, size }];
  //   });
  // };

  useEffect(() => {
    if (selectedOptions.length > 0) {
      const updatedLogoPositions = options
        .concat(optionsBack, optionsSide)
        .filter((item) => includes(selectedOptions, item?.id));

      // Only update if the selected options have changed
      setCustomizeData((prev: any) => ({
        ...prev,
        logoPosition: updatedLogoPositions,
      }));
    }
  }, [selectedOptions, setCustomizeData]);

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

  const renderOption = (option: Option) => (
    <motion.div
      key={option.id}
      className={`rounded-lg p-2 cursor-pointer ${
        includes(selectedOptions, option.id)
          ? "border-green-500 border-4 scale-105"
          : "border-gray-200 border-4"
      } transition-all duration-300 bg-white`}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSelect(option)}
      variants={optionVariants}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="text-4xl py-3">
          <Image
            priority
            unoptimized
            alt={`Icon for option ${option.id}`}
            width={100} // adjust width as necessary
            height={75} // adjust height as necessary
            src={option.icon}
            className="w-fit object-contain"
          />
        </div>
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
      <div className="flex w-2/3 flex-col space-y-4 border-r">
        <p
          className={`${bigShoulders.className} text-2xl uppercase text-center font-black`}
        >
          Choose logo
          <span className="text-primary"> Position/s*</span>
        </p>
        <div className="flex gap-5 items-center">
          <p
            className={`text-xl w-28 font-extrabold uppercase ${bigShoulders.className}`}
          >
            Front
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {options.map(renderOption)}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p
            className={`text-xl w-28 font-extrabold uppercase ${bigShoulders.className}`}
          >
            Back
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {optionsBack.map(renderOption)}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p
            className={`text-xl whitespace-nowrap w-28 font-extrabold uppercase ${bigShoulders.className}`}
          >
            Left / Right
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {optionsSide.map(renderOption)}
          </div>
        </div>
      </div>

      <div className="w-1/3 h-full mx-auto flex flex-col items-center justify-between">
        <p
          className={`${bigShoulders.className} pb-4 text-2xl uppercase text-center font-black`}
        >
          Selected
          <span className="text-primary"> Position/s</span>
        </p>
        {selectedOptions.length > 0 && (
          <motion.div
            className="bg-white flex flex-col items-center"
            variants={optionVariants}
          >
            <div className="w-full h-full gap-3 py-3 flex justify-center items-center">
              {selectedOptions.map((id) => {
                const option = [
                  ...options,
                  ...optionsBack,
                  ...optionsSide,
                ].find((option) => option.id === id);
                return option?.icon ? (
                  <Image
                    key={id}
                    priority
                    unoptimized
                    width={524}
                    height={350}
                    src={option.icon}
                    alt="Selected Icon"
                    // onClick={() => handleSelectSelected(option.id)}
                    className="w-fit object-contain border-2 p-2 rounded-xl cursor-pointer"
                  />
                ) : (
                  <div key={id}>No icon available</div>
                );
              })}
            </div>
            <p className="text-sm font-semibold">
              {selectedOptions
                .map((id) => {
                  const option = [
                    ...options,
                    ...optionsBack,
                    ...optionsSide,
                  ].find((option) => option.id === id);
                  return option?.title || "";
                })
                .join(", ")}
            </p>
          </motion.div>
        )}
        <SizeSelector logoPosition={selectedOptions} />
      </div>
    </motion.div>
  );
};

export default LogoPosition;
