"use client";

import { useState } from "react";
import { formFields } from "./formType";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";
import Select from "@/components/input/Select";
import TextArea from "@/components/input/TextArea";

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
        className={`uppercase text-2xl lg:text-3xl flex items-center font-extrabold ${bigShoulders.className}`}
      >
        billing details
      </h2>
      <form onSubmit={handleSubmit} className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
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
              value: formData[formFields[1].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="mt-5">
          <Text
            field={{
              ...formFields[2],
              value: formData[formFields[2].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
        <h3
          className={`uppercase mt-5 text-2xl lg:text-3xl flex items-center font-extrabold ${bigShoulders.className}`}
        >
          Address details
        </h3>
        <div className="mt-5">
          <Text
            field={{
              ...formFields[4],
              value: formData[formFields[4].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="mt-5">
          <Text
            field={{
              ...formFields[5],
              value: formData[formFields[5].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="mt-5">
            <Text
              field={{
                ...formFields[6],
                value: formData[formFields[6].name] || "",
              }}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="">
            <Text
              field={{
                ...formFields[7],
                value: formData[formFields[7].name] || "",
              }}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="">
            <Text
              field={{
                ...formFields[8],
                value: formData[formFields[8].name] || "",
              }}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="">
            <Select
              field={{
                ...formFields[3],
                value: formData[formFields[3].name] || "",
              }}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-5">
          <Text
            field={{
              ...formFields[9],
              value: formData[formFields[9].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="mt-5">
          <Text
            field={{
              ...formFields[10],
              value: formData[formFields[10].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
        <h3
          className={`uppercase mt-5 text-2xl lg:text-3xl flex items-center font-extrabold ${bigShoulders.className}`}
        >
          Additional information
        </h3>
        <div className="mt-5">
          <TextArea
            field={{
              ...formFields[11],
              value: formData[formFields[11].name] || "",
            }}
            handleInputChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
