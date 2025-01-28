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

const CustomizeLogoModal = ({
  data,
  onclose,
  isVisible,
}: {
  data: any;
  isVisible: boolean;
  onclose: () => void;
}) => {
  const [fonts, setFonts] = useState([]);
  const [colors, setColors] = useState([]);
  const [modalData, setModalData] = useState<any>({});
  const [savedLogos, setSavedLogos] = useState<any>([]);
  const [savedTexts, setSavedTexts] = useState<any>([]);
  const [artWorkPositions, setArtWorkPosition] = useState([]);
  const [currentCustomizeStep, setCurrentCustomizeStep] = useState<number>(0); // used to determine the current step
  const [customizeData, setCustomizeData] = useState<any>({
    addtext: {},
    imageText: {},
    designImage: "",
    logoPosition: [],
    printEmbroidery: {},
  }); // used to determine the current state

  // describe the steps
  const customize = [
    { label: "Logo / Text" },
    { label: "Select / Upload / Add Text" },
    { label: "Print / Embroidery" },
    { label: "Position" },
    { label: "Summary" },
  ];

  const fetchCustomization = useCallback(async () => {
    if (!data?.ProductID) return;
    const url = "api/CustomizeLogoPopUp?style=" + data.ProductID;
    const response: any = await Fetch(url, {}, 5000, true, false);
    if (response) setModalData(response);
  }, [data?.ProductID]);

  useEffect(() => {
    fetchCustomization();
  }, [fetchCustomization]);

  // func is called when go to next step
  const handleCustomizeNext = (id?: number) => {
    if (!getScreenActiveStatus()) return;

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
      addtext: {},
      imageText: {},
      designImage: "",
      logoPosition: {},
      printEmbroidery: {},
    });
    setCurrentCustomizeStep(0);
  }, []);

  // func is called when user click on add to cart button
  const handleAddToCart = async () => {};

  // render when user re-opens the logo modal
  useEffect(() => {
    if (isVisible) resetModal();
  }, [isVisible, resetModal]);

  useEffect(() => {
    const fetchTexts = async (url: string, state: any) => {
      try {
        const param = { style: data?.ProductID, search: "" };
        const response: any = await Fetch(url, param, 5000, true, false);
        if (response?.status) state(response.artworkList);
      } catch (error) {
        console.log("Error fetching artwork: " + error);
      }
    };
    if (isVisible && data?.ProductID) {
      const url = "api/ArtworkList";
      const url2 = "api/TextArtworkList";
      fetchTexts(url, setSavedLogos);
      fetchTexts(url2, setSavedTexts);
    }
  }, [isVisible, data?.ProductID]);

  const getFilteredResults = async (params: Record<string, any>) => {
    try {
      const url = "api/FilterArtworkList";
      const response: any = await Post(url, params, 5000, true);
      if (response.status) setSavedLogos(response?.artworkList || []);
    } catch (error) {
      console.log("Error calling API:", error);
    }
  };

  const getTextFilteredResults = async (params: Record<string, any>) => {
    try {
      const url = "api/FilterTextArtworkList";
      const response: any = await Post(url, params, 5000, true);
      if (response.status) setSavedTexts(response?.artworkList || []);
    } catch (error) {
      console.log("Error calling API:", error);
    }
  };

  useEffect(() => {
    const getDesignPosition = async (param: any) => {
      try {
        console.log(param);
        const url =
          "api/DesignProductPositionTemplate?artwork=AW10808&product=BS955";
        const response: any = await Fetch(url, {}, 5000, true);
        if (response.status) setArtWorkPosition(response.artworkTemplate);
      } catch (error) {
        console.log("Error fetching artwork: " + error);
      }
    };
    if (isVisible) getDesignPosition({});
  }, [isVisible, data?.ProductID]);

  useEffect(() => {
    const getColors = async () => {
      try {
        const url = "api/ProductTextColours";
        const params = {
          product: data.ProductID,
          colour: data?.color?.Html_Code,
        };
        const response: any = await Fetch(url, params, 5000, true);
        if (response.status) setColors(response.textColours);
      } catch (error) {
        console.log("Error fetching artwork: " + error);
      }
    };
    if (isVisible && data.ProductID) getColors();
    // eslint-disable-next-line
  }, [isVisible, data.ProductID]);

  useEffect(() => {
    const getFonts = async () => {
      try {
        const url = "api/ProductTextFontFamily";
        const params = { product: data.ProductID };
        const response: any = await Fetch(url, params, 5000, true);
        if (response.status) setFonts(response.textFontFamily);
      } catch (error) {
        console.log("Error fetching artwork: " + error);
      }
    };
    if (isVisible && data.ProductID) getFonts();
  }, [isVisible, data.ProductID]);

  // to render screens as per customization steps
  const renderStepContent = useCallback(() => {
    switch (currentCustomizeStep) {
      case 0:
        return (
          <ImageText
            modalData={modalData}
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 1:
        return (
          <>
            {customizeData?.imageText?.id !== 1 ? (
              <TextEditor
                fonts={fonts}
                colors={colors}
                modalData={modalData}
                savedTexts={savedTexts}
                setCustomizeData={setCustomizeData}
                getFilteredResults={getTextFilteredResults}
                customizeData={{ ...data, ...customizeData }}
              />
            ) : (
              <SavedLogos
                modalData={modalData}
                savedLogos={savedLogos}
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
            modalData={modalData}
            customizeData={customizeData}
            setCustomizeData={setCustomizeData}
          />
        );
      case 3:
        return (
          <LogoPosition
            customizeData={customizeData}
            artWorkPositions={artWorkPositions}
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
  }, [currentCustomizeStep, customizeData, data, savedLogos, savedTexts]);

  // func is called to check the current screen data is available or not
  const getScreenActiveStatus = () => {
    const isNextButtonActive =
      (currentCustomizeStep === 0 && customizeData?.imageText?.id) ||
      (currentCustomizeStep === 1 &&
        (customizeData?.designImage || customizeData?.addtext?.textLine1)) ||
      (currentCustomizeStep === 2 && customizeData?.printEmbroidery?.id) ||
      (currentCustomizeStep === 3 && customizeData?.logoPosition.length > 0);
    return isNextButtonActive;
  };

  // render step navigation buttons
  const renderStepButtons = () => {
    const isNextButtonActive = getScreenActiveStatus();

    if (currentCustomizeStep === 0)
      return (
        <NextButton
          isDisabled={!isNextButtonActive}
          handleCustomizeNext={handleCustomizeNext}
        />
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
        <PrevButton handleCustomizePrevious={handleCustomizePrevious} />
        <NextButton
          isDisabled={!isNextButtonActive}
          handleCustomizeNext={handleCustomizeNext}
        />
      </>
    );
  };

  if (!data) return null;

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
          logo={modalData?.HeaderLogo}
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
