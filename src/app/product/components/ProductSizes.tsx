import { bigShoulders } from "@/app/layout";

const ProductSizes = ({
  sizes,
  selectedFields,
  setSelectedFields,
}: {
  sizes: any;
  selectedFields: any;
  setSelectedFields: any;
}) => {
  return (
    <>
      <p className="mt-4 mb-2 font-semibold">Sizes</p>
      <div className={`flex flex-wrap gap-2 ${bigShoulders.className}`}>
        {sizes.map((size: any) => {
          return (
            <span
              key={size?.Size_Sequence_No}
              onClick={() =>
                setSelectedFields({ ...selectedFields, size: size })
              }
              title={size?.Size_Description}
              className={`border min-w-10 min-h-10 whitespace-nowrap flex justify-center items-center font-extrabold cursor-pointer rounded-full p-1 ${
                selectedFields?.size?.Size_Sequence_No ===
                size?.Size_Sequence_No
                  ? "bg-black border-black text-white"
                  : "border-gray-200 bg-gray-200 hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              {size?.Size}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default ProductSizes;
