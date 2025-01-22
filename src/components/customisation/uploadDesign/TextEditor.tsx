import AddText from "./AddText";
import { useEffect, useState } from "react";

const TextEditor = ({
  modalData,
  customizeData,
  setCustomizeData,
}: {
  modalData: any;
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
      <AddText
        modalData={modalData}
        selectedFields={selectedFields}
        setSelectedFilters={setSelectedFilters}
      />
    </div>
  );
};

export default TextEditor;
