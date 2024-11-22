"use client";

import Link from "next/link";
import { LinkProps } from "@/types/api";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const ItemHover = ({ link }: { link: LinkProps }) => {
  const pathName: any = usePathname();
  const [show, setShow] = useState<boolean>(false);
  const isActive = (path: string) => pathName === path;
  const [showLink, setLinkShow] = useState<string | null>("");

  const handleShowChildren = () => {
    setShow(!show);
    setLinkShow("");
  };
  const handleGroupHover = (path: string) => {
    setLinkShow(path);
  };
  return (
    <>
      <Link
        onClick={() => setShow(false)}
        onMouseEnter={() => handleGroupHover(link.href)}
        className={`font-semibold 2xl:text-xl text-black lg:text-white flex items-center relative text-nowrap rounded-lg pb-1 hover:text-primary transition-all duration-200 ease-linear ${
          isActive(link.href) && "text-primary"
        }`}
        href={link?.href}
        passHref
      >
        {link?.label} {link.icon && <RiArrowDropDownLine size={20} />}
      </Link>
      <span
        className={`hidden lg:block absolute inset-x-0 bottom-0 h-[1.5px] bg-primary transform origin-left transition-transform ${
          showLink === link.href && "group-hover:scale-x-100"
        } ${isActive(link.href) ? "scale-x-100" : "scale-x-0"}`}
      ></span>
    </>
  );
};

export default ItemHover;
