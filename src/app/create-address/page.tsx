"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";
import CreateAddressForm from "./components/CreateAddressForm";

export default function Page() {
  const router = useRouter();
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

  if (loading)
    return (
      <div className="h-screen flex justify-center font-semibold items-center text-3xl">
        Loading...
      </div>
    );

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Create <span className="text-primary"> New Address</span>
          </h1>
          <CreateAddressForm />
        </div>
      </AccountLayout>
    </div>
  );
}
