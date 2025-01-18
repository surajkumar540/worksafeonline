import Link from "next/link";
import Image from "next/image";
import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import { useState, useCallback } from "react";
import Stepper from "../customisation/Stepper";
import ImageText from "../customisation/screens/ImageText";
import SavedLogos from "../customisation/screens/SavedLogos";
import LogoPosition from "../customisation/screens/LogoPosition";
import TextEditor from "../customisation/uploadDesign/TextEditor";
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

  const customize = [
    { label: "Logo / Text" },
    { label: "Select / Upload / Add Text" },
    { label: "Print / Embroidery" },
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
      removePadding="p-0"
      isVisible={isVisible}
      showCloseButton={false}
      width="w-[95vw] md:w-[80%]"
    >
      <div className="flex flex-col relative">
        {currentStep === 1 && (
          <>
            <div className="flex justify-between sticky z-50 top-0 p-4 bg-white shadow-md items-center">
              <Link href="/">
                <Image
                  priority
                  alt="Logo"
                  width={100}
                  unoptimized
                  height={60}
                  className="w-32 bg-black p-1"
                  src="https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
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
            <div className="w-full mx-auto text-center mt-4">
              <div className="px-4 mb-24">{renderStepContent()}</div>
              <div
                style={{
                  boxShadow: "0 20px 10px -25px rgba(0,0,0,0.45) inset",
                }}
                className={`flex w-full fixed bottom-0 rounded-b-xl overflow-hidden z-50 bg-white p-4 items-center ${
                  currentCustomizeStep === 0 ? "justify-end" : "justify-between"
                }`}
              >
                {currentCustomizeStep !== 0 && (
                  <p
                    onClick={handleCustomizePrevious}
                    className="bg-black text-white relative group hover:text-white hover:bg-primary flex transition cursor-pointer items-center gap-1 px-4 py-2 rounded-full"
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
                    className="bg-black text-white relative group hover:text-white hover:bg-primary flex transition cursor-pointer items-center gap-1 pl-4 pr-3 py-2 rounded-full"
                  >
                    Next
                    <IoArrowForwardCircle
                      title="Forward"
                      className="text-2xl group-hover:text-white"
                    />
                  </p>
                )}
                {currentCustomizeStep === customize.length - 1 && (
                  <div className="flex gap-2 justify-end w-full">
                    <button
                      type="button"
                      onClick={() => setCurrentCustomizeStep(0)}
                      className={`w-fit flex items-center justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-lg font-bold bg-primary/80 text-black ${bigShoulders.className}`}
                    >
                      Add Another Logo
                    </button>
                    <button
                      type="button"
                      // onClick={handleSaveCustomization}
                      className={`w-fit flex items-center justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-lg font-bold bg-primary/80 text-black ${bigShoulders.className}`}
                    >
                      Save & View Product
                    </button>
                  </div>
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
