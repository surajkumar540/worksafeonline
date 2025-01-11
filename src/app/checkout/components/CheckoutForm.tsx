"use client";

import { formFields } from "./formType";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";
import Select from "@/components/input/Select";
import { useEffect, useRef, useState } from "react";

export const Accordion = ({
  Icon,
  title,
  children,
  activateScreen,
}: {
  title: string;
  activateScreen: number;
  Icon: React.ElementType;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(activateScreen === 0 ? true : false);

  useEffect(() => {
    setIsOpen(
      (activateScreen === 1 && title === "Billing Details") ||
        (activateScreen === 2 && title === "Delivery Details") ||
        (activateScreen === 3 && title === "Order Details") ||
        (activateScreen === 0 && title === "Your Login ID")
        ? true
        : false
    );
  }, [activateScreen, title]);

  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="rounded-lg md:shadow-md border border-gray-300 md:border-gray-100 mb-5">
      <button
        className={`w-full px-3 md:px-5 py-2.5 md:py-3 flex justify-between items-center text-left md:text-lg font-bold ${bigShoulders.className}`}
        onClick={toggle}
      >
        <h2
          className={`uppercase text-lg lg:text-2xl flex gap-2 items-center text-[#F06022] font-extrabold ${bigShoulders.className}`}
        >
          <Icon /> {title}
        </h2>
        <span className="text-2xl md:text-4xl">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px", // Dynamically set height
        }}
      >
        <div className="p-3 md:p-5">{children}</div>
      </div>
    </div>
  );
};

const CheckoutForm = ({
  icon,
  title,
  errors,
  formData,
  setFormData,
  activateScreen,
  setActivateScreen,
}: {
  icon: any;
  title: any;
  errors: any;
  formData: any;
  setFormData: any;
  activateScreen: number;
  setActivateScreen: any;
}) => {
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <Accordion title={title} Icon={icon} activateScreen={activateScreen}>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
            <Text
              field={{
                ...formFields[2],
                value: formData[formFields[2].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[2].name]}
            />
            <Text
              field={{
                ...formFields[9],
                value: formData[formFields[9].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[9].name]}
            />
            <Text
              field={{
                ...formFields[10],
                value: formData[formFields[10].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[10].name]}
            />
          </div>
          <h3
            className={`uppercase mt-5 text-2xl lg:text-xl flex items-center font-extrabold ${bigShoulders.className}`}
          >
            Address details
          </h3>
          <div className="grid mt-5 grid-cols-1 lg:grid-cols-4 gap-5 items-center">
            <Text
              field={{
                ...formFields[4],
                value: formData[formFields[4].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[4].name]}
            />
            <Text
              field={{
                ...formFields[6],
                value: formData[formFields[6].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[6].name]}
            />
            <Text
              field={{
                ...formFields[7],
                value: formData[formFields[7].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[7].name]}
            />
            <div className="hidden lg:block"></div>
            <Text
              field={{
                ...formFields[8],
                value: formData[formFields[8].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[8].name]}
            />
            <Select
              field={{
                ...formFields[3],
                value: formData[formFields[3].name] || "",
              }}
              handleInputChange={handleInputChange}
              error={errors[formFields[3].name]}
            />
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <button
              className="w-full px-6 py-3 text-white rounded-full bg-[#F06022] hover:bg-[#F06022]/80 font-medium transition-colors"
              onClick={() => {
                if (activateScreen === 1) setActivateScreen(2);
                if (activateScreen === 2) setActivateScreen(3);
              }}
            >
              Continue With Express Checkout
            </button>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default CheckoutForm;
