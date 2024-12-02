import { includes } from "@/utils/polyfills";

const extractColorFromDescription = (description: string) => {
  return description.split("/").map((color) => color.trim());
};

const ProductColors = ({ productColors }: { productColors: [] }) => {
  return (
    <div>
      <p className="mt-4 font-semibold">Color</p>
      <div className="mt-2 flex flex-wrap gap-2 items-center">
        {productColors.map((color: any) => {
          const [primaryColor, secondaryColor] =
            (color.Html_Code && color.Html_Code?.split("/")) ||
            extractColorFromDescription(color.Colour_Description);
          return (
            <div
              key={color.Colour_Sequence_No}
              title={color.Colour_Description}
              className="relative group cursor-pointer"
            >
              <div className="w-8 h-8 hover:scale-90 transition-all duration-200 ease-linear rounded-full overflow-hidden flex relative">
                <div
                  className={`flex justify-center items-center ${
                    includes(["#ffffff", "#FFFFFF"], primaryColor) &&
                    "bg-gray-50"
                  } ${primaryColor && secondaryColor ? "w-4" : "w-8"} h-8`}
                  style={{
                    backgroundColor:
                      primaryColor &&
                      !includes(["#ffffff", "#FFFFFF"], primaryColor)
                        ? primaryColor
                        : "",
                  }}
                >
                  {includes(["#ffffff", "#FFFFFF"], primaryColor) && "W"}
                </div>
                {secondaryColor && (
                  <div
                    className="w-4 h-8"
                    style={{ backgroundColor: secondaryColor }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColors;
