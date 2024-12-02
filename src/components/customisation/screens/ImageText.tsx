import { useState } from "react";
import { motion } from "framer-motion";
import { IoImages } from "react-icons/io5";
import { bigShoulders } from "@/app/layout";
import { FaTextHeight } from "react-icons/fa";

interface Option {
  id: number;
  title: string;
  description: string;
  price: string;
  terms: string;
  icon: JSX.Element;
}

const options: Option[] = [
  {
    id: 1,
    title: "Logo / Image",
    description: "Add a custom logo or image to your project.",
    price: "£10",
    terms: "By selecting this option, you agree to our terms and conditions.",
    icon: <IoImages />,
  },
  {
    id: 2,
    title: "Type Text",
    description: "Add text content with custom styling.",
    price: "£5",
    terms: "By selecting this option, you agree to our terms and conditions.",
    icon: <FaTextHeight />,
  },
];

const ImageText = ({
  customizeData,
  setCustomizeData,
  handleCustomizeNext,
}: {
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.imageText ?? null
  );

  const handleSelect = (id: number) => {
    setSelectedOption(id);
    setCustomizeData((prev: any) => ({ ...prev, imageText: id }));
    // handleCustomizeNext();
  };

  // Variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6 },
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
                : "border-gray-100"
            } transition-all duration-200 ease-linear bg-white`}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(option.id)}
            variants={optionVariants}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="text-4xl">{option.icon}</div>
              <h3
                className={`text-2xl font-extrabold text-center ${bigShoulders.className}`}
              >
                {option.title}
              </h3>
              <p className="text-sm text-gray-700 text-center">
                {option.description}
              </p>
              <p className="text-xl font-bold text-green-500">{option.price}</p>
              <p className="text-xs text-gray-500 text-center mt-2">
                {option.terms}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageText;
