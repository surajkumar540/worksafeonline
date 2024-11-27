import React from "react";
import Link from "next/link";
import CartModal from "./Cart";
import Wishlist from "./Wishlist";
import ItemHover from "./ItemHover";
import { links } from "@/data/country";
import { Get } from "@/api/generalApi";
import ActivateLink from "./ActivateLink";
import { FaRegUser } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import { IoMdSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { LinkProps, NavbarProps } from "@/types/api";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar: React.FC<NavbarProps> = async ({ data }) => {
  const resp = await Get("api/categories");
  const offerResponse = await Get("api/SpecialOffers");
  let categories = resp.categories;
  const offerExist = offerResponse.status;
  categories = !offerExist ? categories : categories.slice(0, 10);
  return (
    <header className="bg-[#1C1C1C] sticky top-0 z-50 w-full text-white shadow-md">
      <div className="max-w-9xl mx-auto flex gap-5 items-center justify-between px-2 md:px-4 lg:px-6 py-2">
        {/* Logo */}
        <div className="w-[45%] flex justify-between items-center">
          <Link
            href="/"
            className="bg-yellow-500 text-black text-center px-2 font-bold"
          >
            AXETOR <br /> WORKWEAR
          </Link>
          <div className="space-x-5 lg:flex hidden items-center">
            {links.map((link: LinkProps) => {
              return (
                <span key={link.id} className="relative group w-fit">
                  <ItemHover link={link} />
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-[55%] flex gap-5 justify-end lg:justify-between items-center">
          {/* Search */}
          <div className="relative hidden w-full lg:block">
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
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* <div className="border-r border-white/30 flex gap-2 pr-3">
              <Link
                href="#"
                className="flex items-center text-white/50 font-semibold"
              >
                ENG
              </Link>
              <Link
                href="#"
                className="flex items-center text-white/50 font-semibold"
              >
                $USD
              </Link>
            </div> */}
            <Link
              href="/my-account"
              className="hover:text-yellow-500 hidden lg:block transition-all duration-100 ease-linear"
            >
              <FaRegUser size={20} />
            </Link>
            <Wishlist />
            <CartModal />
            <MobileSidebar categories={categories} />
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <nav className="bg-white text-black">
        <div className="flex flex-wrap max-w-9xl mx-auto items-center justify-between px-4 md:px-6 py-3">
          <div className="flex lg:flex-wrap gap-3 lg:gap-5 items-center overflow-x-auto lg:overflow-x-visible">
            {categories.map((link: any) => {
              return (
                <Link
                  key={link.menu_id}
                  href={"/shop?category=" + link?.menu_id}
                  className="text-base lg:text-sm whitespace-nowrap hover:text-primary capitalize"
                >
                  <ActivateLink
                    name={link?.menu_name}
                    id={link.menu_id.toString()}
                  />
                </Link>
              );
            })}
          </div>
          {offerExist && (
            <div className="hidden lg:flex justify-center items-center gap-2">
              <CiDiscount1 size={28} className="text-red-500" />
              <span className="font-semibold text-red-500">SPECIAL OFFER</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
