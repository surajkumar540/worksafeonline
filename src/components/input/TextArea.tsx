import React, { FC } from "react";
import { bigShoulders } from "@/app/layout";

interface TextAreaProps {
  field: {
    name?: string;
    value?: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    defaultValue?: string;
    rows?: number; // Added rows prop for textarea
  };
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const TextArea: FC<TextAreaProps> = ({
  field,
  handleInputChange,
  className,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={field.name}
        className={`block text-gray-700 text-xl font-extrabold mb-2 ${bigShoulders.className}`}
      >
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={field.name}
        name={field.name}
        value={field.value}
        required={field.required}
        disabled={field.isDisabled}
        placeholder={field.placeholder}
        onChange={handleInputChange}
        rows={field.rows ?? 4} // Default rows set to 4 if not specified
        className={`border border-gray-300 rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      />
    </div>
  );
};

export default TextArea;
