import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import Stepper from "../customisation/Stepper";

interface HeaderProps {
  customize: any; // Adjust type to match `customize` object structure
  onClose: () => void;
  currentCustomizeStep: number;
  handleCustomizePrevious: () => void;
  handleCustomizeNext: (id?: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  onClose,
  customize,
  currentCustomizeStep,
  handleCustomizeNext,
  handleCustomizePrevious,
}) => {
  const handleStepChange = (id?: number) => {
    try {
      handleCustomizeNext(id);
    } catch (error) {
      console.error("Error changing step:", error);
    }
  };

  return (
    <div className="flex justify-between sticky z-50 top-0 p-4 bg-white shadow-md items-center">
      {/* Logo Link */}
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

      {/* Stepper */}
      {customize?.length > 0 ? (
        <Stepper
          reduceSize={true}
          steps={customize}
          currentStep={currentCustomizeStep}
          handleCustomizeNextId={handleStepChange}
          handleCustomizePrevious={handleCustomizePrevious}
        />
      ) : (
        <div className="text-gray-500">No steps available</div>
      )}

      {/* Close Button */}
      <RxCross1
        size={24}
        onClick={onClose}
        title="Click to close"
        className="cursor-pointer hover:scale-110 hover:text-primary text-black"
      />
    </div>
  );
};

export default Header;
