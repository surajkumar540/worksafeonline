import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";

interface Option {
  id: number;
  icon: string;
}

const options = [
  {
    id: 1,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/3.jpg",
  },
  {
    id: 2,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/4.jpg",
  },
  {
    id: 3,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/5.jpg",
  },
  {
    id: 4,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/17.jpg",
  },
];

const optionsBack = [
  {
    id: 5,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/8.jpg",
  },
  {
    id: 6,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/9.jpg",
  },
  {
    id: 7,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/12.jpg",
  },
  {
    id: 8,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/65.jpg",
  },
];

const optionsSide = [
  {
    id: 9,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/7.jpg",
  },
  {
    id: 10,
    icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/1.jpg",
  },
];

const LogoPosition = ({
  customizeData,
  setCustomizeData,
  handleCustomizeNext,
}: {
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.logoPosition ?? null
  );

  const handleSelect = (id: number) => {
    setSelectedOption(id);
    setCustomizeData((prev: any) => ({ ...prev, logoPosition: id }));
    // handleCustomizeNext();
  };

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
      className={`rounded-lg p-2 border-2 cursor-pointer ${
        selectedOption === option.id
          ? "border-green-500 scale-105"
          : "border-gray-200"
      } transition-all duration-300 bg-white`}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSelect(option.id)}
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
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="flex gap-20 py-5 lg:px-[10%] items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="flex w-3/4 flex-col space-y-4">
        <div className="flex gap-5 items-center">
          <p
            className={`text-xl w-28 font-extrabold uppercase ${bigShoulders.className}`}
          >
            Front
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {options.map(renderOption)}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p
            className={`text-xl w-28 font-extrabold uppercase ${bigShoulders.className}`}
          >
            Back
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {optionsBack.map(renderOption)}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p
            className={`text-xl whitespace-nowrap w-28 font-extrabold uppercase ${bigShoulders.className}`}
          >
            Left / Right
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {optionsSide.map(renderOption)}
          </div>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-center">
        {selectedOption && (
          <motion.div
            className="p-6 rounded-xl border-2 bg-white flex flex-col items-center"
            variants={optionVariants}
          >
            <div className="w-full h-full py-3 flex justify-center items-center">
              {[...options, ...optionsBack, ...optionsSide].find(
                (option) => option.id === selectedOption
              )?.icon ? (
                <Image
                  alt="Selected Icon"
                  priority
                  unoptimized
                  width={400} // adjust width as necessary
                  height={250} // adjust height as necessary
                  src={
                    [...options, ...optionsBack, ...optionsSide].find(
                      (option) => option.id === selectedOption
                    )?.icon || "" // Fallback to an empty string if undefined
                  }
                />
              ) : (
                // Optionally render a placeholder or empty state when there's no icon
                <div>No icon available</div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LogoPosition;
