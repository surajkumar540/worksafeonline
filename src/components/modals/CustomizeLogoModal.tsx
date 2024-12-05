import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import { useCallback, useState } from "react";
import Stepper from "../customisation/Stepper";
import ImageText from "../customisation/screens/ImageText";
import Selection from "../customisation/screens/Selection";
import SavedLogos from "../customisation/screens/SavedLogos";
import LogoPosition from "../customisation/screens/LogoPosition";
import UploadDesign from "../customisation/screens/UploadDesign";
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
    { label: "Choose Logo or Design" },
    { label: "Customize or Assign Options" },
  ];

  const customize = [
    { label: "Image/Text" },
    { label: "Print or Embroidery" },
    { label: "Position" },
    { label: "Upload / Design" },
    { label: "Customisation Details" },
  ];

  const handleCustomizeNext = () => {
    if (currentCustomizeStep < customize.length - 1) {
      setCurrentCustomizeStep(currentCustomizeStep + 1);
    }
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

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
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
        case 3:
          return (
            <UploadDesign
              product={data}
              customizeData={customizeData}
              setCustomizeData={setCustomizeData}
              handleCustomizeNext={handleCustomizeNext}
            />
          );
        case 4:
          return <CustomisationDetails data={{ ...data, ...customizeData }} />;
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
          <Stepper steps={steps} currentStep={currentStep} />
          <RxCross1
            size={24}
            onClick={onclose}
            title="Click to close"
            className="cursor-pointer hover:scale-110 hover:text-primary absolute top-1 right-5 text-black"
          />
        </div>
        {currentStep === 3 && (
          <SavedLogos
            handleFinal={handleFinal}
            handleSetFilterScreen={handleSetFilterScreen}
          />
        )}
        {currentStep === 1 && (
          <Selection
            handleNext={handleNext}
            handleSetFilterScreen={handleSetFilterScreen}
          />
        )}
        {currentStep === 2 && (
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
            />
            <div className="w-full mx-auto text-center">
              {renderStepContent(currentCustomizeStep)}
              <div className="flex space-x-4 text-4xl justify-center items-center">
                <IoArrowBackCircle
                  title="Back"
                  onClick={handleCustomizePrevious}
                  className="hover:text-primary transition-all duration-200 ease-linear hover:scale-125 cursor-pointer"
                />
                <IoArrowForwardCircle
                  title="Forward"
                  onClick={handleCustomizeNext}
                  className="hover:text-primary transition-all duration-200 ease-linear hover:scale-125 cursor-pointer"
                />
              </div>
            </div>
          </>
        )}
        {/* <div className="flex justify-between items-center gap-2">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-black w-fit text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-black w-fit text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div> */}
      </div>
    </Modal>
  );
};

export default CustomizeLogoModal;
