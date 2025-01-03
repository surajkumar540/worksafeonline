import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { bigShoulders } from "@/app/layout";
import { extractColorFromDescription } from "@/app/product/components/ProductColor";

const CustomisationDetails = ({
  data,
  setCurrentCustomizeStep,
}: {
  data: any;
  setCurrentCustomizeStep: any;
}) => {
  const product = data;

  const handleSaveCustomization = () => {
    const customizationDetails = {
      addtext: data?.addtext,
      imageText: data?.imageText,
      designImage: data?.designImage,
      logoPosition: data?.logoPosition,
      printEmbroidery: data?.printEmbroidery,
    };
    console.log(customizationDetails);
    try {
    } catch (error) {
      console.log("Customization Details: " + error);
    } finally {
    }
  };
  console.log(data);

  const [primaryColor, secondaryColor] =
    (data?.color.Html_Code && data?.color.Html_Code?.split("/")) ||
    extractColorFromDescription(data?.color.Colour_Description);
  console.log(primaryColor, secondaryColor);
  return (
    <>
      <h3
        className={`text-3xl pb-5 font-extrabold text-center ${bigShoulders.className}`}
      >
        Summary
      </h3>
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-1/5">
          <p className="text-lg font-semibold pb-5">Product</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={product?.ProductImage}
            className="w-fit mx-auto object-contain"
          />
          <h1
            className={`text-lg pt-2 font-black uppercase ${bigShoulders.className}`}
          >
            {product.ProductName}
          </h1>
          <p className="text-xs">({product?.Composition})</p>
        </div>
        <div className="w-[10%] flex flex-col justify-center items-center">
          <p className="text-lg font-semibold pb-5">Colour</p>
          <div className="flex">
            <div
              style={{ backgroundColor: primaryColor }}
              className={`h-40 ${
                primaryColor && secondaryColor ? "w-10" : "w-20"
              }`}
            ></div>
            {secondaryColor && (
              <div
                style={{ backgroundColor: secondaryColor }}
                className={`h-40 ${
                  primaryColor && secondaryColor ? "w-10" : "w-20"
                }`}
              ></div>
            )}
          </div>
          <p className="text-sm font-bold pt-2">
            {data?.color?.Colour_Description.trim()}
          </p>
        </div>
        <div className="w-1/5">
          <p className="text-lg font-semibold pb-5">Logo</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={data?.designImage}
            className="w-40 mx-auto object-contain"
          />
          <p className="text-sm font-bold pt-2">Medium</p>
        </div>
        <div className="w-1/5">
          <p className="text-lg font-semibold pb-5">Logo Position</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={data?.logoPosition?.icon}
            className="w-3/5 mx-auto object-contain"
          />
          <p className="text-sm font-bold pt-2 capitalize">
            {data?.logoPosition?.title.split("-").join(" ")}
          </p>
        </div>
        <div className="w-1/5">
          <p className="text-lg font-semibold pb-5">Application</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={data?.printEmbroidery?.icon}
            className="w-40 mx-auto object-contain"
          />
          <p className="text-sm pt-2 capitalize">
            ({data?.printEmbroidery?.maxWidth})
          </p>
          <p className="text-sm capitalize">({data?.printEmbroidery?.price})</p>
          <p className="text-sm capitalize">({data?.printEmbroidery?.terms})</p>
        </div>
        <div className="w-[10%] flex flex-col justify-center items-center">
          <p className="text-lg font-semibold pb-5">Delete Logo</p>
          <p className="text-4xl hover:scale-150 mt-10 transition cursor-pointer text-red-500">
            <MdDelete title="Delete Logo" />
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-10 mb-5 justify-end w-full">
        <button
          type="button"
          onClick={() => setCurrentCustomizeStep(0)}
          className={`w-fit flex items-center justify-center px-10 py-3 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
        >
          Add Another Logo
        </button>
        <button
          type="button"
          onClick={handleSaveCustomization}
          className={`w-fit flex items-center justify-center px-10 py-3 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-xl font-bold bg-primary/80 text-black ${bigShoulders.className}`}
        >
          Save & View Product
        </button>
      </div>
    </>
  );
};

export default CustomisationDetails;
