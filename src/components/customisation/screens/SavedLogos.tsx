import Image from "next/image";
import UploadDesign from "./UploadDesign";
import { bigShoulders } from "@/app/layout";
import GalleryFilters from "./GalleryFilters";
import logo3 from "../../../../public/assets/logo/logo3.png";
import logo1 from "../../../../public/assets/logo/logo1.png";
import logo2 from "../../../../public/assets/logo/logo2.png";

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
      designImage: logo1,
    },
    {
      designImage: logo3,
    },
    {
      designImage: logo2,
    },
    {
      designImage: logo1,
    },
    {
      designImage: logo3,
    },
    {
      designImage: logo2,
    },
    {
      designImage: logo1,
    },
    {
      designImage: logo3,
    },
    {
      designImage: logo3,
    },
    {
      designImage: logo1,
    },
    {
      designImage: logo3,
    },
    {
      designImage: logo2,
    },
    {
      designImage: logo1,
    },
    {
      designImage: logo3,
    },
    {
      designImage: logo2,
    },
    {
      designImage: logo1,
    },
  ];
  return (
    <>
      <div className="bg-gray-300 h-[1px]" />
      <div className="flex items-center my-5 justify-between gap-10">
        <div className="w-1/2">
          <GalleryFilters />
          <p
            className={`${bigShoulders.className} text-2xl mb-5 text-center font-black`}
          >
            Choose from your
            <span className="text-primary"> Existing</span> Designs
          </p>
          <div className="grid grid-cols-4 gap-4">
            {product.map((data: any, index: number) => (
              <div
                key={index}
                className={`border rounded-lg border-gray-300 lg:hover:scale-[1.6] transition cursor-pointer bg-white p-2 flex flex-col items-center`}
              >
                <Image
                  src={data.designImage}
                  alt="Design"
                  width={80}
                  height={80}
                  unoptimized
                  priority
                  className="object-contain my-auto w-3/4"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-lg">or</p>
        <UploadDesign
          product={data}
          customizeData={customizeData}
          setCustomizeData={setCustomizeData}
          handleCustomizeNext={handleCustomizeNext}
        />
      </div>
    </>
  );
};

export default SavedLogos;
