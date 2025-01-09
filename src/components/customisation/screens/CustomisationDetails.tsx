import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { bigShoulders } from "@/app/layout";
import logo1 from "../../../../public/assets/logo/logo1.png";
import { extractColorFromDescription } from "@/app/product/components/ProductColor";

const CustomisationDetails = ({
  data,
  setCurrentCustomizeStep,
}: {
  data: any;
  setCurrentCustomizeStep: any;
}) => {
  const product = data;

  // const handleSaveCustomization = () => {
  //   const customizationDetails = {
  //     addtext: data?.addtext,
  //     imageText: data?.imageText,
  //     designImage: data?.designImage,
  //     logoPosition: data?.logoPosition,
  //     printEmbroidery: data?.printEmbroidery,
  //   };
  //   console.log(customizationDetails);
  //   try {
  //   } catch (error) {
  //     console.log("Customization Details: " + error);
  //   } finally {
  //   }
  // };
  console.log(data, setCurrentCustomizeStep);

  const [primaryColor, secondaryColor] =
    (data?.color.Html_Code && data?.color.Html_Code?.split("/")) ||
    extractColorFromDescription(data?.color.Colour_Description);

  return (
    <>
      <h3
        className={`text-3xl pb-5 font-extrabold text-center ${bigShoulders.className}`}
      >
        Summary
      </h3>
      <div className="flex justify-center items-start">
        <div className="w-1/5 h-60 m-1 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-between">
          <p className="font-semibold pb-2">Product</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={product?.ProductImage ?? logo1}
            className="w-32 h-32 object-contain"
          />
          <h1
            className={`text-sm font-black uppercase text-center ${bigShoulders.className}`}
          >
            {product.ProductName}
          </h1>
          {/* <p className="text-xs text-center">({product?.Composition})</p> */}
        </div>

        <div className="w-[10%] h-60 m-1 rounded-xl p-2 bg-gray-50 flex flex-col justify-between items-center">
          <p className="font-semibold pb-2">Colour</p>
          <div className="flex rounded-full overflow-hidden">
            <div
              style={{ backgroundColor: primaryColor }}
              className={`h-20 ${
                primaryColor && secondaryColor ? "w-10" : "w-20"
              }`}
            ></div>
            {secondaryColor && (
              <div
                style={{ backgroundColor: secondaryColor }}
                className={`h-20 ${
                  primaryColor && secondaryColor ? "w-10" : "w-20"
                }`}
              ></div>
            )}
          </div>
          <p className="text-sm font-bold pt-2 text-center">
            {data?.color?.Colour_Description.trim()}
          </p>
        </div>

        <div className="w-1/5 h-60 m-1 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-between">
          <p className="font-semibold pb-2">Logo</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={logo1}
            className="w-4/5 object-contain"
          />
          <p className="text-sm font-bold pt-2 text-center">Medium</p>
        </div>

        <div className="w-1/5 h-60 m-1 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-between">
          <p className="font-semibold pb-2">Logo Position</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={data?.logoPosition?.icon ?? logo1}
            className="w-4/5 object-contain"
          />
          <p className="text-sm font-bold pt-2 capitalize text-center">
            {data?.logoPosition?.title.split("-").join(" ")}
          </p>
        </div>

        <div className="w-1/5 h-60 m-1 rounded-xl p-2 bg-gray-50 flex flex-col items-center justify-between">
          <p className="font-semibold pb-2">Application</p>
          <Image
            priority
            unoptimized
            width={400}
            height={400}
            alt="ProductImage"
            src={data?.printEmbroidery?.icon ?? logo1}
            className="w-4/5 object-contain"
          />
          <p></p>
          {/* <p className="text-sm pt-2 capitalize text-center">
            ({data?.printEmbroidery?.maxWidth})
          </p>
          <p className="text-sm capitalize text-center">
            ({data?.printEmbroidery?.price})
          </p>
          <p className="text-sm capitalize text-center">
            ({data?.printEmbroidery?.terms})
          </p> */}
        </div>

        <div className="w-[10%] h-60 m-1 rounded-xl p-2 bg-gray-50 flex flex-col justify-between items-center">
          <p className="font-semibold pb-2">Delete</p>
          <p className="text-4xl hover:scale-150 mt-10 transition cursor-pointer text-red-500">
            <MdDelete title="Delete Logo" />
          </p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default CustomisationDetails;
