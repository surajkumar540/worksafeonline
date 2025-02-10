"use client";

import ItemHover from "./ItemHover";
import { useRouter } from "next/navigation";
import eventEmitter from "@/hooks/useEventEmitter";
import { useCallback, useEffect, useState } from "react";

const MyProducts = () => {
  const navigate = useRouter();
  const [loggedIn, setUserLoggedIn] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setUserLoggedIn(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    eventEmitter?.on("loggedIn", handleToggle);
    return () => {
      eventEmitter?.off("loggedIn", handleToggle);
    };
  }, [handleToggle]);

  useEffect(() => {
    const handleToggle = () => {
      setUserLoggedIn(false);
    };
    eventEmitter?.on("loggedOut", handleToggle);
    return () => {
      eventEmitter?.off("loggedOut", handleToggle);
    };
  }, []);

  const handleClick = useCallback(() => {
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (loggedIn || token) return navigate.push("/my-products");
    else eventEmitter?.emit("openLoginModal");
  }, [loggedIn, navigate]);

  useEffect(() => {
    const token =
      typeof window !== "undefined" &&
      localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (token) handleToggle();
  }, [handleToggle]);

  const link = {
    id: 1,
    href: "/my-products",
    label: "MY PRODUCTS",
  };
  return (
    <>
      {loggedIn ? (
        <span className="relative group w-fit">
          <ItemHover link={link} />
        </span>
      ) : (
        <span
          onClick={handleClick}
          className="relative cursor-pointer group w-fit"
        >
          <p className="font-semibold 2xl:text-xl text-black lg:text-white flex items-center relative text-nowrap rounded-lg pb-1 hover:text-primary transition-all duration-200 ease-linear">
            {link?.label}
          </p>
        </span>
      )}
    </>
  );
};

export default MyProducts;
