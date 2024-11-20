import React from "react";
import { FooterProps } from "@/types/api";

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
  );
};

export default Footer;
