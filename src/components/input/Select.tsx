import React, { FC } from "react";
import { bigShoulders } from "@/app/layout";

interface Option {
  value: string | number;
  label: string | number;
}

interface SelectProps {
  field: {
    name?: string;
    label?: string;
    value?: string;
    required?: boolean;
    options?: Option[];
    placeholder?: string;
    isDisabled?: boolean;
    isMultiple?: boolean;
    defaultValue?: string | number;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select: FC<SelectProps> = ({ field, handleInputChange, className }) => {
  return (
    <div className="relative">
      <label
        htmlFor={field.name}
        className={`block text-gray-700 text-xl font-extrabold mb-2 ${bigShoulders.className}`}
      >
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={field.name}
        name={field.name}
        required={field.required}
        value={field?.value ?? ""}
        disabled={field.isDisabled}
        multiple={field.isMultiple}
        onChange={handleInputChange}
        className={`border border-gray-300 rounded-full p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className} ${field?.isMultiple && "h-36"
          }`}
      >
        {field.placeholder && field.options && field.options.length > 0 && (
          <option value="" disabled>
            {field.placeholder}
          </option>
        )}
        {field.options && field.options.length > 0 ? (
          field.options?.map((option) => (
            <option key={option.value} value={option.label}>
              {option.value}
            </option>
          ))
        ) : (
          <option value="" disabled selected>
            No Data Available
          </option>
        )}
      </select>
    </div>
  );
};

export default Select;
