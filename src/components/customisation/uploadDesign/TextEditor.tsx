import AddText from "./AddText";
import { useState } from "react";

const TextEditor = ({ product }: { product: any }) => {
  console.log(product);
  const [selectedFields, setSelectedFilters] = useState({
    spacing1: "",
    spacing2: "",
    spacing3: "",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    fontWeight1: "",
    fontWeight2: "",
    fontWeight3: "",
    color: "#000000",
    textSize1: "text-[12px]",
    textSize2: "text-[12px]",
    textSize3: "text-[12px]",
    font: "Arial, sans-serif",
  });
  return (
    <div className="flex justify-center items-start w-full mx-auto mb-5 gap-10 px-20">
      <div className="w-2/3">
        <AddText
          selectedFields={selectedFields}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="w-1/3 my-auto">
        <div
          style={{
            color: selectedFields?.color,
            fontFamily: selectedFields?.font,
          }}
          className="col-span-2 flex-col rounded-lg h-full bg-gray-50 flex justify-center items-center"
        >
          <div className="relative w-full">
            <div className={`flex flex-col absolute inset-0`}>
              <span
                className={`${selectedFields?.textSize1} ${selectedFields?.spacing1} ${selectedFields?.fontWeight1}`}
              >
                {selectedFields?.textLine1}
              </span>
              <span
                className={`${selectedFields?.textSize2} ${selectedFields?.spacing2} ${selectedFields?.fontWeight2}`}
              >
                {selectedFields?.textLine2}
              </span>
              <span
                className={`${selectedFields?.textSize3} ${selectedFields?.spacing3} ${selectedFields?.fontWeight3}`}
              >
                {selectedFields?.textLine3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
