import AddText from "./AddText";
// import Image from "next/image";

const TextEditor = ({
  product,
  selectedFields,
  setSelectedFilters,
}: {
  product: any;
  selectedFields: any;
  setSelectedFilters: any;
}) => {
  console.log(product);
  // const widthInCM = 18;
  // const maxWidthInPX = widthInCM * 37.795275; // 1 cm = 37.795275 px
  return (
    <div className="grid grid-cols-4 w-full mx-auto mt-5 gap-5">
      {/* <div
        style={{
          color: selectedFields?.color,
          fontFamily: selectedFields?.font,
        }}
        className="col-span-2 flex-col border rounded-lg h-full bg-gray-50 flex justify-center items-center"
      >
        <div className="relative w-full">
          <Image
            alt="Logo"
            width={400}
            height={400}
            src={product?.ProductImage}
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col absolute inset-0">
            <span>{selectedFields?.textLine1}</span>
            <span>{selectedFields?.textLine2}</span>
            <span>{selectedFields?.textLine3}</span>
          </div>
        </div>
      </div> */}
      <div className="col-span-4">
        <AddText
          selectedFields={selectedFields}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </div>
  );
};

export default TextEditor;
