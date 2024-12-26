// import { useState } from "react";
import UploadDesign from "./UploadDesign";
import { bigShoulders } from "@/app/layout";
// import { ArtworkDetails } from "./ArtworkDetails";
// import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import Image from "next/image";
import logo3 from "../../../../public/assets/logo/logo3.png";
import logo1 from "../../../../public/assets/logo/logo1.png";
const SavedLogos = ({
  data,
  handleFinal,
  customizeData,
  setCustomizeData,
  handleCustomizeNext,
  handleSetFilterScreen,
}: {
  data: any;
  handleFinal?: any;
  customizeData: any;
  setCustomizeData: any;
  handleCustomizeNext: any;
  handleSetFilterScreen?: any;
}) => {
  // const [isLogoSelected, setIsLogoSelected] = useState<number | null>();
  console.log(handleFinal, handleSetFilterScreen);
  const product = [
    {
      id: 1,
      imageText: { id: 1 },
      designImage: logo1,
      addtext: {},
      logoPosition: {
        icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/3.jpg",
      },
      printEmbroidery: {
        icon: "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_embroidered.png",
      },
    },
    {
      id: 2,
      imageText: { id: 2 },
      designImage: logo3,
      addtext: {},
      logoPosition: {
        icon: "https://www.clothes2order.com/images/c2o_new_2013/layout/checkout/positions/4.jpg",
      },
      printEmbroidery: {
        icon: "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_printed.png",
      },
    },
  ];
  return (
    <>
      <div className="bg-gray-300 h-[1px]" />
      <div className="flex items-center mt-5 justify-between gap-10">
        <div className="w-1/2">
          <p
            className={`${bigShoulders.className} text-3xl mb-5 text-center font-black`}
          >
            Choose from your
            <span className="text-primary"> Existing</span> Designs
          </p>
          {/* <ArtworkDetails
            setIsLogoSelected={setIsLogoSelected}
            product={product}
          /> */}
          <div className="grid grid-cols-2 gap-5">
            {product.map((data: any, index: number) => (
              <div
                key={index}
                className={`border rounded-2xl border-black p-4 flex flex-col items-center`}
              >
                {/* Design Image */}
                <div className="text-center mb-5 font-semibold">
                  {/* {data?.addtext?.font && (
                    <>
                      <p className="text-sm">
                        Font:{" "}
                        <span className="font-normal">{data.addtext.font}</span>
                      </p>
                      <p className="text-sm">
                        Color:{" "}
                        <span className="font-normal">
                          {data.addtext.color}
                        </span>
                      </p>
                      <p className="text-sm">
                        Line 1:{" "}
                        <span className="font-normal">
                          {data.addtext.textLine1}
                        </span>
                      </p>
                      <p className="text-sm">
                        Line 2:{" "}
                        <span className="font-normal">
                          {data.addtext.textLine2}
                        </span>
                      </p>
                      <p className="text-sm">
                        Line 3:{" "}
                        <span className="font-normal">
                          {data.addtext.textLine3}
                        </span>
                      </p>
                    </>
                  )} */}
                  <p className="">
                    Print/Embroidery:{" "}
                    <span className="font-normal">PRINTED</span>
                  </p>
                  <p className="">
                    Logo Position:{" "}
                    <span className="font-normal">FRONT-LEFT</span>
                  </p>
                </div>
                <Image
                  src={data.designImage}
                  alt="Design"
                  width={80}
                  height={80}
                  unoptimized
                  priority
                  className="object-cover my-auto w-full"
                />

                {/* Add Text Details */}

                {/* Logo Position */}
                {/* <div className="mt-3">
                  <Image
                    src={data.logoPosition.icon}
                    alt="Logo Position"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div> */}

                {/* Print/Embroidery Icon */}
                {/* <div className="mt-3">
                  <Image
                    src={data.printEmbroidery.icon}
                    alt="Print/Embroidery"
                    width={40}
                    height={40}
                    className="object-contain w-full"
                  />
                </div> */}
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-lg">or</p>
        {/* <button
          onClick={() => handleCustomizeNext(2)}
          className="w-fit h-fit bg-gradient-to-r outline-none from-green-400 to-green-600 text-white py-4 px-8 rounded-xl hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
        >
          <span
            className={`font-black uppercase text-2xl ${bigShoulders.className}`}
          >
            Create Design
          </span>
          <p className="text-sm text-gray-200 mt-2">
            Design a custom logo with your brand&apos;s elements.
          </p>
        </button> */}
        <UploadDesign
          product={data}
          customizeData={customizeData}
          setCustomizeData={setCustomizeData}
          handleCustomizeNext={handleCustomizeNext}
        />
      </div>
      <div className="flex space-x-4 text-4xl justify-center items-center">
        {/* <IoArrowBackCircle
          title="Back"
          onClick={() => handleSetFilterScreen(1)}
          className="hover:text-primary transition-all duration-200 ease-linear hover:scale-125 cursor-pointer"
        />
        {(isLogoSelected === 0 || isLogoSelected) && (
          <IoArrowForwardCircle
            title="Forward"
            onClick={handleFinal}
            className="hover:text-primary transition-all duration-200 ease-linear hover:scale-125 cursor-pointer"
          />
        )} */}
      </div>
    </>
  );
};

export default SavedLogos;
