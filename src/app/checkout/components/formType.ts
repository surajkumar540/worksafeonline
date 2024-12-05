import { countries } from "@/data/country";
import { includes } from "@/utils/polyfills";

export interface FormField {
  type:
    | "text"
    | "file"
    | "date"
    | "email"
    | "radio"
    | "select"
    | "choose"
    | "number"
    | "password"
    | "textarea"
    | "checkbox"
    | "stringNumeric";
  min?: number;
  max?: number;
  name: string;
  label: string;
  accept?: string;
  maxLength?: number;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
  confirmPlaceholder?: string;
  validation?: (value: any) => string | null;
  options?: { label: string; value: string | number }[];
}

export const formFields: FormField[] = [
  {
    type: "text",
    required: true,
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    validation: (value) => {
      if (!value) return "First name is required";
      if (value.length > 50) return "First name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    required: true,
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    validation: (value) => {
      if (!value) return "Last name is required";
      if (value.length > 50) return "Last name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "companyName",
    label: "Company name (optional)",
    placeholder: "Enter your company name",
    validation: (value) => {
      if (value && value.length > 100)
        return "Company name cannot exceed 100 characters";
      return null;
    },
  },
  {
    type: "select",
    required: true,
    name: "countryCode",
    label: "Country / Region",
    placeholder: "Select Country",
    options: countries.map((country: any) => ({
      value: country.name,
      label: country.code.slice(1),
    })),
  },
  {
    type: "text",
    required: true,
    name: "addressLine1",
    label: "Address Line 1",
    placeholder: "House number and street name",
    validation: (value) => {
      if (!value) return "Address Line 1 is required";
      if (value.length > 255)
        return "Address Line 1 cannot exceed 255 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "addressLine2",
    label: "Address Line 2 (optional)",
    placeholder: "Apartment, suite, unit, etc. (optional)",
    validation: (value) => {
      if (value && value.length > 255)
        return "Address Line 2 cannot exceed 255 characters";
      return null;
    },
  },
  {
    name: "city",
    type: "text",
    required: true,
    label: "Town / City",
    placeholder: "Enter your city",
    validation: (value) => {
      if (!value) return "City is required";
      if (value.length > 50) return "City name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "state",
    label: "State",
    required: true,
    placeholder: "Enter your state",
    validation: (value) => {
      if (!value) return "State is required";
      if (value.length > 50) return "State name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    required: true,
    name: "zipcode",
    label: "Zip Code",
    placeholder: "Enter zip code",
    validation: (value) => {
      if (!value) return "Zip code is required";
      if (value.length < 5 || value.length > 10)
        return "Zip code must be between 5 and 10 characters";
      return null;
    },
  },
  {
    type: "text",
    required: true,
    label: "Phone",
    name: "phomenumber",
    placeholder: "Enter your phone number",
    validation: (value) => {
      if (!value) return "Phone number is required";
      const phoneRegEx = /^[0-9]{10,15}$/;
      if (!phoneRegEx.test(value))
        return "Phone number must be between 10 and 15 digits";
      return null;
    },
  },
  {
    name: "email",
    type: "email",
    required: true,
    label: "Email address",
    placeholder: "Enter your email",
    validation: (value) => {
      if (!value) return "Email address is required";
      if (value.length > 320)
        return "Email address cannot exceed 320 characters";
      if (!includes(value, "@")) return "Invalid email address";
      return null;
    },
  },
  {
    type: "textarea",
    name: "orderNotes",
    label: "Order notes (optional)",
    placeholder: "Notes about your order, e.g. special notes for delivery.",
    validation: (value) => {
      if (value && value.length > 500)
        return "Order notes cannot exceed 500 characters";
      return null;
    },
  },
];
