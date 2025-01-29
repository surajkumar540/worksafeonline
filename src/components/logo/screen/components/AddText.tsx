import html2canvas from "html2canvas";
import Gallery from "../common/Gallery";
import FontSelector from "./FontSelector";
import { bigShoulders } from "@/app/layout";
import { useEffect, useRef, useState } from "react";
import ItalicButton from "../../../customisation/uploadDesign/ItalicText";
import SelectColor from "../../../customisation/uploadDesign/SelectColor";
import TextAlignButtons from "../../../customisation/uploadDesign/TextAlignButtons";
import TextSizeSelector from "../../../customisation/uploadDesign/TextSizeSelector";
import FontWeightSelector from "../../../customisation/uploadDesign/FontWeightSelector";
import CharacterSpacingSelector from "../../../customisation/uploadDesign/CharacterSpacingSelector";
import { Post } from "@/utils/axios";
import { toast } from "react-toastify";

interface AddTextProps {
  localData: any;
  updateForm: any;
  customizeData: any;
  selectedFields: any;
  setCustomizeData: any;
}

const AddText: React.FC<AddTextProps> = ({
  localData,
  updateForm,
  customizeData,
  selectedFields,
  setCustomizeData,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isLogoSelected, setIsLogoSelected] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const textLines = ["textLine1", "textLine2", "textLine3"] as const;

  useEffect(() => {
    if (customizeData?.design?.Item_Code && !customizeData?.designImage)
      setIsLogoSelected(customizeData?.design);
    if (!isLogoSelected)
      setCustomizeData((prev: any) => ({ ...prev, design: {} }));
  }, [
    customizeData?.design?.Item_Code,
    isLogoSelected,
    customizeData?.designImage,
  ]);

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        setCurrentIndex(
          inputRefs.current.findIndex((ref) => ref === document.activeElement)
        );
        nextInput.focus(); // Focus the next input field
      }
    }
  };

  const handleConvertAndUpload = async (): Promise<any> => {
    if (!divRef.current) return false; // Return false if div is missing

    try {
      setLoading(true);
      const canvas = await html2canvas(divRef.current);
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );

      if (!blob) return false; // Return false if blob creation fails

      const formData = new FormData();
      formData.append("image", blob, "text-image.png");

      const response: any = await Post(
        "api/UploadArtworkImage",
        formData,
        20000,
        true
      );

      if (response?.length > 0 && response[0]) {
        setCustomizeData((prev: any) => ({
          ...prev,
          designImage: response[0],
        }));
        return response[0];
      }

      return false; // Return false if response is invalid
    } catch (error) {
      console.error("Failed to set selected image:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (name === "textLine1") setCurrentIndex(0);
    else if (name === "textLine2") setCurrentIndex(1);
    else if (name === "textLine3") setCurrentIndex(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleCurrentIndex(e);
    updateForm([name], "TextLine", value);
  };

  const handleColorChange = (hexCode: string) => {
    updateForm("textLine1", "TextColour", hexCode);
    updateForm("textLine2", "TextColour", hexCode);
    updateForm("textLine3", "TextColour", hexCode);
  };

  const uploadNext = async () => {
    const resp = await handleConvertAndUpload();
    if (resp) {
      const url = "api/AddTextToProduct";
      const selectedFieldsArray: any = Object.values(selectedFields).map(
        (field: any) => ({ ...field, UploadImage: resp ?? "" })
      );
      const response: any = await Post(url, selectedFieldsArray, 5000, true);
      if (response.status) toast.success(response.message);
    }
  };

  return (
    <>
      <div className="w-2/5">
        <Gallery
          field="artworkList"
          localData={localData}
          isLogoSelected={isLogoSelected}
          selectedOption={selectedOption}
          setCustomizeData={setCustomizeData}
        />
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-5">
          <div className="w-3/5 flex flex-col space-y-2">
            <SelectColor
              localData={localData}
              handleColorChange={handleColorChange}
            />
            <FontSelector
              localData={localData}
              updateForm={updateForm}
              selectedFields={selectedFields}
            />
            {/* Text Inputs */}
            <h4
              className={`text-left font-bold text-lg ${bigShoulders.className}`}
            >
              Add Text:
            </h4>
            <div className="space-y-2">
              {["textLine1", "textLine2", "textLine3"].map((name, index) => (
                <div
                  key={name}
                  className="flex gap-2 justify-center items-center"
                >
                  <input
                    type="text"
                    maxLength={30}
                    name={name}
                    placeholder={`Enter Text ${name.replace(
                      "textLine",
                      "Line "
                    )} ${index > 0 ? "(optional)" : ""}`}
                    onChange={handleInputChange}
                    onFocus={handleCurrentIndex}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                    ref={(el: any) => (inputRefs.current[index] = el)} // Assign input ref
                    className="border w-full text-sm border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full px-3 py-2 outline-none"
                  />
                  <TextSizeSelector
                    sizeKey={name}
                    hideText={true}
                    updateForm={updateForm}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/5 my-auto min-h-full">
            <div className="space-y-2">
              <div className="flex w-full flex-wrap gap-3 mb-5 justify-center items-center">
                <CharacterSpacingSelector
                  updateForm={updateForm}
                  selectedFields={selectedFields}
                  space={`textLine${currentIndex + 1}`}
                />
                <FontWeightSelector
                  updateForm={updateForm}
                  selectedFields={selectedFields}
                  font={`textLine${currentIndex + 1}`}
                />
                <div className="w-full flex justify-between">
                  <ItalicButton
                    updateForm={updateForm}
                    selectedFields={selectedFields}
                    italic={`textLine${currentIndex + 1}`}
                  />
                  <TextAlignButtons
                    updateForm={updateForm}
                    selectedFields={selectedFields}
                    align={`textLine${currentIndex + 1}`}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                color: selectedFields.textLine1.TextColour || "inherit",
                fontFamily: selectedFields.textLine1.FontFamily || "inherit",
              }}
              ref={divRef}
              className="col-span-2 rounded-lg py-10 min-h-full bg-gray-100"
            >
              <div className="relative flex flex-col w-fit mx-auto">
                {textLines.map((line) => {
                  const textData = selectedFields[line];

                  return (
                    textData.TextLine && (
                      <span
                        key={line}
                        className={`${textData.TextSize || ""} ${
                          textData.TextItalic ? "italic" : ""
                        } 
            ${textData.TextAlign || ""} ${textData.TextSpacing || ""} ${
                          textData.FontWeight || ""
                        }`}
                      >
                        {textData.TextLine}
                      </span>
                    )
                  );
                })}
              </div>
            </div>
            <textarea
              rows={4}
              className="w-full border mt-5 border-gray-300 text-xs rounded-lg p-2 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
              placeholder="Add Notes (optional)..."
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          disabled={loading}
          onClick={uploadNext}
          className={`bg-blue-500 uppercase text-white w-full text-xl mt-4 px-6 py-1 font-semibold rounded-md ${bigShoulders.className}`}
        >
          Upload New Text
        </button>
      </div>
    </>
  );
};

export default AddText;
