import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import BreadcrumbsHeader from "@/app/product/components/BradcrumbsHeader";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        overflow: "hidden",
      }}
      className="relative bg-gray-800 text-white h-[400px]"
    >
      <Image
        fill
        priority
        alt="Contact-Us Banner"
        className="object-cover"
        src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-shop.jpg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-between items-start p-4 md:p-6 lg:p-10 z-10 text-center">

        {/* <h1 className="text-sm font-semibold uppercase">Home Page / Shop</h1> */}

        {/* <ol className="flex space-x-2">
          <li>
            <Link href="/" className="hover:text-yellow-400 ">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            Shop
          </li>
          <li>/</li>
        </ol> */}
        <BreadcrumbsHeader text={"Shop"}/>


        <h1
          className={`text-7xl ${bigShoulders.className} uppercase font-extrabold`}
        >
          {title}
        </h1>
        <span className="mt-2 text-lg"></span>
      </div>
    </div>
  );
};

export default Header;
