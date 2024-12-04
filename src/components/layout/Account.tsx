"use client";

import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import LoginModal from "../modals/LoginModal";
const Account = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleToggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <span className="hover:text-yellow-500 cursor-pointer hidden lg:block relative transition-all duration-100 ease-linear">
      <FaRegUser onClick={handleToggle} size={23} />
      <LoginModal isVisible={isVisible} onclose={handleToggle} />
    </span>
  );
};

export default Account;
