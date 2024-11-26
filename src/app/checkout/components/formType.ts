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
];
