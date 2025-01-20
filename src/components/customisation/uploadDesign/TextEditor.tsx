import AddText from "./AddText";
import { useEffect, useState } from "react";

const TextEditor = ({
  customizeData,
  setCustomizeData,
}: {
  customizeData: any;
  setCustomizeData: any;
}) => {
  const [selectedFields, setSelectedFilters] = useState({
    spacing1: "",
    spacing2: "",
    spacing3: "",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    fontStyle1: "",
    fontStyle2: "",
    fontStyle3: "",
    textAlign1: "",
    textAlign2: "",
    textAlign3: "",
    fontWeight1: "",
    fontWeight2: "",
    fontWeight3: "",
    color: "#000000",
    textSize1: "text-[12px]",
    textSize2: "text-[12px]",
    textSize3: "text-[12px]",
    font: "Arial, sans-serif",
  });

  useEffect(() => {
    setCustomizeData((prev: any) => ({ ...prev, addtext: selectedFields }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFields]);

  console.log(customizeData);

  return (
    <div className="flex justify-center items-start w-full mx-auto mb-5 gap-10 px-20">
      <div className="w-2/3">
        <AddText
          selectedFields={selectedFields}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="w-1/3 my-auto min-h-full">
        <div
          style={{
            color: selectedFields?.color,
            fontFamily: selectedFields?.font,
          }}
          className="col-span-2 flex-col rounded-lg py-10 min-h-full bg-gray-100 flex justify-center items-center"
        >
          <div className="relative w-fit">
            <div className={`flex flex-col`}>
              <span
                className={`${selectedFields?.textSize1} ${selectedFields?.fontStyle1} ${selectedFields?.textAlign1} ${selectedFields?.spacing1} ${selectedFields?.fontWeight1}`}
              >
                {selectedFields?.textLine1}
              </span>
              <span
                className={`${selectedFields?.textSize2} ${selectedFields?.fontStyle2} ${selectedFields?.textAlign2} ${selectedFields?.spacing2} ${selectedFields?.fontWeight2}`}
              >
                {selectedFields?.textLine2}
              </span>
              <span
                className={`${selectedFields?.textSize3} ${selectedFields?.fontStyle3} ${selectedFields?.textAlign3} ${selectedFields?.spacing3} ${selectedFields?.fontWeight3}`}
              >
                {selectedFields?.textLine3}
              </span>
            </div>
          </div>
        </div>
        <textarea
          rows={3}
          className="w-full border mt-5 border-gray-300 text-xs rounded-lg p-2 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
          placeholder="Add Notes (optional)..."
        ></textarea>
      </div>
    </div>
  );
};

export default TextEditor;
