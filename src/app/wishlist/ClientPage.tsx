"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import { filterData } from "@/api/generalApi";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";
import React, { useCallback, useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "@/api/wishlistApis";
import eventEmitter, { handleAddToCart } from "@/hooks/useEventEmitter";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";
import AuthFlow from "@/components/modals/AuthFlow";

export default function ClientPage() {
  const [showModal, setShowModal] = useState(false);
  const [wishlistUpdated, setWishlistUpdated] = useState<any>([]);

  const fetchWishlist = useCallback(async () => {
    const response = await getWishlist();
    if (response?.wishlist) {
      const updatedWishlist = response.wishlist.map((product: any) =>
        filterData(product)
      );
      setWishlistUpdated(updatedWishlist);
      updatedWishlist.map((wishlist: any) =>
        eventEmitter?.emit("addToWishlist", wishlist?.ID)
      );
      const ids = updatedWishlist.map((wishlist: any) => wishlist.ID);
      localStorage.setItem("wishlist", JSON.stringify(ids));
    } else if (response?.message) {
      toast.info(response?.message);
      setWishlistUpdated([]);
    } else setWishlistUpdated([]);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (token) fetchWishlist();
  }, [fetchWishlist]);

  const handleRemove = async (id: string) => {
    const removedResponse = await removeFromWishlist(id);
    if (removedResponse?.status) {
      eventEmitter?.emit("removeFromWishlist", id);
      await fetchWishlist();
    }
  };
  const onAddToCart = async (data: any) => {
    if (await handleAddToCart(data)) handleRemove(data?.ID);
  };
  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        {showModal && <AuthFlow initialVisibility={showModal} />}
        <div className="flex justify-between items-center">
          <h1
            onClick={() => setShowModal(true)}
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
