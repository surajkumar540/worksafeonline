// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";

interface Option {
  id: number;
  title: string;
  terms: string;
  icon: JSX.Element;
  description: string;
  description2: string;
}

const ImageText = ({
  modalData,
  customizeData,
  setCustomizeData,
}: {
  modalData: any;
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    customizeData?.imageText?.id ?? null
  );

  const handleSelect = (option: any) => {
    setSelectedOption(option.id);
    setCustomizeData((prev: any) => ({ ...prev, imageText: option }));
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

  const options: Option[] = [
    {
      id: 1,
      title: modalData.RightTopText1,
      terms: modalData.RightTopTerms,
      description: modalData.RightTopText2,
      description2: modalData.RightTopText3,
      icon: (
        <Image
          width={56}
          height={56}
          priority
          unoptimized
          src={modalData.RightTopImg}
          alt="modalData.RightTopText1"
        />
      ),
    },
    {
      id: 2,
      title: modalData.RightBottomText1,
      terms: modalData.RightBottomTerms,
      description: modalData.RightBottomText2,
      description2: modalData.RightBottomText3,
      icon: (
        <Image
          width={56}
          height={56}
          priority
          unoptimized
          src={modalData.RightBottomImg}
          alt="modalData.RightBottomText1"
        />
      ),
    },
  ];

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
          alt="Image"
          height={100}
          className="w-full object-contain rounded-2xl mx-auto"
          src={modalData?.LeftImg}
        />
      </div>
      <div className="grid w-full lg:w-1/2 grid-cols-1 gap-5">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className={`p-4 rounded-xl border-4 cursor-pointer ${
              selectedOption === option.id
                ? "border-green-500"
                : "border-gray-100"
            } transition-all duration-200 active:scale-[0.95] ease-linear bg-white`}
            onClick={() => handleSelect(option)}
            variants={optionVariants}
          >
            <div
              className={`flex flex-col items-center space-y-2 ${bigShoulders.className}`}
            >
              <div>{option.icon}</div>
              <h3 className="text-2xl font-extrabold text-center">
                {option.title}
              </h3>
              <p className="text-gray-700 text-lg font-semibold text-center">
                {option.description}
              </p>
              {/* <p className="text-gray-700 text-sm font-semibold text-center">
                {option.description2}{" "}
                <Link href={option.terms} className="underline text-blue-500">
                  Terms
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
