import React, { FC } from "react";
import { bigShoulders } from "@/app/layout";
import ErrorText from "@/app/checkout/components/Error";

interface NumericStringInputProps {
  error?: string;
  field: {
    name: string;
    label: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    maxLength?: number; // Maximum length for the input
    defaultValue?: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const NumericStringInput: FC<NumericStringInputProps> = ({
  error,
  field,
  handleInputChange,
  className,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={field.name}
        className={`block text-gray-700 text-lg font-extrabold mb-2 ${bigShoulders.className}`}
      >
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={field.name}
        name={field.name}
        inputMode="numeric"
        value={field?.value}
        required={field.required}
        disabled={field.isDisabled}
        placeholder={field.placeholder}
        defaultValue={field.defaultValue}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (
            /^[0-9]*$/.test(inputValue) &&
            (!field.maxLength || inputValue.length <= field.maxLength)
          ) {
            handleInputChange(e);
          }
        }}
        maxLength={field.maxLength}
        className={`border border-gray-300 text-lg rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
      />
      <ErrorText error={error} />
    </div>
  );
};

export default NumericStringInput;
