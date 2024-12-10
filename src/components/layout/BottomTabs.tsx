"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { bigShoulders } from "@/app/layout";
import LoginModal from "../modals/LoginModal";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
import eventEmitter from "@/hooks/useEventEmitter";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

const BottomTabs = ({ wishlist }: { wishlist: any[] }) => {
  const navigate = useRouter();
  const wishlistCount = wishlist?.length || 0;
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setUserLoggedIn] = useState(false);
  const displayCount = wishlistCount < 10 ? `0${wishlistCount}` : wishlistCount;

  const handleToggle = useCallback(() => {
    if (loggedIn) return navigate.push("/my-account");
    setIsVisible((prev) => !prev);
  }, [loggedIn, navigate]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    const handleToggle = () => {
      setUserLoggedIn(true);
    };
    eventEmitter?.on("loggedIn", handleToggle);
    return () => {
      eventEmitter?.off("loggedIn", handleToggle);
    };
  }, [handleToggle]);

  return (
    <div
      className={`w-full fixed left-0 lg:hidden text-black backdrop-blur-2xl uppercase justify-center items-center bottom-0 grid grid-cols-4 rounded-t-2xl bg-white/50 shadow-md border-t-2 z-50 ${bigShoulders.className}`}
    >
      <LoginModal isVisible={isVisible} onclose={handleToggle} />
      {/* <SearchModal isOpen={isVisibleSearch} handleToggle={handleToggle} /> */}
      <Link href={"/"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center">
          <IoHomeOutline size={23} />
          <span className="md:text-lg font-bold md:font-extrabold">Home</span>
        </span>
      </Link>
      <p onClick={handleToggle}>
        <span className="py-2 md:py-3 cursor-pointer flex flex-col justify-center items-center border-x border-gray-400">
          <FaRegUser size={21} />
          <span className="md:text-lg font-bold md:font-extrabold">
            Account
          </span>
        </span>
      </p>
      <Link href={"/shop-all"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center border-gray-400 border-r">
          <AiFillAppstore size={24} />
          <span className="md:text-lg font-bold md:font-extrabold">Shop</span>
        </span>
      </Link>
      <Link href={"/wishlist"}>
        <p className="py-2 md:py-3 flex flex-col justify-center items-center">
          <span className="relative">
            <FaRegHeart size={23} />
            <span className="absolute -top-3 -right-3 w-6 h-6 text-xs text-black rounded-full bg-primary flex items-center justify-center">
              {displayCount}
            </span>
          </span>
          <span className="md:text-lg font-bold md:font-extrabold">
            Wishlist
          </span>
        </p>
      </Link>
    </div>
  );
};

export default BottomTabs;
