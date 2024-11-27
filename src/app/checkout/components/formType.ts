import { countries } from "@/data/country";
import { includes } from "@/utils/polyfills";

export interface FormField {
  name: string;
  label: string;
  type:
  | "text"
  | "email"
  | "richTextEditor"
  | "password"
  | "file"
  | "date"
  | "multipleFiles"
  | "select"
  | "checkbox"
  | "radio"
  | "number"
  | "textarea"
  | "choose"
  | "stringNumeric";
  min?: number;
  max?: number;
  accept?: string;
  maxFiles?: number;
  maxSizeMB?: number;
  maxLength?: number;
  widthFull?: boolean;
  multiple?: boolean;
  isVideo?: boolean;
  required?: boolean;
  placeholder?: string;
  confirmPlaceholder?: string;
  validation?: (value: any) => string | null;
  options?: { label: string; value: string | number }[];
}

export const formFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    required: true,
  },
  {
    name: "companyName",
    type: "text",
    label: "Company name (optional)",
    placeholder: "Enter your company name",
    required: true,
  },
  {
    name: "countryCode",
    label: "Country / Region",
    type: "select",
    required: true,
    placeholder: "Select Country",
    options: countries.map((country: any) => ({
      value: country.name,
      label: country.code.slice(1),
    })),
  },
  {
    name: "addressLine1",
    label: "Address Line 1",
    type: "text",
    placeholder: "House number and street name",
    required: true,
  },
  {
    name: "addressLine2",
    label: "Address Line 2 (optional)",
    type: "text",
    placeholder: "Apartment, suite, unit, etc. (optional)",
  },
  {
    name: "city",
    label: "Town / City",
    type: "text",
    placeholder: "Enter your city",
    required: true,
  },
  {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "Enter your state",
    required: true,
  },
  {
    name: "zipcode",
    label: "Zip Code",
    type: "text",
    placeholder: "Enter zip code",
    required: true,
  },
  {
    name: "phomenumber",
    label: "Phone",
    type: "text",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "Enter your email",
    validation: (value) => (includes(value, "@") ? null : "Invalid email"),
  },
  {
    name: "orderNotes",
    label: "Order notes (optional)",
    type: "textarea",
    placeholder: "Notes about your order, e.g. special notes for delivery.",
    required: true,
  },
];
