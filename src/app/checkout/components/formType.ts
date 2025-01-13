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

export const InvoiceFormFields: FormField[] = [
  {
    type: "text",
    name: "Name",
    required: true,
    label: "Company / your name ",
    placeholder: "Enter company / your name",
    validation: (value) => {
      if (value && value.length > 100)
        return "Company name cannot exceed 100 characters";
      return null;
    },
  },
  {
    type: "text",
    required: true,
    label: "Telephone",
    name: "Telephone",
    maxLength: 15,
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
    name: "Email",
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
    type: "text",
    name: "Add",
    required: true,
    label: "Address",
    placeholder: "House number and street name",
    validation: (value) => {
      if (!value) return "Address is required";
      if (value.length > 255) return "Address cannot exceed 255 characters";
      return null;
    },
  },
  {
    options: [],
    type: "select",
    required: true,
    name: "CountryCode",
    label: "Country",
    placeholder: "Select Country",
  },
  {
    type: "text",
    name: "County",
    label: "County",
    placeholder: "Enter your county",
    validation: (value) => {
      if (!value) return "County is required";
      if (value.length > 50) return "County name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "PTown",
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
    name: "PCode",
    required: true,
    maxLength: 10,
    label: "Post Code",
    placeholder: "Enter post code",
    validation: (value) => {
      if (!value) return "Post code is required";
      if (value.length < 5 || value.length > 10)
        return "Post code must be between 5 and 10 characters";
      return null;
    },
  },
];

export const BillingFormField: FormField[] = [
  {
    type: "text",
    required: true,
    name: "DName",
    label: "Company / your name ",
    placeholder: "Enter company / your name",
    validation: (value) => {
      if (value && value.length > 100)
        return "Company name cannot exceed 100 characters";
      return null;
    },
  },
  {
    type: "text",
    required: true,
    label: "Telephone",
    name: "DTelephone",
    maxLength: 15,
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
    name: "DEmail",
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
    type: "text",
    name: "DAdd",
    required: true,
    label: "Address",
    placeholder: "House number and street name",
    validation: (value) => {
      if (!value) return "Address is required";
      if (value.length > 255) return "Address cannot exceed 255 characters";
      return null;
    },
  },
  {
    options: [],
    type: "select",
    required: true,
    label: "Country",
    name: "DCountryCode",
    placeholder: "Select Country",
  },
  {
    type: "text",
    name: "DCounty",
    label: "County",
    placeholder: "Enter your county",
    validation: (value) => {
      if (!value) return "County is required";
      if (value.length > 50) return "County name cannot exceed 50 characters";
      return null;
    },
  },
  {
    type: "text",
    name: "DPTown",
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
    required: true,
    name: "DPCode",
    label: "Post Code",
    maxLength: 10,
    placeholder: "Enter post code",
    validation: (value) => {
      if (!value) return "Post code is required";
      if (value.length < 5 || value.length > 10)
        return "Post code must be between 5 and 10 characters";
      return null;
    },
  },
];
