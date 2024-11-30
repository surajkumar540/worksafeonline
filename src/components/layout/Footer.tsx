import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/types/api";
import { bigShoulders } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer: React.FC<FooterProps> = ({ data }) => {
  const customerLinks = [
    { label: "Help Center", href: "/faqs" },
    { label: "My Account", href: "/my-account" },
    { label: "Track My Order", href: "/order-tracking" },
    { label: "Return Policy", href: "/refund-policy" },
    { label: "Gift Cards", href: "/my-account" },
  ];

  const aboutLinks = [
    { label: "Company Info", href: "/about-us" },
    { label: "Press Releases", href: "/about-us" },
    { label: "Careers", href: "/about-us" },
    { label: "Reviews", href: "/about-us" },
    { label: "Investor Relations", href: "/about-us" },
  ];

  const quickLinks = [
    { label: "Search", href: "/search" },
    { label: "Become a Reseller", href: "/about-us" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
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
          className="w-full h-36 md:h-24 object-cover"
        />
        {/* Overlay */}
        <div className="absolute max-w-9xl mx-auto inset-0 bg-black bg-opacity-20 flex flex-col md:flex-row py-5 md:py-0 items-center gap-2 md:gap-5 px-4 md:px-6 lg:px-10">
          <h2
            className={`text-white text-2xl text-center md:text-left lg:text-3xl font-black ${bigShoulders.className}`}
          >
            LET US GUIDE YOU IN YOUR CHOICE OF WORKWEAR
          </h2>
          <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-44 md:pl-64 pr-4 overflow-hidden group">
            <span className="absolute text-xs md:text-sm font-semibold whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
              CHECK OUT OUR GUIDES
            </span>
            <span className="absolute text-xs md:text-sm font-semibold whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
              CHECK OUT OUR GUIDES
            </span>
            <FaArrowRightLong className="ml-2" />
          </span>
        </div>
      </div>

      <footer className="bg-[#1C1C1C] text-white pt-20 mb-20 lg:mb-0">
        {/* Top Section */}
        <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 grid gap-7 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Customer Links */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Customer
            </h4>
            <ul className="space-y-2">
              {customerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              About Us
            </h4>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Contact
            </h4>
            <div className="text-white/50 space-y-2 tracking-wide">
              <p>contact@example.com</p>
              <p>2972 Westheimer Rd. Santa Ana,</p>
              <p>Illinois 85486</p>
            </div>
          </div>

          {/* Mailing List */}
          <div className="col-span-2 lg:px-8">
            <h4
              className={`${bigShoulders.className} font-bold text-center md:text-left text-3xl uppercase mb-4`}
            >
              Subscribe to Our Mailing List
            </h4>
            <p className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear mb-4">
              Our latest and greatest in your inbox, sign up now.
            </p>
            <div className="flex items-center w-fit">
              <input
                type="email"
                placeholder="Email address"
                className="rounded-l-full w-fit focus:outline-none p-3 text-black"
              />
              <button className="bg-yellow-400 font-semibold hover:bg-yellow-500 text-black p-3 rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 md:mt-20"></div>

        <div
          className={`max-w-9xl px-10 py-5 mx-auto text-xl md:text-2xl flex flex-col md:flex-row justify-between items-center text-white font-bold ${bigShoulders.className}`}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="uppercase">Connect with us:</p>
            <div className="flex space-x-3"></div>
          </div>
          <div>
            <p>Customer Service: (084) 123-456 88</p>
          </div>
        </div>

        <div className="bg-white text-black flex flex-col md:flex-row gap-3 justify-center md:justify-between items-center py-5 max-w-9xl mx-auto px-4 md:px-6 lg:px-10">
          <p className="text-gray-500">
            Copyright © {new Date().getFullYear()} Axetor. All rights reserved
          </p>
          <Image
            src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/payment.jpg"
            alt="Payment"
            width={100}
            height={100}
            priority
            unoptimized
            className="object-contain w-72"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
