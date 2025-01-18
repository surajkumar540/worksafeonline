import { useState } from "react";
import { motion } from "framer-motion";
import { IoImages } from "react-icons/io5";
import { bigShoulders } from "@/app/layout";
import { FaTextHeight } from "react-icons/fa";
import Image from "next/image";
// import Link from "next/link";

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
    title: "ADD LOGO",
    description: "Add MY LOGO or Upload NEW LOGO.",
    price: "£10",
    terms: "By selecting this option, you agree to our ",
    icon: <IoImages />,
  },
  {
    id: 2,
    title: "ADD TEXT",
    description: "Personalise with your choose of Text.",
    price: "£5",
    terms: "By selecting this option, you agree to our ",
    icon: <FaTextHeight />,
  },
];

const ImageText = ({
  customizeData,
  setCustomizeData,
}: {
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.imageText?.id ?? null
  );

  const handleSelect = (option: any) => {
    setSelectedOption(option.id);
    setCustomizeData((prev: any) => ({ ...prev, imageText: option }));
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
      className="flex items-center mt-6 justify-between gap-10 w-full pb-3 px-6 lg:px-28"
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
      <div className="grid w-full lg:w-1/2 grid-cols-1 gap-5">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className={`p-5 rounded-xl border-4 cursor-pointer ${
              selectedOption === option.id
                ? "border-primary"
                : "border-gray-100"
            } transition-all duration-200 active:scale-[0.95] ease-linear bg-white`}
            onClick={() => handleSelect(option)}
            variants={optionVariants}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{option.icon}</div>
              <h3
                className={`text-3xl font-extrabold text-center ${bigShoulders.className}`}
              >
                {option.title}
              </h3>
              <p className={`text-gray-700 text-lg font-semibold text-center ${bigShoulders.className}`}>
                {option.description}
              </p>
              {/* <p className="text-xl font-bold text-green-500">{option.price}</p> */}
              {/* <p className="text-xs text-gray-500 text-center">
                {option.terms}
                <Link href={"/terms-and-conditions"} className="hover:underline text-blue-500">
                  terms and conditions.
                </Link>
              </p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageText;
