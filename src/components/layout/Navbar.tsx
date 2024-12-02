import React from "react";
import Link from "next/link";
import Search from "./Search";
import CartModal from "./Cart";
import Wishlist from "./Wishlist";
import ItemHover from "./ItemHover";
import Categories from "./Categories";
import BottomTabs from "./BottomTabs";
import { links } from "@/data/country";
import { Get } from "@/api/generalApi";
import { FaRegUser } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import { CiDiscount1 } from "react-icons/ci";
import { LinkProps, NavbarProps } from "@/types/api";
import Image from "next/image";

const Navbar: React.FC<NavbarProps> = async () => {
  const [resp, logoResponse, offerResponse] = await Promise.allSettled([
    Get("api/GetFullMenu?App=Worksafe"),
    Get("api/WebLogo?App=Worksafe"),
    Get("api/SpecialOffers"),
  ]);

  let categories = [];
  let logoData = null;
  let offerExist = false;

  if (resp.status === "fulfilled") categories = resp?.value?.categories;
  if (logoResponse.status === "fulfilled")
    logoData = logoResponse?.value?.headerlogo;
  if (offerResponse.status === "fulfilled")
    offerExist = offerResponse?.value?.status;

  categories = !offerExist ? categories : categories.slice(0, 10);
  return (
    <>
      <header className="bg-[#1C1C1C] sticky top-0 z-50 w-full text-white shadow-md">
        <div className="max-w-9xl mx-auto flex items-center justify-between px-2 md:px-4 lg:px-6 py-2">
          {/* Logo */}
          <div className="w-1/2 flex justify-between items-center">
            <Link href="/">
              <Image width={125} unoptimized height={60} src={logoData} alt="Logo" />
            </Link>
            <div className="gap-5 lg:flex hidden items-center mx-auto">
              {links.map((link: LinkProps) => {
                return (
                  <span key={link.id} className="relative group w-fit">
                    <ItemHover link={link} />
                  </span>
                );
              })}
            </div>
          </div>
          <div className="w-1/2 flex gap-5 justify-end lg:justify-between items-center">
            <Search />
            <div className="flex items-center space-x-2 lg:space-x-4">
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
        <nav className="bg-white text-black">
          <div className="flex flex-wrap max-w-9xl mx-auto items-center justify-between px-4 md:px-6 py-3">
            <Categories categories={categories} />
            {offerExist && (
              <div className="hidden lg:flex justify-center items-center gap-2">
                <CiDiscount1 size={28} className="text-red-500" />
                <span className="font-semibold text-red-500">
                  SPECIAL OFFER
                </span>
              </div>
            )}
          </div>
        </nav>
      </header>
      <BottomTabs />
    </>
  );
};

export default Navbar;
{
  /* <div className="border-r border-white/30 flex gap-2 pr-3">
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
            </div> */
}
