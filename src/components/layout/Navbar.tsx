import React from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import CartModal from "./Cart";
import Account from "./Account";
import Wishlist from "./Wishlist";
import ItemHover from "./ItemHover";
import Categories from "./Categories";
import BottomTabs from "./BottomTabs";
import { links } from "@/data/country";
import { Get } from "@/api/generalApi";
import { LinkProps } from "@/types/api";
import MobileSidebar from "./MobileSidebar";
import { CiDiscount1 } from "react-icons/ci";

const Navbar = async () => {
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
              <Image
                width={100}
                unoptimized
                height={60}
                alt="Logo"
                src={logoData}
                className="w-32"
              />
            </Link>
            <div className="gap-7 lg:flex hidden items-center mx-auto">
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
            <div className="flex items-center lg:mx-auto space-x-2 lg:space-x-4">
              <Account />
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
