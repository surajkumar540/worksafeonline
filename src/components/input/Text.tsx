import React, { FC } from "react";
import { bigShoulders } from "@/app/layout";

interface TextProps {
  field: {
    name?: string;
    label?: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    defaultValue?: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Text: FC<TextProps> = ({ field, handleInputChange, className }) => {
  return (
    <div className="relative">
      <label
        htmlFor={field.name}
        className={`block text-gray-700 text-xl font-extrabold mb-2 ${bigShoulders.className}`}
      >
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={field.name}
        name={field.name}
        value={field?.value}
        required={field.required}
        disabled={field.isDisabled}
        placeholder={field.placeholder}
        onChange={handleInputChange}
        className={`border border-gray-300 text-lg rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default Text;
