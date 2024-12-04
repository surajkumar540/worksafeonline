import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { ArtworkDetails } from "./ArtworkDetails";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

const SavedLogos = ({
  handleFinal,
  handleSetFilterScreen,
}: {
  handleFinal: any;
  handleSetFilterScreen: any;
}) => {
  const [isLogoSelected, setIsLogoSelected] = useState<number | null>();
  const product = [
    {
      id: 1,
      imageText: { id: 1 },
      designImage:
        "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_embroidered.png",
      addtext: {
        font: "Arial",
        color: "Black",
        textLine1: "Custom Line 1",
        textLine2: "Custom Line 2",
        textLine3: "Custom Line 3",
      },
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
      designImage:
        "https://customiseitnow.co.uk/wp-content/plugins/wooart/public/img/type_embroidered.png",
      addtext: {
        font: "Arial",
        color: "Black",
        textLine1: "Custom Line 1",
        textLine2: "Custom Line 2",
        textLine3: "Custom Line 3",
      },
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
      <p
        className={`${bigShoulders.className} text-3xl text-center font-black`}
      >
        Choose from your
        <span className="text-primary"> Existing</span> Designs
      </p>
      <ArtworkDetails setIsLogoSelected={setIsLogoSelected} product={product} />
      <div className="flex space-x-4 text-4xl justify-center items-center">
        <IoArrowBackCircle
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
        )}
      </div>
    </>
  );
};

export default SavedLogos;
