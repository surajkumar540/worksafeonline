"use client";

import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 py-10 lg:py-20">
      <div className={`relative ${bigShoulders.className}`}>
        <h1 className="text-6xl md:text-9xl uppercase font-black text-center tracking-wider bg-gradient-to-b mb-10 from-gray-300 via-gray-200 to-white bg-clip-text text-transparent">
          Get in touch
        </h1>
        <p
          className={`uppercase text-3xl md:text-5xl text-center absolute font-black whitespace-nowrap bottom-0 md:bottom-8 left-1/2 translate-x-[-50%] translate-y-1/2`}
        >
          leave us a message
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 py-2 lg:p-4 rounded-lg lg:w-3/4 mx-auto"
      >
        <div className="flex flex-col gap-7 md:flex-row">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 outline-none border rounded-full focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 outline-none border rounded-full focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 outline-none border rounded-full focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 outline-none border rounded-xl focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-black px-8 inline-flex gap-3 text-xs font-semibold mx-auto items-center py-4 rounded-full hover:bg-black hover:text-white transition"
        >
          SEND MESSAGE <FaArrowRightLong />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
