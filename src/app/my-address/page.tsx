"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { IoCreate } from "react-icons/io5";
import { useRouter } from "next/navigation";
import AddressCard from "./component/AddressCard";
import React, { useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [accountDetail, setaccountDetail] = useState<any>({});
  const [selectedAddress, setSelectedAddress] = useState<any>();

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

  const handleSelected = (id: string | number) => {
    setSelectedAddress(id);
  };

  const handleCreateNewAddress = () => {
    router.push("/create-address");
  };

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
          <div className="flex justify-between items-center gap-5">
            <h1
              className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
            >
              My <span className="text-primary"> Addresses</span>
            </h1>
            <button
              title="Edit Address"
              onClick={handleCreateNewAddress}
              className="flex items-center text-lg gap-1 px-6 py-2 text-black bg-primary/80 hover:bg-primary rounded-full transition"
            >
              <IoCreate className="text-2xl" />
              Create
            </button>
          </div>
          <div className="mt-5">
            <h2 className={`${bigShoulders.className} text-xl font-semibold`}>
              My Billing Address
            </h2>
            <div className="grid grid-cols-2 gap-5 my-3">
              {accountDetail?.my_BillingAddress?.length > 0 &&
                accountDetail?.my_BillingAddress.map((address: any) => {
                  return (
                    <React.Fragment key={address?.ID}>
                      <AddressCard
                        type="billing"
                        address={address}
                        handleSelected={handleSelected}
                        selectedAddress={selectedAddress}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
            <h2
              className={`${bigShoulders.className} mt-5 text-xl font-semibold`}
            >
              My Delivery Address
            </h2>
            <div className="grid grid-cols-2 gap-5 my-3">
              {accountDetail?.my_DeliveryAddress?.length > 0 &&
                accountDetail?.my_DeliveryAddress.map((address: any) => {
                  return (
                    <React.Fragment key={address?.ID}>
                      <AddressCard
                        type="delivery"
                        address={address}
                        handleSelected={handleSelected}
                        selectedAddress={selectedAddress}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
      </AccountLayout>
    </div>
  );
}
