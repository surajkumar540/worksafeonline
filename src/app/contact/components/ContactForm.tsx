"use client";

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl mx-auto"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-primary"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-primary"
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:ring-primary"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
