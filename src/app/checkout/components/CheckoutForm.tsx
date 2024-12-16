"use client";

import { useState } from "react";
import { formFields } from "./formType";
import OrderSummary from "./OrderSummary";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";
import Select from "@/components/input/Select";
import TextArea from "@/components/input/TextArea";

const CheckoutForm = ({ cart }: { cart: any }) => {
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    city: "",
    state: "",
    email: "",
    zipcode: "",
    lastName: "",
    firstName: "",
    orderNotes: "",
    countryCode: "",
    phomenumber: "",
    companyName: "",
    addressLine1: "",
    addressLine2: "",
  });

  const validateForm = () => {
    const newErrors: any = {};
    formFields.forEach((field) => {
      const value = formData[field.name];
      if (newErrors[field.name]) return;
      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }
      if (field.validation) {
        const validationError = field.validation(value);
        if (validationError) newErrors[field.name] = validationError;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set errors to state if validation fails
      return;
    }
    try {
      setErrors({});
      setLoading(true);
      console.log(formData);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 mt-5 md:mt-10">
      <div className="w-full lg:w-3/5">
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
                error={errors[formFields[0].name]}
              />
              <Text
                field={{
                  ...formFields[1],
                  value: formData[formFields[1].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[1].name]}
              />
            </div>
            <div className="mt-5">
              <Text
                field={{
                  ...formFields[2],
                  value: formData[formFields[2].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[2].name]}
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
                error={errors[formFields[4].name]}
              />
            </div>
            <div className="mt-5">
              <Text
                field={{
                  ...formFields[5],
                  value: formData[formFields[5].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[5].name]}
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
                  error={errors[formFields[6].name]}
                />
              </div>
              <div className="">
                <Text
                  field={{
                    ...formFields[7],
                    value: formData[formFields[7].name] || "",
                  }}
                  handleInputChange={handleInputChange}
                  error={errors[formFields[7].name]}
                />
              </div>
              <div className="">
                <Text
                  field={{
                    ...formFields[8],
                    value: formData[formFields[8].name] || "",
                  }}
                  handleInputChange={handleInputChange}
                  error={errors[formFields[8].name]}
                />
              </div>
              <div className="">
                <Select
                  field={{
                    ...formFields[3],
                    value: formData[formFields[3].name] || "",
                  }}
                  handleInputChange={handleInputChange}
                  error={errors[formFields[3].name]}
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
                error={errors[formFields[9].name]}
              />
            </div>
            <div className="mt-5">
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
      </div>
      {cart && cart?.Products && cart?.Products.length > 0 && (
        <div className="w-full lg:w-2/5">
          <OrderSummary
            cart={cart}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
