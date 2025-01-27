import { bigShoulders } from "@/app/layout";
// import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

type ButtonHandler = () => void;

interface PrevButtonProps {
  handleCustomizePrevious: ButtonHandler;
}

export const PrevButton: React.FC<PrevButtonProps> = ({
  handleCustomizePrevious,
}) => {
  return (
    <button
      onClick={handleCustomizePrevious}
      className={`bg-green-500 text-white uppercase relative text-xl group hover:text-white hover:bg-green-700 flex transition cursor-pointer items-center gap-1 px-6 py-1.5 rounded-full ${bigShoulders.className}`}
    >
      {/* <IoArrowBackCircle
        title="Back"
        className="text-2xl group-hover:text-white"
      /> */}
      Back
    </button>
  );
};

interface NextButtonProps {
  isDisabled: boolean;
  handleCustomizeNext: ButtonHandler;
}

export const NextButton: React.FC<NextButtonProps> = ({
  isDisabled,
  handleCustomizeNext,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleCustomizeNext}
      className={`${
        bigShoulders.className
      } disabled:cursor-none text-white relative group flex transition cursor-pointer items-center gap-1 px-6 text-xl py-1.5 uppercase rounded-full ${
        isDisabled ? "bg-gray-500" : "hover:bg-green-700 bg-green-500"
      }`}
    >
      Next
      {/* <IoArrowForwardCircle
        title="Forward"
        className="text-2xl group-hover:text-white"
      /> */}
    </button>
  );
};

interface InterationButtonProps {
  resetModal: ButtonHandler;
  handleAddToCart: ButtonHandler;
}

export const InterationButton: React.FC<InterationButtonProps> = ({
  resetModal,
  handleAddToCart,
}) => {
  return (
    <div className="flex gap-2 justify-end w-full">
      <button
        type="button"
        onClick={resetModal}
        className={`w-fit flex items-center justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-lg font-bold bg-primary/80 text-black ${bigShoulders.className}`}
      >
        Add Another Logo
      </button>
      <button
        type="button"
        onClick={handleAddToCart}
        className={`w-fit flex items-center justify-center px-10 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-lg font-bold bg-primary/80 text-black ${bigShoulders.className}`}
      >
        Add to cart
      </button>
    </div>
  );
};
