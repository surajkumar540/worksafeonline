"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { useRouter } from "next/navigation";
import { getCartDetails } from "@/api/cartApi";
import OrderCard from "./components/OrderCard";
import Loader from "@/components/common/Loader";
import { useCallback, useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function Page() {
  const router = useRouter();
  const [cart, setCart] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [accountDetail, setaccountDetail] = useState<any>({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          typeof window !== "undefined" &&
          localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
        if (!token) return router.replace("/");
        const response: { status: boolean } = await Fetch(
          "/api/MyAccountProfile",
          {},
          5000,
          true,
          false
        );
        if (response.status) setaccountDetail(response);
        setLoading(false);
      } catch (error) {
        console.log("Account Details Error: ", error);
        return router.replace("/");
      }
    };
    fetchUserData();
  }, [router]);

  const fetchCart = useCallback(async () => {
    const response = await getCartDetails();
    if (response?.status) {
      setCart(response);
    } else setCart({});
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Order <span className="text-primary"> History</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {cart?.Products?.length > 0 && cart.Products ? (
              <OrderCard cart={cart} />
            ) : (
              <p>No history found</p>
            )}
          </div>
        </div>
      </AccountLayout>
    </div>
  );
}
