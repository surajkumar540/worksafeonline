import { useEffect } from "react";

const SearchModal = ({
  isOpen,
  handleToggle,
}: {
  isOpen: boolean;
  handleToggle: () => void;
}) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("relative", "overflow-hidden");
    else document.body.classList.remove("relative", "overflow-hidden");
    return () => document.body.classList.remove("relative", "overflow-hidden");
  }, [isOpen]);
  return (
    <>
      <div
        className={`absolute top-0 right-0 h-full text-black bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-full md:w-1/2 lg:w-[30%]`}
      ></div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[100]"
          onClick={handleToggle}
        ></div>
      )}
    </>
  );
};

export default SearchModal;
