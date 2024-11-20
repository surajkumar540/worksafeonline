"use client";
import Link from "next/link";
import { links } from "@/data/country";
import React, { useEffect, useState } from "react";
import { LinkProps, NavbarProps } from "@/types/api";
import ItemHover from "./ItemHover";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";

import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

import { IoMdSearch } from "react-icons/io";
import { Get } from "@/api/generalApi";

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Get("api/categories");
      setCategories(data.categories);
    };
    if (categories.length === 0) fetchData();
  }, [categories.length]);
  console.log(categories);
  return (
    <header className="bg-[#1C1C1C] fixed top-0 z-50 w-full text-white shadow-md">
      <div className="max-w-9xl mx-auto flex gap-5 items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="w-[45%] flex justify-between items-center">
          <Link
            href="/"
            className="bg-yellow-500 text-black text-center px-2 font-bold"
          >
            AXETOR <br /> WORKWEAR
          </Link>
          <div className="space-x-5 flex items-center">
            {links.map((link: LinkProps) => {
              return (
                <span key={link.id} className="relative group w-fit">
                  <ItemHover link={link} />
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-[55%] flex gap-5 justify-between items-center">
          {/* Search */}
          <div className="relative hidden w-full md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 py-3 text-gray-500 rounded-full outline-none"
            />
            <button className="absolute z-20 top-0 right-0 px-4 py-3 rounded-full">
              <IoMdSearch size={25} className="text-black" />
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="border-r border-white/30 flex gap-2 pr-3">
              <Link
                href="#"
                className="flex items-center text-white/50 font-semibold"
              >
                ENG <RiArrowDropDownLine size={25} />
              </Link>
              <Link
                href="#"
                className="flex items-center text-white/50 font-semibold"
              >
                $USD <RiArrowDropDownLine size={25} />
              </Link>
            </div>
            <Link
              href="/account"
              className="hover:text-yellow-500 transition-all duration-100 ease-linear"
            >
              <FaRegUser size={20} />
            </Link>
            <Link
              href="/wishlist"
              className="hover:text-yellow-500 transition-all duration-100 ease-linear"
            >
              <FaRegHeart size={20} />
            </Link>
            <Link
              href="/cart"
              className="hover:text-yellow-500 transition-all duration-100 ease-linear"
            >
              <TiShoppingCart size={23} />
            </Link>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <nav className="bg-white text-black">
        <div className="flex max-w-9xl mx-auto items-center justify-between px-6 py-3">
          <div className="space-x-5 flex items-center">
            {categories.slice(0, 10).map((link: any) => {
              return (
                <Link
                  href={"/"}
                  key={link.menu_id}
                  className="text-sm whitespace-nowrap hover:text-primary capitalize"
                >
                  {link?.menu_name}
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-2">
            <CiDiscount1 size={28} className="text-red-500" />
            <span className="font-semibold text-red-500">SPECIAL OFFER</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
