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

      <div className="grid grid-cols-6 gap-2 px-28">
        {/* Column Titles */}
        {[
          "Product",
          "Colour",
          "Logo / Text",
          "Logo Position",
          "Application",
          "Delete",
        ].map((title) => (
          <p
            key={title}
            className="font-semibold text-sm bg-gray-100 py-2 rounded-t-xl text-center"
          >
            {title}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-2 px-28 mt-2">
        {/* Product */}
        <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
          <Image
            priority
            unoptimized
            width={200}
            height={200}
            alt="Product Image"
            src={product?.ProductImage ?? logo1}
            className="object-contain w-3/4"
          />
          <h1
            className={`text-sm mt-2 font-semibold text-center ${bigShoulders.className}`}
          >
            {product.ProductName} (Code - {product.ProductID})
          </h1>
        </div>

        {/* Colour */}
        <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
          <div className="flex rounded-full overflow-hidden">
            <div
              style={{ backgroundColor: primaryColor }}
              className={`h-16 ${
                primaryColor && secondaryColor ? "w-8" : "w-16"
              }`}
            ></div>
            {secondaryColor && (
              <div
                style={{ backgroundColor: secondaryColor }}
                className={`h-16 ${
                  primaryColor && secondaryColor ? "w-8" : "w-16"
                }`}
              ></div>
            )}
          </div>
          <p
            className={`text-sm font-semibold pt-2 text-center ${bigShoulders.className}`}
          >
            {data?.color?.Colour_Description?.trim()}
          </p>
        </div>

        {/* Logo / Text */}
        <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
          <Image
            priority
            unoptimized
            width={200}
            height={200}
            alt="Logo"
            src={logo1}
            className="object-contain w-3/4"
          />
          <p
            className={`text-sm font-bold text-center ${bigShoulders.className}`}
          >
            Medium
          </p>
        </div>

        {/* Logo Position */}
        <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
          <Image
            priority
            unoptimized
            width={200}
            height={200}
            alt="Logo Position"
            src={data?.logoPosition?.icon ?? logo1}
            className="object-contain w-3/4"
          />
          <p
            className={`text-xs font-bold pt-2 text-center ${bigShoulders.className}`}
          >
            {data?.logoPosition?.map((id: any) => id?.title).join(", ")}
          </p>
        </div>

        {/* Application */}
        <div className="h-48 bg-gray-100 rounded-b-xl flex items-center justify-center p-2">
          <Image
            priority
            unoptimized
            width={200}
            height={200}
            alt="Application"
            src={data?.printEmbroidery?.icon ?? logo1}
            className="object-contain w-3/4"
          />
        </div>

        {/* Delete */}
        <div className="h-48 bg-gray-100 rounded-b-xl flex items-center justify-center p-2">
          <p className="text-4xl cursor-pointer text-red-500 hover:scale-150 transition">
            <MdDelete title="Delete Logo" />
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomisationDetails;
