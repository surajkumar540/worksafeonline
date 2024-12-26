import Modal from "../common/Modal";
// import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import { useCallback, useState } from "react";
import Stepper from "../customisation/Stepper";
import ImageText from "../customisation/screens/ImageText";
// import Selection from "../customisation/screens/Selection";
import SavedLogos from "../customisation/screens/SavedLogos";
import LogoPosition from "../customisation/screens/LogoPosition";
// import UploadDesign from "../customisation/screens/UploadDesign";
import PrintEmbroidery from "../customisation/screens/PrintEmbroidery";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import CustomisationDetails from "../customisation/screens/CustomisationDetails";

const CustomizeLogoModal = ({
  data,
  onclose,
  isVisible,
}: {
  data: any;
  isVisible: boolean;
  onclose: () => void;
}) => {
  const [customizeData, setCustomizeData] = useState<any>({
    addtext: {},
    imageText: {},
    designImage: "",
    logoPosition: {},
    printEmbroidery: {},
  });
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentCustomizeStep, setCurrentCustomizeStep] = useState<number>(0);

  const steps = [
    { label: "Select a Product" },
    { label: "Customize or Assign Options" },
  ];

  const customize = [
    { label: "Image/Text" },
    { label: "Choose / Upload / Design" },
    { label: "Position" },
    { label: "Print or Embroidery" },
    { label: "Customisation Details" },
  ];

  // const checkEmptyFields = () => {
  //   if (currentCustomizeStep === 0) {
  //     if (!customizeData.imageText?.id)
  //       toast.info("Please select logo or text design!");
  //     return customizeData.imageText?.id;
  //   }
  //   if (currentCustomizeStep === 2) {
  //     if (!customizeData?.designImage && customizeData.imageText?.id === 1)
  //       toast.info("Please select design image");
  //     else if (
  //       !(
  //         customizeData?.addtext.color &&
  //         customizeData?.addtext.font &&
  //         customizeData?.addtext.textLine1
  //       )
  //     )
  //       toast.info("Please add design text");
  //     return (
  //       (customizeData?.addtext.color &&
  //         customizeData?.addtext.font &&
  //         customizeData?.addtext.textLine1) ||
  //       customizeData?.designImage
  //     );
  //   }
  //   if (currentCustomizeStep === 3) {
  //     if (!customizeData?.printEmbroidery.id)
  //       toast.info("Please select print or embroidery type!");
  //     return customizeData?.printEmbroidery.id;
  //   }
  //   if (currentCustomizeStep === 4) {
  //     if (!customizeData?.logoPosition?.id)
  //       toast.info("Please select logo position!");
  //     return customizeData?.logoPosition.id;
  //   }
  //   return true;
  // };

  const handleCustomizeNext = () => {
    // if (!checkEmptyFields()) return;
    if (currentCustomizeStep < customize.length - 1) {
      setCurrentCustomizeStep(currentCustomizeStep + 1);
    }
  };

  const handleCustomizeNextId = (id: number) => {
    // if (!checkEmptyFields()) return;

    setCurrentCustomizeStep(id);
  };

  const handleFinal = () => {};

  const handleCustomizePrevious = () => {
    if (currentCustomizeStep === 0) return handlePrevious();
    if (currentCustomizeStep > 0) {
      setCurrentCustomizeStep(currentCustomizeStep - 1);
    }
  };

  const handleSetFilterScreen = (step: number) => {
    setCurrentStep(step);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = useCallback(
    (step: number) => {
      switch (step) {
        case 0:
          return (
            <ImageText
              customizeData={customizeData}
              setCustomizeData={setCustomizeData}
            />
          );
        case 1:
          return (
            // <Selection
            //   handleNext={handleCustomizeNext}
            //   handleSetFilterScreen={handleSetFilterScreen}
            // />
            <SavedLogos
              data={data}
              handleFinal={handleFinal}
              customizeData={customizeData}
              setCustomizeData={setCustomizeData}
              handleCustomizeNext={handleCustomizeNext}
              handleSetFilterScreen={handleSetFilterScreen}
            />
          );
        // case 2:
        //   return (
        //     <UploadDesign
        //       product={data}
        //       customizeData={customizeData}
        //       setCustomizeData={setCustomizeData}
        //       handleCustomizeNext={handleCustomizeNext}
        //     />
        //   );
        case 3:
          return (
            <PrintEmbroidery
              customizeData={customizeData}
              setCustomizeData={setCustomizeData}
            />
          );
        case 2:
          return (
            <LogoPosition
              customizeData={customizeData}
              setCustomizeData={setCustomizeData}
            />
          );
        case 4:
          return (
            <CustomisationDetails
              data={{ ...data, ...customizeData }}
              setCurrentCustomizeStep={setCurrentCustomizeStep}
            />
          );
        default:
          return <></>;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentCustomizeStep]
  );

  if (!data) return null;

  return (
    <Modal
      onClose={onclose}
      isVisible={isVisible}
      showCloseButton={false}
      width="w-[95vw] md:w-[90%]"
    >
      <div className="flex flex-col gap-5">
        <div className="relative">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            handleCustomizeNextId={handleCustomizeNextId}
          />
          <RxCross1
            size={24}
            onClick={onclose}
            title="Click to close"
            className="cursor-pointer hover:scale-110 hover:text-primary absolute top-1 right-5 text-black"
          />
        </div>
        {/* {currentStep === 3 && (
          
        )} */}
        {currentStep === 1 && (
          <>
            <div className="bg-gray-300 h-[1px]" />
            <p
              className={`${bigShoulders.className} text-4xl text-center font-black uppercase`}
            >
              <span className="text-primary">Customize</span> it now
            </p>
            <Stepper
              reduceSize={true}
              steps={customize}
              currentStep={currentCustomizeStep}
              handleCustomizeNextId={handleCustomizeNextId}
            />
            <div className="w-full mx-auto text-center">
              {renderStepContent(currentCustomizeStep)}
              <div className="flex space-x-4 text-4xl justify-center items-center">
                <IoArrowBackCircle
                  title="Back"
                  onClick={handleCustomizePrevious}
                  className="hover:text-primary transition-all duration-200 ease-linear hover:scale-125 cursor-pointer"
                />
                {currentCustomizeStep !== 5 && (
                  <IoArrowForwardCircle
                    title="Forward"
                    onClick={handleCustomizeNext}
                    className="hover:text-primary transition-all duration-200 ease-linear hover:scale-125 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CustomizeLogoModal;
