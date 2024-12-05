"use client";

import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-toastify";


export const BASE_URL = "https://johntrn.worksafeonline.co.uk";


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company_name: "", // Optional field
    find: "", // Optional field: e.g. "existingWorksafeAPI" or blank
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset the status before submission

    const { name, email, phone, message, company_name, find } = formData;

    // Data to be sent in the POST request
    const postData = {
      name,
      email,
      phone,
      company_name: company_name || "", // Optional field, pass empty string if not provided
      find: find || "", // Optional field, pass empty string if not provided
      your_message: message,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/Contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company_name: "",
          find: "",
        }); // Reset the form after successful submission
      } else {
        toast.warn(
          "There was an issue sending your message. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      toast.warn("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
          className="w-full p-4 outline-none border rounded-xl focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary resize-none"
          rows={5}
          required
        ></textarea>
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={formData.company_name}
          onChange={handleChange}
          className="w-full p-4 outline-none border rounded-full focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary"
        />
        <input
          type="text"
          name="find"
          placeholder="How did you find us?"
          value={formData.find}
          onChange={handleChange}
          className="w-full p-4 outline-none border rounded-full focus:ring-2 transition-all duration-200 ease-linear text-black placeholder:black focus:ring-primary"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-black px-8 inline-flex gap-3 text-xs font-semibold mx-auto items-center py-4 rounded-full hover:bg-black hover:text-white transition"
        >
          {isSubmitting ? "Sending..." : "SEND MESSAGE"} <FaArrowRightLong />
        </button>
      </form>

      {/* Show submission status message */}
      {submissionStatus && (
        <div className="mt-5 text-center text-lg font-semibold text-gray-700">
          {submissionStatus}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
