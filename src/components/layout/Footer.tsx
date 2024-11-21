import React from "react";
import Image from "next/image";
import { FooterProps } from "@/types/api";
import { FaArrowRightLong } from "react-icons/fa6";
import { bigShoulders } from "@/app/layout";

const Footer: React.FC<FooterProps> = ({ data }) => {
  const customerLinks = [
    "Help Center",
    "My Account",
    "Track My Order",
    "Return Policy",
    "Gift Cards",
  ];

  const aboutLinks = [
    "Company Info",
    "Press Releases",
    "Careers",
    "Reviews",
    "Investor Relations",
  ];

  const quickLinks = [
    "Search",
    "Become a Reseller",
    "About Us",
    "Contact Us",
    "Terms of Service",
  ];

  const socialIcons = [
    { icon: "facebook", url: "#" },
    { icon: "x", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "youtube", url: "#" },
  ];

  return (
    <>
      {/* Guide Section */}
      <div className="relative">
        <Image
          width={100}
          height={100}
          priority
          unoptimized
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/ft1-img.jpg"
          alt="Guide Background"
          className="w-full h-24 object-cover"
        />
        {/* Overlay */}
        <div className="absolute max-w-9xl mx-auto inset-0 bg-black bg-opacity-20 flex items-center gap-5 px-8">
          <h2
            className={`text-white text-3xl font-black ${bigShoulders.className}`}
          >
            LET US GUIDE YOU IN YOUR CHOICE OF WORKWEAR
          </h2>
          <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-64 pr-4 overflow-hidden group">
            <span className="absolute text-sm font-semibold whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
              CHECK OUT OUR GUIDES
            </span>
            <span className="absolute text-sm font-semibold whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
              CHECK OUT OUR GUIDES
            </span>
            <FaArrowRightLong className="ml-2" />
          </span>
        </div>
      </div>
      <footer className="bg-[#1C1C1C] text-white pt-20 pb-10">
        {/* Top Section */}
        <div className="max-w-9xl mx-auto px-4 grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Customer Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customer</h4>
            <ul className="space-y-2">
              {customerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p>contact@example.com</p>
            <p>2972 Westheimer Rd. Santa Ana,</p>
            <p>Illinois 85486</p>
          </div>

          {/* Mailing List */}
          <div className="col-span-2">
            <h4 className="font-bold text-lg mb-4">
              Subscribe to Our Mailing List
            </h4>
            <p className="text-gray-300 mb-4">
              Our latest and greatest in your inbox, sign up now.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow py-2 px-4 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-16"></div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          {/* Social Media */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p>Connect with us:</p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="hover:text-white transition-colors"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p>Copyright © 2024 Axetor. All rights reserved</p>
          </div>

          {/* Customer Service */}
          <div>
            <p>Customer Service: (084) 123-456 88</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
