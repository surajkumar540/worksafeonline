import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";

interface Option {
  id: number;
  icon: any;
  price: string;
  terms: string;
  Disclaimer: string;
  maxWidth: string;
}

const PrintEmbroidery = ({
  modalData,
  customizeData,
  setCustomizeData,
}: {
  modalData: any;
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.printEmbroidery?.id ?? null
  );

  const options: Option[] = [
    {
      id: 1,
      maxWidth: "30cm",
      price: "Print Size Disclaimer - 30 cm",
      Disclaimer: modalData?.EmbroideryDisclaimer,
      terms: modalData?.PrintSetupText,
      icon: "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_printed.png",
    },
    {
      id: 2,
      maxWidth: "25cm",
      Disclaimer: modalData?.PrintDisclaimer,
      price: "Embriodery Size Disclaimer - 30 cm",
      terms: modalData?.EmbroiderySetupText,
      icon: "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_embroidered.png",
    },
  ];

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
      className="flex items-center justify-between gap-10 mt-6 w-full pb-3 px-6 lg:px-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="h-full w-full lg:w-1/2">
        <Image
          priority
          unoptimized
          width={100}
          alt="Immage"
          height={100}
          className="w-full object-contain rounded-2xl mx-auto"
          src={"/assets/logoOptimize/printing.jpg"}
        />
      </div>
      <div className="grid w-full lg:w-1/2 grid-cols-1 gap-3">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className={`p-4 rounded-xl border-4 cursor-pointer ${
              selectedOption === option.id
                ? "border-green-500"
                : "border-gray-200"
            } transition-all duration-200 active:scale-[0.95] bg-white`}
            onClick={() => handleSelect(option)}
            variants={optionVariants}
          >
            <div className="flex flex-col relative items-center space-y-3">
              <span className="text-gray-500 absolute right-0 flex text-sm text-center">
                <span className="ml-1 bg-secondary text-white rounded-full w-5 h-5 font-black flex items-center justify-center text-xs cursor-pointer group relative">
                  i
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-28 font-normal mt-1 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {option?.Disclaimer}
                  </span>
                </span>
              </span>
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
              <p
                className={`text-sm text-black font-bold text-center ${bigShoulders.className}`}
              >
                {option.terms}
              </p>
              <p
                className={`text-sm text-black font-bold text-center ${bigShoulders.className}`}
              >
                {option.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PrintEmbroidery;
