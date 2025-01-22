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
      <div className="grid grid-cols-6 gap-2">
        <div className="h-56 rounded-xl py-2 bg-gray-100">
          <p className="font-semibold pb-2 border-b-8 border-white w-full">
            Product
          </p>
          <div className="flex p-2 flex-col justify-center items-center">
            <Image
              priority
              unoptimized
              width={400}
              height={400}
              alt="ProductImage"
              className="w-3/4 object-contain"
              src={product?.ProductImage ?? logo1}
            />
            <h1
              className={`text-sm mt-2 font-semibold uppercase text-center ${bigShoulders.className}`}
            >
              {product.ProductName} (Code - {product.ProductID})
            </h1>
          </div>
        </div>
        <div className="h-56 rounded-xl py-2 bg-gray-100">
          <p className="font-semibold pb-2 border-b-8 border-white w-full">
            Colour
          </p>
          <div className="flex p-2 flex-col h-full justify-center items-center">
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
            <p
              className={`text-sm font-semibold pt-2 uppercase text-center ${bigShoulders.className}`}
            >
              {data?.color?.Colour_Description.trim()}
            </p>
          </div>
        </div>
        <div className="h-56 rounded-xl py-2 bg-gray-100">
          <p className="font-semibold pb-2 border-b-8 border-white w-full">
            Logo / Text
          </p>
          <div className="flex p-2 flex-col justify-center items-center">
            <Image
              priority
              unoptimized
              width={400}
              height={400}
              alt="ProductImage"
              src={logo1}
              className="w-3/4 object-contain"
            />
            <p
              className={`text-sm font-bold uppercase pt-2 text-center ${bigShoulders.className}`}
            >
              Medium
            </p>
          </div>
        </div>
        <div className="h-56 rounded-xl py-2 bg-gray-100">
          <p className="font-semibold pb-2 border-b-8 border-white w-full">
            Logo Position
          </p>
          <div className="flex p-2 flex-col justify-center items-center">
            <Image
              priority
              unoptimized
              width={400}
              height={400}
              alt="ProductImage"
              src={data?.logoPosition?.icon ?? logo1}
              className="w-3/4 object-contain"
            />
            <p
              className={`text-sm font-bold pt-2 uppercase text-center ${bigShoulders.className}`}
            >
              {data.logoPosition
                .map((id: any) => {
                  return id?.title;
                })
                .join(", ")}{" "}
            </p>
          </div>
        </div>
        <div className="h-56 rounded-xl py-2 bg-gray-100">
          <p className="font-semibold pb-2 border-b-8 border-white w-full">
            Application
          </p>
          <div className="flex p-2 flex-col justify-center h-full items-center">
            <Image
              priority
              unoptimized
              width={400}
              height={400}
              alt="ProductImage"
              src={data?.printEmbroidery?.icon ?? logo1}
              className="w-3/4 object-contain"
            />
          </div>
        </div>
        <div className="h-56 rounded-xl py-2 bg-gray-100">
          <p className="font-semibold pb-2 border-b-8 border-white w-full">
            Delete
          </p>
          <div className="flex p-2 flex-col justify-center mb-10 h-full items-center">
            <p className="text-4xl hover:scale-150 mt-10 transition cursor-pointer text-red-500">
              <MdDelete title="Delete Logo" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomisationDetails;
