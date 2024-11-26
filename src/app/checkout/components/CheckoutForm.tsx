"use client";

import { useState } from "react";
import { formFields } from "./formType";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";

const CheckoutForm = () => {
  const [formData, setFormData] = useState<any>({});
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleInputChange = (e: any) => {
    const { name, type, value, checked, options, multiple, files } = e.target;
    if (multiple) {
      const selectedOptions = Array.from(options)
        .filter((option: any) => option.selected)
        .map((option: any) => option.value);
      setFormData((prev: any) => ({ ...prev, [name]: selectedOptions }));
    } else
      setFormData((prev: any) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
  };

  return (
    <div>
      <h2
        className={`uppercase md:text-xl lg:text-3xl flex items-center font-extrabold ${bigShoulders.className}`}
      >
        billing details
      </h2>
      <form onSubmit={handleSubmit} className="py-5">
        <div className="grid grid-cols-2 gap-5 items-center">
          <Text
            field={{
              ...formFields[0],
              value: formData[formFields[0].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
          <Text
            field={{
              ...formFields[1],
              value: formData[formFields[0].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
