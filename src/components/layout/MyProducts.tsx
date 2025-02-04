"use client";

import ItemHover from "./ItemHover";
import eventEmitter from "@/hooks/useEventEmitter";
import { useCallback, useEffect, useState } from "react";

const MyProducts = () => {
  const [loggedIn, setUserLoggedIn] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setUserLoggedIn(!loggedIn);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    eventEmitter?.on("loggedIn", handleToggle);
    return () => {
      eventEmitter?.off("loggedIn", handleToggle);
    };
  }, [handleToggle]);

  useEffect(() => {
    eventEmitter?.on("loggedOut", handleToggle);
    return () => {
      eventEmitter?.off("loggedOut", handleToggle);
    };
  }, [handleToggle]);

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
      {loggedIn && (
        <span className="relative group w-fit">
          <ItemHover link={link} />
        </span>
      )}
    </>
  );
};

export default MyProducts;
