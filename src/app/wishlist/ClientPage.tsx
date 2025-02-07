"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import { useRouter } from "next/navigation";
// import { addToCart } from "@/api/cartApi";
import { filterData } from "@/api/generalApi";
import eventEmitter from "@/hooks/useEventEmitter";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";
// import { getDeviceCheck } from "@/api/generateDeviceId";
import React, { useCallback, useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "@/api/wishlistApis";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

export default function ClientPage() {
  const router = useRouter();
  const [wishlistUpdated, setWishlistUpdated] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false); // To prevent multiple calls
  const token =
    typeof window !== "undefined" &&
    localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");

  const fetchWishlist = useCallback(async () => {
    if (isFetching) return; // Prevent duplicate calls
    setIsFetching(true);
    try {
      const response = await getWishlist();
      if (response?.wishlist) {
        const updatedWishlist = response.wishlist.map((product: any) =>
          filterData(product)
        );
        setWishlistUpdated(updatedWishlist);
        updatedWishlist.forEach((wishlist: any) =>
          eventEmitter?.emit("addToWishlist", wishlist?.ID)
        );
        const ids = updatedWishlist.map((wishlist: any) => wishlist.ID);
        localStorage.setItem("wishlist", JSON.stringify(ids));
      } else if (response?.message) {
        toast.info(response?.message);
        setWishlistUpdated([]);
        eventEmitter?.emit("emptyWishlist");
      } else {
        setWishlistUpdated([]);
        eventEmitter?.emit("emptyWishlist");
      }
    } finally {
      setIsFetching(false);
    }
  }, [isFetching]);

  useEffect(() => {
    if (token) fetchWishlist();
    // eslint-disable-next-line
  }, [token]);

  const handleRemove = async (id: string) => {
    const removedResponse = await removeFromWishlist(id);
    if (removedResponse?.status) {
      eventEmitter?.emit("removeFromWishlist", id);
      await fetchWishlist();
      return true;
    }
    return false;
  };

  const onAddToCart = async (data: any) => {
    if (await handleRemove(data?.ID)) {
      router.replace(
        `/product/${data?.CategoryData?.categoryId ?? 1}/${data?.ID}`
      );
      // eventEmitter?.emit("addToCart");
      // const updatedData = {
      //   BOM: [],
      //   Colour: "NA",
      //   Fitting: "NA",
      //   ProductID: data?.ID,
      //   DeviceID: getDeviceCheck(),
      //   Size: [{ Quantity: data.Quantity }],
      // };
      // const resp = await addToCart(updatedData);
      // if (resp?.status)
    }
  };

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <div className="flex justify-between items-center">
          <h1
            className={`uppercase text-3xl md:text-5xl lg:text-7xl flex items-center font-black ${bigShoulders.className}`}
          >
            Wishlist{" "}
            <span className="text-lg md:text-2xl lg:text-4xl">
              {" "}
              ({wishlistUpdated.length})
            </span>
          </h1>
          {wishlistUpdated.length === 0 && (
            <AnimatedActionButton
              text="View Products"
              href="/shop-all"
              classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[180px] hover:bg-primary bg-white text-black hover:text-black"
              isLoading={false}
              type="submit"
            />
          )}
        </div>
        <div className="pt-4 md:pt-6 lg:pt-10">
          {wishlistUpdated && wishlistUpdated.length > 0 ? (
            wishlistUpdated.map((list: any) => {
              return (
                <React.Fragment key={list?.ID}>
                  <WishlistCard
                    product={list}
                    onAddToCart={onAddToCart}
                    handleRemove={handleRemove}
                  />
                </React.Fragment>
              );
            })
          ) : (
            <Image
              width={200}
              height={200}
              priority
              unoptimized
              alt={"Empty Wishlist"}
              src={"/assets/empty_wishlist.jpg"}
              className="w-full lg:w-1/2 mx-auto object-contain rounded-md"
            />
          )}
        </div>
      </div>
      <Features />
    </>
  );
}
