import Image from "next/image";
import ItalicButton from "./ItalicText";
import SelectColor from "./SelectColor";
import { bigShoulders } from "@/app/layout";
import TextAlignButtons from "./TextAlignButtons";
import TextSizeSelector from "./TextSizeSelector";
import { useEffect, useRef, useState } from "react";
import FontWeightSelector from "./FontWeightSelector";
import CharacterSpacingSelector from "./CharacterSpacingSelector";

interface AddTextProps {
  fonts: any;
  colors: any;
  modalData: any;
  savedTexts: any;
  setSelectedFilters: any;
  selectedFields: Record<string, string | undefined>;
}

const AddText: React.FC<AddTextProps> = ({
  fonts,
  colors,
  modalData,
  savedTexts,
  selectedFields,
  setSelectedFilters,
}) => {
  const index = 1;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isLogoSelected, setIsLogoSelected] = useState<any>({});
  const [localSavedLogos, setLocalSavedLogos] = useState(savedTexts);

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus(); // Focus the next input field
      }
    }
  };

  useEffect(() => {
    setLocalSavedLogos(savedTexts); // Update local state whenever prop changes
  }, [savedTexts]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedFilters((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (hexCode: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, color: hexCode }));
  };

  const handleFontChange = (font: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, font }));
    setDropdownOpen(false); // Close dropdown
  };

  const logoSelected = isLogoSelected?.Item_Code ? true : false;

  return (
    <>
      <div className="w-2/5">
        <div
          className={`border-2 rounded-2xl p-5 ${
            logoSelected
              ? "opacity-100 border-green-500"
              : "opacity-50 border-black"
          }`}
        >
          <div className="flex text-2xl uppercase font-semibold items-center justify-center mb-6">
            <span
              className={`border border-green-500 text-xl text-green-500 px-2 p-0.5 rounded-md ${bigShoulders.className}`}
            >
              Option 1
            </span>
            <span className={`px-2 text-black ${bigShoulders.className}`}>
              - CHOOSE MY TEXT
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {localSavedLogos &&
              localSavedLogos.length > 0 &&
              localSavedLogos.map((data: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setIsLogoSelected(data)}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`${
                      isLogoSelected?.Item_Code === data?.Item_Code
                        ? "border-4 border-green-500"
                        : "border-4 border-gray-100"
                    } rounded-lg transition h-24 cursor-pointer bg-white p-2 flex flex-col items-center justify-center`}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      <Image
                        src={data.LogoImage}
                        alt="Design"
                        width={100}
                        height={100}
                        sizes="100%"
                        className="object-contain w-full max-h-full max-w-full"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-left mt-1">
                    <p className="font-semibold line-clamp-1">
                      {data.Item_Code}
                    </p>
                    <p className="text-gray-500 line-clamp-1">
                      {data.Description}
                    </p>
                  </div>

                  {/* Tooltip */}
                  <div className="hidden group-hover:block absolute top-24 left-40 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 shadow-md rounded-lg z-30 w-48 p-2 pt-3">
                    <div className="text-xs text-left space-y-0.5">
                      <p className="font-semibold leading-3">
                        {data.name}
                        <span className="font-normal text-gray-500">
                          {data.Description} ({data.Item_Code})
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Cost - £{data.Sales_Price}
                      </p>{" "}
                      <p className="text-gray-600">Size - {data.Size}</p>{" "}
                      <p className="text-gray-600">Type - {data.ArtworkType}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex w-3/5 justify-between gap-5">
        <div className="w-3/5 flex flex-col space-y-2">
          <SelectColor
            colors={colors}
            modalData={modalData}
            handleColorChange={handleColorChange}
          />

          <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 flex justify-between mt-5 items-center gap-2">
              <h4
                className={`text-left font-bold whitespace-nowrap text-lg ${bigShoulders.className}`}
              >
                Select font:
              </h4>
              <div className="relative w-full">
                {/* Trigger Button */}
                <div
                  tabIndex={0}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  onBlur={() => setDropdownOpen(false)}
                  aria-expanded={dropdownOpen}
                  className="border border-gray-300 text-left px-3 py-2 text-sm line-clamp-1 cursor-pointer outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full"
                >
                  {selectedFields?.font || "Select Font"}
                </div>

                {/* Dropdown List */}
                {dropdownOpen && (
                  <ul
                    className="absolute left-0 top-full mt-1 h-48 overflow-auto w-full border border-gray-300 bg-white shadow-md rounded z-10"
                    role="listbox"
                  >
                    {fonts.map((font: any) => (
                      <li
                        tabIndex={0}
                        key={font.FontFamily}
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                        onClick={() => handleFontChange(font.FontFamily)}
                        style={{ fontFamily: font.FontFamily }}
                        className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                      >
                        {font.FontFamily}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

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
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  ref={(el: any) => (inputRefs.current[index] = el)} // Assign input ref
                  className="border w-full text-sm border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 rounded-full px-3 py-2 outline-none"
                />
                <TextSizeSelector
                  hideText={true}
                  size={`textSize${index + 1}`}
                  setSelectedFilters={setSelectedFilters}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 my-auto min-h-full">
          <div className="space-y-2">
            <div className="flex w-full flex-wrap gap-3 mb-5 justify-center items-center">
              <CharacterSpacingSelector
                space={`spacing${index + 1}`}
                setSelectedFilters={setSelectedFilters}
              />
              <FontWeightSelector
                font={`fontWeight${index + 1}`}
                setSelectedFilters={setSelectedFilters}
              />
              <div className="w-full flex justify-between">
                <ItalicButton
                  font={`fontStyle${index + 1}`}
                  setSelectedFilters={setSelectedFilters}
                />
                <TextAlignButtons
                  font={`textAlign${index + 1}`}
                  setSelectedFilters={setSelectedFilters}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              color: selectedFields?.color,
              fontFamily: selectedFields?.font,
            }}
            className="col-span-2 flex-col rounded-lg py-10 min-h-full bg-gray-100 flex justify-center items-center"
          >
            <div className="relative w-fit">
              <div className={`flex flex-col`}>
                <span
                  className={`${selectedFields?.textSize1} ${selectedFields?.fontStyle1} ${selectedFields?.textAlign1} ${selectedFields?.spacing1} ${selectedFields?.fontWeight1}`}
                >
                  {selectedFields?.textLine1}
                </span>
                <span
                  className={`${selectedFields?.textSize2} ${selectedFields?.fontStyle2} ${selectedFields?.textAlign2} ${selectedFields?.spacing2} ${selectedFields?.fontWeight2}`}
                >
                  {selectedFields?.textLine2}
                </span>
                <span
                  className={`${selectedFields?.textSize3} ${selectedFields?.fontStyle3} ${selectedFields?.textAlign3} ${selectedFields?.spacing3} ${selectedFields?.fontWeight3}`}
                >
                  {selectedFields?.textLine3}
                </span>
              </div>
            </div>
          </div>
          <textarea
            rows={4}
            className="w-full border mt-5 border-gray-300 text-xs rounded-lg p-2 text-gray-800 placeholder-gray-400 outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
            placeholder="Add Notes (optional)..."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default AddText;
