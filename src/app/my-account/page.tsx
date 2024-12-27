"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import eventEmitter from "@/hooks/useEventEmitter";

export default function Page() {
  const router = useRouter();
  const logout = () => {
    localStorage.clear();
    toast.info("User logged out!");
    eventEmitter?.emit("loggedOut");
    return router.replace("/");
  };
  return (
    <div className="p-8">
      <span onClick={logout}>
        <span className="bg-black cursor-pointer text-white flex items-center w-fit rounded-full">
          <span className="tracking-tight text-lg whitespace-nowrap font-semibold transition py-3 w-fit px-8">
            Logout
          </span>
        </span>
      </span>
    </div>
  );
}
