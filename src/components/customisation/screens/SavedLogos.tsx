import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import UploadDesign from "./UploadDesign";
import { MdDelete } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { bigShoulders } from "@/app/layout";
import { FaRegHeart } from "react-icons/fa6";
import GalleryFilters from "./GalleryFilters";
import logo3 from "../../../../public/assets/logo/logo3.png";
import logo1 from "../../../../public/assets/logo/logo1.png";

const SavedLogos = ({
  handleFinal,
  customizeData,
  setCustomizeData,
  handleSetFilterScreen,
}: {
  handleFinal?: any;
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
  handleSetFilterScreen?: any;
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchBar, showSearchBar] = useState(false);
  const [selectedFav, setSelectedFav] = useState("");
  const [isLogoSelected, setIsLogoSelected] = useState<any>({});

  console.log(handleFinal, handleSetFilterScreen);
  const product = [
    {
      id: 1,
      Pricing: "£5",
      favourites: true,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 2,
      Pricing: "£5",
      favourites: true,
      name: "AW121333",
      designImage: logo3,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 3,
      Pricing: "£5",
      favourites: false,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 4,
      Pricing: "£5",
      favourites: false,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 5,
      Pricing: "£5",
      favourites: false,
      name: "AW121333",
      designImage: logo3,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 6,
      Pricing: "£5",
      favourites: true,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 7,
      Pricing: "£5",
      favourites: true,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 8,
      Pricing: "£5",
      favourites: false,
      name: "AW121333",
      designImage: logo3,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 9,
      Pricing: "£5",
      favourites: true,
      name: "AW121333",
      designImage: logo3,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 10,
      Pricing: "£5",
      favourites: false,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 11,
      Pricing: "£5",
      favourites: false,
      name: "AW121333",
      designImage: logo3,
      description: "EMM Company Slogan ABC",
    },
    {
      id: 12,
      Pricing: "£5",
      favourites: true,
      name: "AW121333",
      designImage: logo1,
      description: "EMM Company Slogan ABC",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <GalleryFilters />
      <div className="flex items-center my-5 justify-between gap-10">
        <div className="w-3/5">
          <div>
            {searchBar ? (
              <div className="flex mb-5 justify-between items-center gap-5">
                <div className="relative hidden w-full lg:block">
                  <input
                    type="text"
                    value={searchText}
                    autoFocus={searchBar}
                    onChange={handleInputChange}
                    placeholder={"Search by name or description..."}
                    className="w-full px-4 text-sm py-3 border text-gray-500 rounded-full outline-none"
                  />
                  <button className="absolute z-20 top-0 right-0 px-4 py-3 rounded-full">
                    <RxCross1
                      size={20}
                      className="text-black"
                      onClick={() => showSearchBar(!searchBar)}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center mb-5">
                <p
                  className={`${bigShoulders.className} text-2xl text-center font-black`}
                >
                  Choose from your
                  <span className="text-primary"> Existing</span> Designs
                </p>
                <button
                  className="relative flex items-center gap-1 w-fit px-4 py-1 text-black cursor-pointer"
                  onClick={() => showSearchBar(!searchBar)}
                >
                  Search{" "}
                  <IoMdSearch size={20} title="Search" className="text-black" />
                </button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {product.map((data: any, index: number) => (
              <div
                key={index}
                onClick={() => setIsLogoSelected(data)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`${
                    isLogoSelected?.id === data?.id
                      ? "border-4 border-primary"
                      : "shadow border border-gray-100"
                  } rounded-lg transition h-24 cursor-pointer bg-white p-2 flex flex-col items-center justify-center`}
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <Image
                      src={data.designImage}
                      alt="Design"
                      width={0}
                      height={0}
                      sizes="100%"
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                </div>
                <div className="text-xs text-left mt-1">
                  <p className="font-semibold line-clamp-1">{data.name}</p>
                  <p className="text-gray-500 line-clamp-1">
                    {data.description}
                  </p>
                </div>

                {/* Tooltip */}
                <div className="hidden group-hover:block absolute top-24 left-28 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 shadow-md rounded-lg z-50 w-full max-w-xs p-2 pt-3">
                  <div className="text-sm text-left space-y-1">
                    <p className="font-semibold leading-3">
                      {data.name}
                      <span className="text-xs pl-1 font-normal text-gray-500">
                        ({data.description})
                      </span>
                    </p>
                    <p className="font-semibold">Cost - {data.Pricing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-lg">or</p>
        <div className="w-2/5">
          <UploadDesign
            customizeData={{
              ...customizeData,
              ...(isLogoSelected && {
                designImage: isLogoSelected.designImage,
              }),
            }}
            setCustomizeData={setCustomizeData}
          />
          {!isLogoSelected?.id && customizeData?.imageText?.id === 1 && (
            <textarea
              rows={3}
              className="w-full border border-gray-300 text-sm rounded-lg p-3 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
              placeholder="Add Notes (optional)..."
            ></textarea>
          )}
          {isLogoSelected?.id && (
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div
                className={`flex pb-3 gap-5 w-full items-center ${
                  isLogoSelected?.favourites
                    ? "justify-between"
                    : "justify-between"
                }`}
              >
                <p className="text-xl font-semibold">Selected Logo</p>
                {
                  <div className="flex items-center space-x-2">
                    {selectedFav === isLogoSelected?.id ? (
                      <FaHeart
                        size={25}
                        className="cursor-pointer text-red-500"
                        title="Added to favourites"
                        onClick={() => setSelectedFav("")}
                      />
                    ) : (
                      <FaRegHeart
                        size={25}
                        className="cursor-pointer text-red-500"
                        title="Add to favourites"
                        onClick={() => setSelectedFav(isLogoSelected?.id)}
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
                src={isLogoSelected.designImage}
                className="object-contain w-1/2"
              />
              <div className="text-center mt-1">
                <p className="font-semibold line-clamp-1">
                  {isLogoSelected.name}
                </p>
                <p className="text-gray-500 line-clamp-1">
                  {isLogoSelected.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedLogos;
