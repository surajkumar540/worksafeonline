import { bigShoulders } from "@/app/layout";

const ProductSizes = ({ sizes }: { sizes: any }) => {
  return (
    <>
      <p className="mt-4 mb-2 font-semibold">Sizes</p>
      <div className={`flex flex-wrap gap-2 ${bigShoulders.className}`}>
        {sizes.map((size: any) => {
          return (
            <span
              key={size?.Size}
              title={size?.Size_Description}
              className="border border-gray-200 bg-gray-200 min-w-10 min-h-10 whitespace-nowrap flex justify-center items-center font-extrabold cursor-pointer hover:bg-black hover:text-white hover:border-black rounded-full p-1"
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
