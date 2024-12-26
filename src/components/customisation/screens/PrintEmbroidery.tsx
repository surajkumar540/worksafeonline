import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Option {
  id: number;
  icon: string;
  title: string;
  price: string;
  terms: string;
  maxWidth: string;
}

const options: Option[] = [
  {
    id: 1,
    title: "Print",
    maxWidth: "30cm",
    price: "£2.99 (One-time setup)",
    terms: "Best for companies graphics and gradients",
    icon: "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_printed.png",
  },
  {
    id: 2,
    title: "Embroidery",
    maxWidth: "25cm",
    price: "£4.99 (One-time setup)",
    terms: "Best for solid colours and durability.",
    icon: "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_embroidered.png",
  },
];

const PrintEmbroidery = ({
  customizeData,
  setCustomizeData,
}: {
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.printEmbroidery?.id ?? null
  );

  const handleSelect = (option: any) => {
    setSelectedOption(option?.id);
    setCustomizeData((prev: any) => ({ ...prev, printEmbroidery: option }));
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

  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-6 p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className={`p-6 rounded-xl border-4 cursor-pointer ${
              selectedOption === option.id
                ? "border-green-500 scale-105"
                : "border-gray-200"
            } transition-all duration-200 active:scale-[0.8] bg-white`}
            onClick={() => handleSelect(option)}
            variants={optionVariants}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="text-4xl py-3">
                <Image
                  alt="Image"
                  width={250}
                  height={75}
                  unoptimized
                  src={option.icon}
                  className="w-full object-contain"
                />
              </div>
              <p className="text-gray-500 flex text-sm text-center relative">
                Max Width: {option.maxWidth}
                <span className="ml-1 bg-primary text-black rounded-full w-5 h-5 font-black flex items-center justify-center text-xs cursor-pointer group relative">
                  i
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-40 font-normal mt-1 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {option?.terms}
                  </span>
                </span>
              </p>
              <p className="text-lg font-bold text-green-600 text-center">
                {option.price}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {option.terms}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PrintEmbroidery;
