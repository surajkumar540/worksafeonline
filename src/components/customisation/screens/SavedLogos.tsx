import Image from "next/image";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
// import { RxCross1 } from "react-icons/rx";
import UploadDesign from "./UploadDesign";
import { MdDelete } from "react-icons/md";
// import { IoMdSearch } from "react-icons/io";
import { bigShoulders } from "@/app/layout";
import { FaRegHeart } from "react-icons/fa6";
import GalleryFilters from "./GalleryFilters";
import logo3 from "../../../../public/assets/logo/logo3.png";
import logo1 from "../../../../public/assets/logo/logo1.png";

const SavedLogos = ({
  modalData,
  customizeData,
  setCustomizeData,
}: {
  modalData: any;
  customizeData: any;
  setCustomizeData: any;
}) => {
  // const [searchText, setSearchText] = useState("");
  // const [searchBar, showSearchBar] = useState(false);
  const [selectedFav, setSelectedFav] = useState("");
  const [isLogoSelected, setIsLogoSelected] = useState<any>({});
  const [isOptionSelected, setIsOptionSelected] = useState<
    "option1" | "option2" | null
  >(null);

  const handleOption1Select = () => {
    setIsOptionSelected("option1");
  };

  const handleOption2Select = () => {
    setIsOptionSelected("option2");
  };

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

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchText(e.target.value);
  // };

  const logoSelected = isLogoSelected?.id ? true : false;

  return (
    <>
      <GalleryFilters />
      <div className="flex items-start my-5 justify-between gap-8">
        <div
          onClick={handleOption1Select}
          className={`w-3/5 border-2 rounded-2xl p-5 ${
            isOptionSelected === "option1" && logoSelected
              ? "opacity-100 border-green-500"
              : "opacity-50 border-black"
          }`}
        >
          {/* <div>
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
          </div> */}
          <div className="flex text-2xl uppercase font-semibold items-center justify-center mb-6">
            {/* <div className="h-1 bg-green-500 flex-1"></div> */}
            <span
              className={`border border-green-500 text-xl text-green-500 px-2 p-0.5 rounded-md ${bigShoulders.className}`}
            >
              Option 1
            </span>
            <span className={`px-2 text-black ${bigShoulders.className}`}>
              - CHOOSE MY LOGO
            </span>
            {/* <div className="h-1 bg-green-500 flex-1"></div> */}
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
                      ? "border-4 border-green-500"
                      : "border-4 border-gray-100"
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
        <div className="flex items-center justify-center h-96">
          <div
            className={`flex flex-col items-center text-2xl uppercase font-semibold h-full transition-opacity duration-300`}
          >
            <div className="w-0.5 bg-black flex-grow"></div>
            <span className={`py-2 text-black ${bigShoulders.className}`}>
              or
            </span>
            <div className="w-0.5 bg-black flex-grow"></div>
          </div>
        </div>
        {/* <p className="text-gray-600 text-lg">or</p> */}
        <div
          onClick={handleOption2Select}
          className={`w-2/5 border-2 p-5 rounded-2xl ${
            isLogoSelected.designImage ? "border-green-500" : "border-black"
          } ${isOptionSelected === "option2" ? "opacity-100" : "opacity-50"}`}
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
          {!isLogoSelected?.id && customizeData?.imageText?.id === 1 && (
            <textarea
              rows={4}
              className={`w-full border border-gray-300 text-sm rounded-lg p-3 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none ${bigShoulders.className}`}
              placeholder="Add Notes (optional)..."
            ></textarea>
          )}
          <p className="text-xs text-left text-gray-400">
            Disclaimer: {modalData?.LogoColourDisclaimer}
          </p>
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
