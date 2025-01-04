import Link from "next/link";
import Image from "next/image";
import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
import { useState, useCallback } from "react";
import Stepper from "../customisation/Stepper";
import ImageText from "../customisation/screens/ImageText";
import SavedLogos from "../customisation/screens/SavedLogos";
import LogoPosition from "../customisation/screens/LogoPosition";
import PrintEmbroidery from "../customisation/screens/PrintEmbroidery";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import CustomisationDetails from "../customisation/screens/CustomisationDetails";
import TextEditor from "../customisation/uploadDesign/TextEditor";

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

  // const steps = [
  //   { label: "Select a Product" },
  //   { label: "Customize or Assign Options" },
  // ];

  const customize = [
    { label: "Image/Text" },
    { label: "Choose / Upload Design" },
    { label: "Print or Embroidery" },
    { label: "Position" },
    { label: "Summary" },
  ];

  const handleCustomizeNext = () => {
    // if (customize.length - 1) {
    setCurrentCustomizeStep(currentCustomizeStep + 1);
    // }
  };

  const handleCustomizeNextId = (id: number) => {
    setCurrentCustomizeStep(id);
  };

  const handleCustomizePrevious = () => {
    if (currentCustomizeStep === 0) {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    } else {
      setCurrentCustomizeStep(currentCustomizeStep - 1);
    }
  };

  const renderStepContent = useCallback(() => {
    switch (currentCustomizeStep) {
      case 0:
        return (
          <ImageText
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 1:
        return (
          <>
            {customizeData?.imageText?.id !== 1 ? (
              <>
                <TextEditor product={data} />
              </>
            ) : (
              <SavedLogos
                data={data}
                customizeData={customizeData}
                setCustomizeData={setCustomizeData}
                handleCustomizeNext={handleCustomizeNext}
              />
            )}
          </>
        );
      case 2:
        return (
          <PrintEmbroidery
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 3:
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
        return null;
    }
    // eslint-disable-next-line
  }, [currentCustomizeStep, customizeData, data]);

  if (!data) return null;

  return (
    <Modal
      onClose={onclose}
      isVisible={isVisible}
      showCloseButton={false}
      width="w-[95vw] md:w-[80%]"
    >
      <div className="flex flex-col">
        {/* <div className="relative"> */}
        {/* <Stepper
            steps={steps}
            currentStep={currentStep}
            handleCustomizeNextId={handleCustomizeNextId}
          /> */}
        {/* <RxCross1
            size={24}
            onClick={onclose}
            title="Click to close"
            className="cursor-pointer hover:scale-110 hover:text-primary absolute top-1 right-5 text-black"
          /> */}
        {/* </div> */}
        {currentStep === 1 && (
          <>
            <div className="flex justify-between pb-4 items-center">
              {/* <p
                className={`${bigShoulders.className} text-lg text-center font-black uppercase`}
              >
                <span className="text-primary">Customize</span> <br />
                it now
              </p> */}
              <Link href="/">
                <Image
                  width={100}
                  unoptimized
                  height={60}
                  alt="Logo"
                  src={
                    "https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
                  }
                  className="w-32 bg-black p-2"
                />
              </Link>
              <Stepper
                reduceSize={true}
                steps={customize}
                currentStep={currentCustomizeStep}
                handleCustomizeNextId={handleCustomizeNextId}
              />
              <RxCross1
                size={24}
                onClick={onclose}
                title="Click to close"
                className="cursor-pointer hover:scale-110 hover:text-primary text-black"
              />
            </div>
            <div className="bg-gray-300 h-[1px]" />
            <div className="w-full mx-auto text-center py-3">
              {renderStepContent()}
              <div
                className={`flex space-x-4 items-center ${
                  currentCustomizeStep === 0 ? "justify-end" : "justify-between"
                }`}
              >
                {currentCustomizeStep !== 0 && (
                  <p
                    onClick={handleCustomizePrevious}
                    className="bg-black text-white relative group hover:text-white hover:bg-primary flex hover:scale-110 transition cursor-pointer items-center gap-1 px-4 py-2 rounded-full"
                  >
                    <IoArrowBackCircle
                      title="Back"
                      className="text-2xl group-hover:text-white"
                    />
                    Back
                  </p>
                )}
                {currentCustomizeStep !== customize.length - 1 && (
                  <p
                    onClick={handleCustomizeNext}
                    className="bg-black text-white relative group hover:text-white hover:bg-primary flex hover:scale-110 transition cursor-pointer items-center gap-1 pl-4 pr-3 py-2 rounded-full"
                  >
                    Next
                    <IoArrowForwardCircle
                      title="Forward"
                      className="text-2xl group-hover:text-white"
                    />
                  </p>
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
