import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";
import React, { useEffect, useState } from "react";
import { containerVariants, itemVariants } from "@/animation/framer";

const SizeQuantities = ({
  sizes,
  selectedFields,
  setSelectedFields,
}: {
  sizes: any[];
  selectedFields: any;
  setSelectedFields: any;
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const reducedSize: { [key: string]: number } = selectedFields.size.reduce(
      (acc: any, size: any) => {
        const { Size, quantity } = size;
        acc[Size] = quantity;
        return acc;
      },
      {} as { [key: string]: number }
    );
    setQuantities(reducedSize);
  }, [selectedFields?.size.length]);

  const handleIncrement = (size: any) => {
    setQuantities((prev) => {
      const newQuantity = (prev[size.Size] || 0) + 1;
      const updatedSize = { ...size, quantity: newQuantity };

      setSelectedFields((prevFields: any) => {
        const updatedFields = { ...prevFields };
        if (!updatedFields.size) updatedFields.size = [];
        const existingSizeIndex = updatedFields.size.findIndex(
          (item: any) => item.Size === size.Size
        );
        if (existingSizeIndex === -1) updatedFields.size.push(updatedSize);
        else updatedFields.size[existingSizeIndex] = updatedSize;
        return updatedFields;
      });
      return { ...prev, [size.Size]: newQuantity };
    });
  };

  const handleDecrement = (size: any) => {
    setQuantities((prev) => {
      const newQuantity = Math.max((prev[size.Size] || 0) - 1, 0);
      const updatedSize = { ...size, quantity: newQuantity };

      setSelectedFields((prevFields: any) => {
        const updatedFields = { ...prevFields };
        if (!updatedFields.size) updatedFields.size = [];
        const existingSizeIndex = updatedFields.size.findIndex(
          (item: any) => item.Size === size.Size
        );
        if (existingSizeIndex === -1) updatedFields.size.push(updatedSize);
        else updatedFields.size[existingSizeIndex] = updatedSize;
        if (newQuantity === 0)
          updatedFields.size = updatedFields.size.filter(
            (item: any) => item.Size !== size.Size
          );
        return updatedFields;
      });
      return { ...prev, [size.Size]: newQuantity };
    });
  };

  return (
    <div className="pb-2">
      <p className="mt-4 mb-2 font-semibold">Sizes</p>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-3 lg:gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {sizes.map((size) => {
          const isActive = (quantities[size.Size] || 0) > 0;
          return (
            <motion.div
              key={size.Size}
              className={`rounded-lg pt-2 p-[2px] text-center cursor-pointer ${
                isActive ? "bg-primary/70" : "bg-gray-200/80"
              }`}
              variants={itemVariants}
            >
              <div
                className={`text-xl font-black ${
                  isActive ? "text-black" : "text-gray-600"
                } ${bigShoulders.className}`}
              >
                {size.Size}
              </div>
              <div className={`px-2 pt-px pb-1 mt-2 bg-white rounded-b-lg`}>
                <div className="flex items-center justify-between mt-2">
                  <button
                    className={`w-6 h-6 flex justify-center items-center text-lg active:scale-[0.8] transition rounded ${
                      isActive
                        ? "bg-primary/70 text-black hover:bg-primary scale-1-5"
                        : "bg-gray-300 text-white hover:bg-gray-400"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDecrement(size);
                    }}
                  >
                    -
                  </button>
                  <span>{quantities[size.Size] || 0}</span>
                  <button
                    className={`w-6 h-6 flex justify-center items-center text-lg active:scale-[0.8] transition rounded ${
                      isActive
                        ? "bg-primary/70 text-black hover:bg-primary scale-1-5"
                        : "bg-gray-300 text-white hover:bg-gray-400"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIncrement(size);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="text-xs mt-2 pb-px">In Stock</div>
                <div className="text-[10px] font-thin text-gray-600">
                  {size.Size_Sequence_No > 5
                    ? "32 Available"
                    : "100+ Available"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SizeQuantities;
