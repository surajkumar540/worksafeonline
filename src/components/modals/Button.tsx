import { bigShoulders } from "@/app/layout";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

// Define type for button handlers
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
      className="bg-black text-white relative group hover:text-white hover:bg-primary flex transition cursor-pointer items-center gap-1 px-4 py-2 rounded-full"
    >
      <IoArrowBackCircle
        title="Back"
        className="text-2xl group-hover:text-white"
      />
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
      className={`bg-black disabled:cursor-not-allowed text-white relative group hover:text-white flex transition cursor-pointer items-center gap-1 pl-4 pr-3 py-2 rounded-full ${
        isDisabled ? "" : "hover:bg-primary"
      }`}
    >
      Next
      <IoArrowForwardCircle
        title="Forward"
        className="text-2xl group-hover:text-white"
      />
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
