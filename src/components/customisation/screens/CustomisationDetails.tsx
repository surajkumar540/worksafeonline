import Image from "next/image";
import { Post } from "@/utils/axios";
import { MdDelete } from "react-icons/md";
import { bigShoulders } from "@/app/layout";
import { getDeviceCheck } from "@/api/generateDeviceId";
import React, { useEffect, useRef, useState } from "react";
import { extractColorFromDescription } from "@/app/product/components/ProductColor";

const CustomisationDetails = ({
  data,
  existingLogo,
  setExistingLogo,
}: {
  data: any;
  existingLogo: any;
  setExistingLogo: any;
}) => {
  const product = data;
  const [loading, setLoading] = useState(true);
  const [artWorklist, setArtWorklist] = useState([]);
  const [primaryColor, secondaryColor] =
    (data?.color.Html_Code && data?.color.Html_Code?.split("/")) ||
    extractColorFromDescription(data?.color.Colour_Description);

  const handleLogoUpdate = (updatedData: any) => {
    const addLogo = updatedData.addLogo[0];
    const isExisting = existingLogo.some(
      (logo: any) =>
        logo.ArtCode === addLogo.ArtCode &&
        logo.ArtSize === addLogo.ArtSize &&
        logo.Position === addLogo.Position &&
        logo.ArtType === addLogo.ArtType
    );
    if (isExisting) {
      setExistingLogo(existingLogo);
      return existingLogo;
    }
    const updatedValue = [...existingLogo, addLogo];
    setExistingLogo(updatedValue);
    return updatedValue;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = "api/AddArtworkToProduct";
        let updatedData = {
          Style: product?.ProductID,
          DeviceID: getDeviceCheck(),
          Colour: product?.color?.Colour?.trim() || "NA",
          Fit: product?.fitting?.Fitting?.trim() || "NA",
          Size:
            product?.size.length > 0
              ? product?.size.map((item: any) => ({
                  Size: item?.Size,
                  Quantity: item?.quantity,
                }))
              : [{ size: "NA", Quantity: 1 }],
          addLogo: [
            {
              ArtCode:
                product?.logoDesign?.Item_Code ||
                product?.textDesign?.Item_Code ||
                "",
              ArtSize: product?.logoSize,
              UploadImage: product?.designImage ?? "",
              Position: product?.logoPosition.join(", "),
              ArtType: product?.printEmbroidery?.id === 1 ? "PRINT" : "EMB",
              Notes: product?.logoDescription || product?.textDescription || "",
            },
          ],
        };
        const logos = handleLogoUpdate(updatedData);
        updatedData.addLogo = logos;
        const response: any = await Post(url, updatedData);
        if (response.status) setArtWorklist(response.addedArtworkList);
      } catch (error) {
        console.log("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDeleteLogo = async (id: number) => {};

  if (loading) return null;

  return (
    <>
      <h3
        className={`text-3xl pb-5 font-extrabold text-center ${bigShoulders.className}`}
      >
        Summary
      </h3>

      <div className="grid grid-cols-6 gap-2 px-36">
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

      <div className="grid grid-cols-6 gap-2 px-36 mt-2">
        {artWorklist &&
          artWorklist.length > 0 &&
          artWorklist.map((worklist: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {/* Product */}
                <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
                  <Image
                    priority
                    unoptimized
                    width={200}
                    height={200}
                    alt="Product Image"
                    className="object-contain w-3/4"
                    src={worklist?.ProductImage ?? null}
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
                    className={`text-lg font-semibold pt-2 text-center ${bigShoulders.className}`}
                  >
                    {data?.color?.Colour_Description?.trim()}
                  </p>
                </div>
                {/* Logo / Text */}
                <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
                  {worklist?.ArtworkImage && (
                    <Image
                      priority
                      unoptimized
                      width={200}
                      height={200}
                      alt="Logo"
                      src={worklist?.ArtworkImage ?? null}
                      className="object-contain w-full shadow"
                    />
                  )}
                  {/* <p
                    className={`text-lg mt-2 font-bold text-center ${bigShoulders.className}`}
                  >
                    {data?.logosize === "S"
                      ? "Small"
                      : data?.logosize === "M"
                      ? "Medium"
                      : "Large"}
                  </p> */}
                </div>
                {/* Logo Position */}
                <div className="h-48 bg-gray-100 rounded-b-xl flex flex-col items-center justify-center p-2">
                  <Image
                    priority
                    unoptimized
                    width={200}
                    height={200}
                    alt="Logo Position"
                    className="object-contain w-3/4 h-32"
                    src={worklist?.PositionImage ?? null}
                  />
                  <p
                    className={`text-sm font-bold pt-2 text-center ${bigShoulders.className}`}
                  >
                    {/* {data?.logoPosition?.map((id: any) => id).join(", ")} */}
                    {worklist?.PDescription} ({worklist.Position})
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
                    className="object-contain w-full"
                    src={worklist?.ArtTypeImg ?? null}
                  />
                </div>
                {/* Delete */}
                <div
                  onClick={() => handleDeleteLogo(worklist.Seq)}
                  className="h-48 bg-gray-100 rounded-b-xl flex items-center justify-center p-2"
                >
                  <p className="text-4xl cursor-pointer text-red-500 hover:scale-150 transition">
                    <MdDelete title="Delete Logo" />
                  </p>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default CustomisationDetails;
