import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import UploadDesign from "./UploadDesign";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { FaRegHeart } from "react-icons/fa6";
import GalleryFilters from "./GalleryFilters";
import { toast } from "react-toastify";
import { Fetch } from "@/utils/axios";

const SavedLogos = ({
  modalData,
  savedLogos,
  customizeData,
  setCustomizeData,
  getFilteredResults,
}: {
  modalData: any;
  savedLogos: any;
  customizeData: any;
  setCustomizeData: any;
  getFilteredResults: any;
}) => {
  const [selectedFav, setSelectedFav] = useState("");
  const [isLogoSelected, setIsLogoSelected] = useState<any>({});
  const [localSavedLogos, setLocalSavedLogos] = useState(savedLogos);

  useEffect(() => {
    setLocalSavedLogos(savedLogos); // Update local state whenever prop changes
  }, [savedLogos]);

  const logoSelected = isLogoSelected?.Item_Code ? true : false;

  const addToFavourites = async (item: any) => {
    if (!item)
      return toast.warn("Please select an item from the existing items");
    try {
      const url = "api/AddArtworkWishlist";
      const resp: any = await Fetch(url, { artcode: item }, 5000, true);
      console.log(resp);
      setSelectedFav(item);
    } catch (error: any) {
      if (error.message.includes("401"))
        toast.warn("Please login to add artwork to wishlist!", {
          autoClose: 2000,
        });
    }
  };

  const removeFromFavourites = async (item: any) => {
    if (!item)
      return toast.warn("Please select an item from the existing items");
    try {
      const url = "api/RemoveArtworkWishlist";
      const resp: any = await Fetch(url, { artcode: item }, 5000, true);
      console.log(resp);
      setSelectedFav("");
    } catch (error: any) {
      if (error.message.includes("401"))
        toast.warn("Please login to add artwork to wishlist!", {
          autoClose: 2000,
        });
    }
  };

  return (
    <>
      <GalleryFilters
        productID={customizeData.ProductID}
        getFilteredResults={getFilteredResults}
      />
      <div className="flex items-start my-5 justify-between gap-8">
        <div
          className={`w-3/5 border-2 rounded-2xl p-5 ${
            logoSelected
              ? "opacity-100 border-green-500"
              : "opacity-50 border-black"
          }`}
        >
          <div className="flex text-2xl uppercase font-semibold items-center justify-center mb-6">
            <span
              className={`border border-green-500 text-xl text-green-500 px-2 p-0.5 rounded-md ${bigShoulders.className}`}
            >
              Option 1
            </span>
            <span className={`px-2 text-black ${bigShoulders.className}`}>
              - CHOOSE MY LOGO
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {localSavedLogos &&
              localSavedLogos.length > 0 &&
              localSavedLogos.map((data: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setIsLogoSelected(data)}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`${
                      isLogoSelected?.Item_Code === data?.Item_Code
                        ? "border-4 border-green-500"
                        : "border-4 border-gray-100"
                    } rounded-lg transition h-24 cursor-pointer bg-white p-2 flex flex-col items-center justify-center`}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      <Image
                        src={data.LogoImage}
                        alt="Design"
                        width={100}
                        height={100}
                        sizes="100%"
                        className="object-contain w-full max-h-full max-w-full"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-left mt-1">
                    <p className="font-semibold line-clamp-1">
                      {data.Item_Code}
                    </p>
                    <p className="text-gray-500 line-clamp-1">
                      {data.Description}
                    </p>
                  </div>

                  {/* Tooltip */}
                  <div className="hidden group-hover:block absolute top-24 left-40 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 shadow-md rounded-lg z-30 w-48 p-2 pt-3">
                    <div className="text-xs text-left space-y-0.5">
                      <p className="font-semibold leading-3">
                        {data.name}
                        <span className="font-normal text-gray-500">
                          {data.Description} ({data.Item_Code})
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Cost - £{data.Sales_Price}
                      </p>{" "}
                      <p className="text-gray-600">Size - {data.Size}</p>{" "}
                      <p className="text-gray-600">Type - {data.ArtworkType}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center h-96">
          <div
            className={`flex flex-col items-center text-2xl uppercase font-semibold h-full transition-opacity duration-300`}
          >
            <div className="w-[0.1px] bg-black flex-grow"></div>
            <span
              className={`py-2 text-sm text-black ${bigShoulders.className}`}
            >
              or
            </span>
            <div className="w-[0.1px] bg-black flex-grow"></div>
          </div>
        </div>
        <div
          className={`w-2/5 border-2 p-5 rounded-2xl ${
            customizeData?.designImage
              ? "border-green-500 opacity-100"
              : "border-black"
          }`}
        >
          <div className="flex text-2xl uppercase font-semibold items-center justify-center mb-6">
            {/* <div className="h-1 bg-green-500 flex-1"></div> */}
            <span
              className={`border border-green-500 text-xl text-green-500 px-2 p-0.5 rounded-md ${bigShoulders.className}`}
            >
              Option 2
            </span>
            <span className={`px-2 text-black ${bigShoulders.className}`}>
              - UPLOAD NEW LOGO
            </span>
            {/* <div className="h-1 bg-green-500 flex-1"></div> */}
          </div>
          <UploadDesign
            customizeData={{
              ...customizeData,
              ...(isLogoSelected && {
                designImage: isLogoSelected.designImage,
              }),
            }}
            setCustomizeData={setCustomizeData}
          />
          {!isLogoSelected?.Item_Code && customizeData?.imageText?.id === 1 && (
            <textarea
              rows={4}
              className={`w-full border border-gray-300 text-sm rounded-lg p-3 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none ${bigShoulders.className}`}
              placeholder="Add Notes (optional)..."
            ></textarea>
          )}
          <p className="text-xs text-left text-gray-400">
            Disclaimer: {modalData?.LogoColourDisclaimer}
          </p>
          {isLogoSelected?.Item_Code && (
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div
                className={`flex pb-3 gap-5 w-full items-center ${
                  isLogoSelected?.favourites
                    ? "justify-between"
                    : "justify-between"
                }`}
              >
                <p className="text-xl mt-3 font-semibold">Selected Logo</p>
                {
                  <div className="flex items-center space-x-2">
                    {selectedFav === isLogoSelected?.Item_Code ? (
                      <FaHeart
                        size={25}
                        className="cursor-pointer text-red-500"
                        title="Added to favourites"
                        onClick={() =>
                          removeFromFavourites(isLogoSelected?.Item_Code)
                        }
                      />
                    ) : (
                      <FaRegHeart
                        size={25}
                        className="cursor-pointer text-red-500"
                        title="Add to favourites"
                        onClick={() =>
                          addToFavourites(isLogoSelected?.Item_Code)
                        }
                      />
                    )}
                    <MdDelete
                      size={26}
                      title="Remove"
                      className="cursor-pointer text-red-500"
                      onClick={() => setIsLogoSelected({})}
                    />
                  </div>
                }
              </div>
              <Image
                alt="Design"
                width={0}
                height={0}
                sizes="100%"
                src={isLogoSelected.LogoImage}
                className="object-contain w-1/2"
              />
              <div className="text-center mt-4">
                <div className="text-sm text-left space-y-0.5">
                  <p className="font-semibold text-center leading-3">
                    {isLogoSelected.name}
                    <span className="font-semibold text-gray-800">
                      {isLogoSelected.Description} ({isLogoSelected.Item_Code})
                    </span>
                  </p>
                  <div className="flex justify-center items-center flex-wrap pt-1 gap-10">
                    <p className="text-gray-700">
                      Cost - £{isLogoSelected.Sales_Price}
                    </p>{" "}
                    <p className="text-gray-700">
                      Size - {isLogoSelected.Size}
                    </p>{" "}
                    <p className="text-gray-700">
                      Type - {isLogoSelected.ArtworkType}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedLogos;
