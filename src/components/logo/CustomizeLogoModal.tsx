import Header from "./Header";
import Modal from "../common/Modal";
import ImageText from "./screen/ImageText";
import { Fetch, Post } from "@/utils/axios";
import SavedLogos from "./screen/SavedLogos";
import LogoPosition from "./screen/LogoPosition";
import PrintEmbroidery from "./screen/PrintEmbroidery";
import { useState, useCallback, useEffect } from "react";
import { fetchRequest, getScreenActiveStatus } from "./general";
import TextEditor from "./screen/TextEditor";
import { InterationButton, NextButton, PrevButton } from "./Button";
import CustomisationDetails from "../customisation/screens/CustomisationDetails";

// describe the steps
const customize = [
  { label: "Logo / Text" },
  { label: "Select / Upload / Add Text" },
  { label: "Print / Embroidery" },
  { label: "Position" },
  { label: "Summary" },
];

const CustomizeLogoModal = ({
  data,
  onclose,
  isVisible,
}: {
  data: any;
  isVisible: boolean;
  onclose: () => void;
}) => {
  const [loading, setLoading] = useState(true);
  const [currentCustomizeStep, setCurrentCustomizeStep] = useState<number>(0); // used to determine the current step
  const [customizeData, setCustomizeData] = useState<any>({
    data,
    addtext: {},
    imageText: {},
    designImage: "",
    logoPosition: [],
    printEmbroidery: {},
  });
  const [localData, setLocalData] = useState<any>({
    textColours: [],
    modalData: {},
    savedLogos: [],
    artworkList: [],
    textFontFamily: [],
    artworkTemplate: [],
  });

  const setLocalState = (key: string, data: any) => {
    setLocalData((prevState: Record<string, any>) => ({
      ...prevState,
      [key]: data,
    }));
  };

  // func is called when go to next step
  const handleCustomizeNext = (id?: number) => {
    if (!getScreenActiveStatus(customizeData, currentCustomizeStep)) return;

    if (typeof id === "number") return setCurrentCustomizeStep(id);
    setCurrentCustomizeStep(currentCustomizeStep + 1);
  };

  // func is called when go to previous step
  const handleCustomizePrevious = () => {
    setCurrentCustomizeStep(currentCustomizeStep - 1);
  };

  // func is called when modal is opened
  const resetModal = useCallback(() => {
    setCustomizeData({
      data,
      addtext: {},
      imageText: {},
      designImage: "",
      logoPosition: {},
      printEmbroidery: {},
    });
    setCurrentCustomizeStep(0);
    // eslint-disable-next-line
  }, []);

  // render when user re-opens the logo modal
  useEffect(() => {
    if (isVisible) resetModal();
  }, [isVisible, resetModal]);

  // func is called when user click on add to cart button
  const handleAddToCart = async () => {};

  // filter images / logo images artworks
  const getFilteredResults = async (params: Record<string, any>) => {
    try {
      const url = "api/FilterArtworkList";
      const response: any = await Post(url, params, 5000, true);
      if (response.status)
        setLocalState("savedLogos", response?.artworkList || []);
      else setLocalState("savedLogos", []);
    } catch (error) {
      console.log("Error calling API:", error);
    }
  };

  // filter text artwork
  const getTextFilteredResults = async (params: Record<string, any>) => {
    try {
      const url = "api/FilterTextArtworkList";
      const response: any = await Post(url, params, 5000, true);
      if (response.status)
        setLocalState("artworkList", response?.artworkList || []);
      else setLocalState("artworkList", []);
    } catch (error) {
      console.log("Error calling API:", error);
    }
  };

  // to get artwork list & static data from server
  useEffect(() => {
    const fetchData = async () => {
      if (!isVisible || !data?.ProductID || !data?.color?.Html_Code) return;
      const requests = fetchRequest(data);
      await Promise.allSettled(
        requests.map(async ({ url, params, key }) => {
          try {
            const response: any = await Fetch(url, params, 5000, true, false);
            if (key === "savedLogos" && response?.status)
              return setLocalState(key, response?.artworkList ?? []);
            else if (key === "modalData") return setLocalState(key, response);
            else if (response?.status)
              setLocalState(key, response[key] || response);
          } catch (error) {
            console.error(`Error fetching ${key}:`, error);
          } finally {
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }
        })
      );
    };
    fetchData();
  }, [isVisible, data?.ProductID, data?.color?.Html_Code]);

  // to render screens as per customization steps
  const renderStepContent = useCallback(() => {
    if (!isVisible) return;
    switch (currentCustomizeStep) {
      case 0:
        return (
          <ImageText
            customizeData={customizeData}
            modalData={localData?.modalData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 1:
        return (
          <>
            {customizeData?.imageText?.id !== 1 ? (
              <TextEditor
                localData={localData}
                customizeData={customizeData}
                setCustomizeData={setCustomizeData}
                getFilteredResults={getTextFilteredResults}
              />
            ) : (
              <SavedLogos
                localData={localData}
                customizeData={customizeData}
                setCustomizeData={setCustomizeData}
                getFilteredResults={getFilteredResults}
              />
            )}
          </>
        );
      case 2:
        return (
          <PrintEmbroidery
            customizeData={customizeData}
            modalData={localData?.modalData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 3:
        return (
          <LogoPosition
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
            artWorkPositions={localData.artworkTemplate}
          />
        );
      case 4:
        return (
          <CustomisationDetails
            data={{ ...localData, ...customizeData, ...data }}
            setCurrentCustomizeStep={setCurrentCustomizeStep}
          />
        );
      default:
        return null;
    }
    // eslint-disable-next-line
  }, [currentCustomizeStep, customizeData, data, localData]);

  // render step navigation buttons
  const renderStepButtons = () => {
    const isNextButtonActive = getScreenActiveStatus(
      customizeData,
      currentCustomizeStep
    );
    if (currentCustomizeStep === customize.length - 1)
      return (
        <InterationButton
          resetModal={resetModal}
          handleAddToCart={handleAddToCart}
        />
      );
    return (
      <>
        {currentCustomizeStep !== 0 && (
          <PrevButton handleCustomizePrevious={handleCustomizePrevious} />
        )}
        <NextButton
          isDisabled={!isNextButtonActive}
          handleCustomizeNext={handleCustomizeNext}
        />
      </>
    );
  };

  if (!data || loading) return null;

  return (
    <Modal
      onClose={onclose}
      removePadding="p-0"
      isVisible={isVisible}
      showCloseButton={false}
      minHeight="min-h-[90vh]"
      width="w-[95vw] md:w-[90%]"
    >
      <div className="flex flex-col relative">
        <Header
          onClose={onclose}
          customize={customize}
          logo={localData?.modalData?.HeaderLogo}
          handleCustomizeNext={handleCustomizeNext}
          currentCustomizeStep={currentCustomizeStep}
          handleCustomizePrevious={handleCustomizePrevious}
        />
        <div className="w-full mx-auto text-center mt-4">
          <div className="px-4 mb-24">{renderStepContent()}</div>
          <div
            style={{ boxShadow: "0 20px 10px -25px rgba(0,0,0,0.45) inset" }}
            className={`flex w-full fixed bottom-0 rounded-b-xl overflow-hidden z-50 bg-white p-3 items-center ${
              currentCustomizeStep === 0 ? "justify-end" : "justify-between"
            }`}
          >
            {renderStepButtons()}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomizeLogoModal;
