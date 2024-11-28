import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { bigShoulders } from "@/app/layout";
import { FaRegHeart } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

const BottomTabs = () => {
  return (
    <div
      className={`w-full fixed lg:hidden text-black backdrop-blur-2xl uppercase justify-center items-center bottom-0 grid grid-cols-4 rounded-t-2xl bg-white/50 shadow-md border-t z-50 ${bigShoulders.className}`}
    >
      <Link href={"/"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center">
          <IoHomeOutline size={23} />
          <span className="md:text-lg font-bold md:font-extrabold">Home</span>
        </span>
      </Link>
      <Link href={"/my-account"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center border-x border-gray-400">
          <FaRegUser size={21} />
          <span className="md:text-lg font-bold md:font-extrabold">
            Account
          </span>
        </span>
      </Link>
      <Link href={"/search"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center border-gray-400 border-r">
          <FiSearch size={24} />
          <span className="md:text-lg font-bold md:font-extrabold">Search</span>
        </span>
      </Link>
      <Link href={"/wishlist"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center">
          <FaRegHeart size={23} />
          <span className="md:text-lg font-bold md:font-extrabold">
            Wishlist
          </span>
        </span>
      </Link>
    </div>
  );
};

export default BottomTabs;
