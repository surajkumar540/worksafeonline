import Header from "./Header";
import Modal from "../common/Modal";
import { Fetch, Post } from "@/utils/axios";
import { useState, useCallback, useEffect } from "react";
import ImageText from "../customisation/screens/ImageText";
import SavedLogos from "../customisation/screens/SavedLogos";
import LogoPosition from "../customisation/screens/LogoPosition";
import TextEditor from "../customisation/uploadDesign/TextEditor";
import { InterationButton, NextButton, PrevButton } from "./Button";
import PrintEmbroidery from "../customisation/screens/PrintEmbroidery";
import CustomisationDetails from "../customisation/screens/CustomisationDetails";

import { fetchRequest, getScreenActiveStatus } from "./general";

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
    setLocalData((prevState: any) => ({ ...prevState, [key]: data }));
  };
  console.log(localData);

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

  const getFilteredResults = async (params: Record<string, any>) => {
    try {
      const url = "api/FilterArtworkList";
      const response: any = await Post(url, params, 5000, true);
      if (response.status)
        setLocalState("savedLogos", response?.artworkList || []);
    } catch (error) {
      console.log("Error calling API:", error);
    }
  };

  const getTextFilteredResults = async (params: Record<string, any>) => {
    try {
      const url = "api/FilterTextArtworkList";
      const response: any = await Post(url, params, 5000, true);
      if (response.status)
        setLocalState("artworkList", response?.artworkList || []);
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
            setLoading(false);
          }
        })
      );
    };
    fetchData();
  }, [isVisible, data?.ProductID, data?.color?.Html_Code]);

  // to render screens as per customization steps
  const renderStepContent = useCallback(() => {
    switch (currentCustomizeStep) {
      case 0:
        return (
          <ImageText
            modalData={localData?.modalData}
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 1:
        return (
          <>
            {customizeData?.imageText?.id !== 1 ? (
              <TextEditor
                colors={localData.textColours}
                fonts={localData.textFontFamily}
                modalData={localData?.modalData}
                savedTexts={localData.artworkList}
                setCustomizeData={setCustomizeData}
                getFilteredResults={getTextFilteredResults}
                customizeData={{ ...data, ...customizeData }}
              />
            ) : (
              <SavedLogos
                modalData={localData?.modalData}
                savedLogos={localData.savedLogos}
                setCustomizeData={setCustomizeData}
                getFilteredResults={getFilteredResults}
                customizeData={{ ...data, ...customizeData }}
              />
            )}
          </>
        );
      case 2:
        return (
          <PrintEmbroidery
            modalData={localData?.modalData}
            customizeData={customizeData}
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
            data={{ ...data, ...customizeData }}
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
