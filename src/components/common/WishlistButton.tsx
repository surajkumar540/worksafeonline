"use client";

import Image from "next/image";
import { useState } from "react";
import { Get } from "@/api/generalApi";
import { toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";
import { RxEnterFullScreen } from "react-icons/rx";
import QuickViewModal from "../modals/QuickViewModal";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import eventEmitter, { handleAddToWishlist } from "@/hooks/useEventEmitter";

const WishlistButton = ({
  imgSrc,
  product,
  setImgSrc,
}: {
  product: any;
  imgSrc: string;
  setImgSrc: any;
}) => {
  const [data, setData] = useState<{}>();
  const [disable, setDIisabled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleWishlist = (data: any) => {
    if (handleAddToWishlist(data) && eventEmitter)
      eventEmitter.emit("addToWishlist", data);
  };

  const handleQuickView = async ({
    category,
    productId,
  }: {
    productId: string;
    category: string | number;
  }) => {
    const toastId = toast.loading("Please wait...");
    try {
      setDIisabled(true);
      const productResponse = await Get(
        `api/ProductDetails12?product_id=${productId}&category_id=${category}`
      );
      if (productResponse?.ProductID) {
        toast.dismiss(toastId);
        setIsVisible(true);
        setData({
          ...productResponse,
          slug: `/product/${category}/${productId}`,
        });
        toast.dismiss(toastId);
      } else {
        toast.dismiss(toastId);
        toast.update(toastId, {
          render: "Product not found!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("An error occurred while fetching product details!");
    } finally {
      setDIisabled(false);
    }
  };

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <QuickViewModal
        data={data}
        isVisible={isVisible}
        onclose={handleToggle}
      />
      <span
        onClick={() => handleWishlist(product)}
        className="text-black absolute hover:bg-slate-100 rounded-full p-[6px] top-1 right-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear"
      >
        <CiHeart title="Add to wishlist" size={25} />
      </span>
      {/* <span
        onClick={() => handleWishlist(product)}
        className="text-black absolute hover:bg-slate-100 rounded-full p-[6px] top-[76px] right-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear"
      >
        <PiArrowsClockwiseLight title="Compare" size={23} />
      </span> */}
      <span
        onClick={() => {
          if (!disable)
            handleQuickView({
              category: product?.MenuId,
              productId: product?.Style,
            });
        }}
        className="text-black absolute hover:bg-slate-100 rounded-full p-[6px] top-10 right-1 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear"
      >
        <RxEnterFullScreen title="Quick View" size={24} />
      </span>
      <div className="grid p-1.5 grid-cols-5 gap-1 absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-linear">
        <Image
          width={400}
          height={400}
          alt={"Image"}
          onMouseEnter={() =>
            setImgSrc(
              "https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg"
            )
          }
          onMouseLeave={() => setImgSrc(product?.ListingImage)}
          className={`w-full h-full object-contain aspect-square transition-all duration-200 ease-linear border rounded ${
            imgSrc ===
              "https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg" &&
            "border-black"
          }`}
          key="https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg"
          src="https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg"
        />
        <Image
          width={400}
          height={400}
          alt={"Image"}
          onMouseEnter={() =>
            setImgSrc(
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
            )
          }
          onMouseLeave={() => setImgSrc(product?.ListingImage)}
          className={`w-full h-full object-cover aspect-square transition-all duration-200 ease-linear border rounded ${
            imgSrc ===
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg" &&
            "border-black"
          }`}
          key="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
        />
      </div>
    </>
  );
};

export default WishlistButton;
