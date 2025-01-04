import AddText from "./AddText";
import { useState } from "react";

const TextEditor = ({ product }: { product: any }) => {
  console.log(product);
  const [selectedFields, setSelectedFilters] = useState({
    font: "Arial, sans-serif",
    color: "#000000",
    textSize: "text-[12px]",
    spacing: "",
    textLine1: "",
    textLine2: "",
    textLine3: "",
  });
  return (
    <div className="flex justify-center items-start w-full mx-auto mb-5 gap-10 px-10">
      <div className="w-3/5">
        <AddText
          selectedFields={selectedFields}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="w-2/5 my-auto">
        <div
          style={{
            color: selectedFields?.color,
            fontFamily: selectedFields?.font,
          }}
          className="col-span-2 flex-col rounded-lg h-full bg-gray-50 flex justify-center items-center"
        >
          <div className="relative w-full">
            <div
              className={`flex flex-col absolute inset-0 ${selectedFields?.textSize} ${selectedFields?.spacing}`}
            >
              <span>{selectedFields?.textLine1}</span>
              <span>{selectedFields?.textLine2}</span>
              <span>{selectedFields?.textLine3}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
