import React, { FC } from "react";
import { bigShoulders } from "@/app/layout";
import ErrorText from "@/app/checkout/components/Error";

interface TextProps {
  field: {
    name?: string;
    label?: string;
    value?: string;
    pattern?: string;
    required?: boolean;
    maxLength?: number;
    placeholder?: string;
    isDisabled?: boolean;
    defaultValue?: string;
  };
  error?: string;
  className?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Text: FC<TextProps> = ({
  error,
  field,
  className,
  handleInputChange,
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
        value={field?.value}
        pattern={field.pattern}
        required={field.required}
        maxLength={field.maxLength}
        disabled={field.isDisabled}
        placeholder={field.placeholder}
        onChange={handleInputChange}
        className={`border border-gray-300 text-lg rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
      />
      <ErrorText error={error} />
    </div>
  );
};

export default Text;
