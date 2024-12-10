"use client";

import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LoginModal from "../modals/LoginModal";
import eventEmitter from "@/hooks/useEventEmitter";
import { useEffect, useState, useCallback } from "react";

const Account = () => {
  const navigate = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setUserLoggedIn] = useState(false);

  const handleToggle = useCallback(() => {
    if (loggedIn) return navigate.push("/my-account");
    setIsVisible((prev) => !prev);
  }, [loggedIn]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    eventEmitter?.on("openLoginModal", handleToggle);
    return () => {
      eventEmitter?.off("openLoginModal", handleToggle);
    };
  }, [handleToggle]);

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
    <span className="hover:text-yellow-500 cursor-pointer hidden lg:block relative transition-all duration-100 ease-linear">
      <FaRegUser onClick={handleToggle} size={23} />
      <LoginModal isVisible={isVisible} onclose={handleToggle} />
    </span>
  );
};

export default Account;
