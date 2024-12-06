import { motion } from "framer-motion";
import { bigShoulders } from "@/app/layout";
import React, { useEffect, useState } from "react";
import { containerVariants, itemVariants } from "@/animation/framer";

const SizeQuantities = ({
  sizes,
  fieldsCheck,
  selectedFields,
  setSelectedFields,
}: {
  sizes: any[];
  fieldsCheck: any;
  selectedFields: any;
  setSelectedFields: any;
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (
      selectedFields &&
      selectedFields?.size &&
      selectedFields?.size.length > 0
    ) {
      const reducedSize: { [key: string]: number } =
        selectedFields?.size?.reduce((acc: any, size: any) => {
          const { Size, quantity } = size;
          acc[Size] = quantity;
          return acc;
        }, {} as { [key: string]: number });
      setQuantities(reducedSize ?? {});
    }
    // eslint-disable-next-line
  }, [selectedFields]);

  const handleIncrement = (size: any) => {
    if (fieldsCheck()) return;

    setQuantities((prev) => {
      const currentQuantity = prev[size.Size] || 0;
      if (currentQuantity < 10) {
        const newQuantity = currentQuantity + 1;
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
      }
      return prev;
    });
  };

  const handleDecrement = (size: any) => {
    if (fieldsCheck()) return;

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
        className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-6 gap-3 lg:gap-2"
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
              className={`rounded-lg pt-1 p-[2px] text-center cursor-pointer ${
                isActive ? "bg-primary/70" : "bg-gray-200/80"
              }`}
              variants={itemVariants}
            >
              <div
                className={`font-black ${
                  isActive ? "text-black" : "text-gray-600"
                } ${bigShoulders.className}`}
              >
                {size.Size}
              </div>
              <div className={`px-1 pt-px pb-1 mt-1 bg-white rounded-b-lg`}>
                <div className="flex items-center justify-between mt-2">
                  <button
                    className={`w-5 h-5 flex justify-center items-center active:scale-[0.8] transition rounded ${
                      isActive
                        ? "bg-primary/70 text-black hover:bg-primary scale-1-5"
                        : "bg-gray-300 text-white hover:bg-gray-400"
                    }`}
                    onClick={() => handleDecrement(size)}
                  >
                    -
                  </button>
                  <span className="text-sm">{quantities[size.Size] || 0}</span>
                  <button
                    className={`w-5 h-5 flex justify-center items-center active:scale-[0.8] transition rounded ${
                      isActive
                        ? "bg-primary/70 text-black hover:bg-primary scale-1-5"
                        : "bg-gray-300 text-white hover:bg-gray-400"
                    }`}
                    onClick={() => handleIncrement(size)}
                  >
                    +
                  </button>
                </div>
                <div className="text-xs mt-2 pb-px">In Stock</div>
                <div className="text-[10px] font-thin text-gray-600">
                  {size.qty} Available
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
