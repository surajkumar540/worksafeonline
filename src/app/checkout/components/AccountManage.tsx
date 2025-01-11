import { bigShoulders } from "@/app/layout";
import { Accordion } from "./CheckoutForm";
import eventEmitter from "@/hooks/useEventEmitter";
import { useCallback, useEffect, useState } from "react";

const AccountManage = ({
  icon,
  activateScreen,
  setActivateScreen,
}: {
  icon: any;
  activateScreen: number;
  setActivateScreen: any;
}) => {
  const [loggedIn, setUserLoggedIn] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setUserLoggedIn(true);
  }, []);

  const handleSignIn = () => {
    eventEmitter?.emit("openLoginModal");
  };

  const handleContinue = () => {
    setActivateScreen(1);
  };

  useEffect(() => {
    eventEmitter?.on("loggedIn", handleToggle);
    return () => {
      eventEmitter?.off("loggedIn", handleToggle);
    };
  }, [handleToggle]);

  useEffect(() => {
    const token =
      typeof window !== "undefined" &&
      localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (token) handleToggle();
  }, [handleToggle]);

  return (
    <>
      {!loggedIn && (
        <Accordion
          Icon={icon}
          title="Your Login ID"
          activateScreen={activateScreen}
        >
          <div>
            <h2
              className={`uppercase text-xl flex items-center font-extrabold mb-1 ${bigShoulders.className}`}
            >
              How would you like to continue your checkout?
            </h2>
            <p className="text-gray-800 text-sm mb-5">
              You can log in to access your saved details, or proceed as a
              guest.
            </p>
            <div className="flex flex-wrap mt-5 gap-3">
              <button
                onClick={handleSignIn}
                className="w-full md:w-fit whitespace-nowrap px-6 py-2 text-white bg-[#F06022] hover:bg-[#F06022]/80 font-medium transition-colors"
              >
                Log In
              </button>
              <button
                className="w-full md:w-fit whitespace-nowrap px-6 py-2 text-[#F06022] bg-white border hover:bg-[#F06022] hover:text-white border-[#F06022] font-medium transition-colors"
                onClick={handleContinue}
              >
                Continue With Express Checkout
              </button>
            </div>
          </div>
        </Accordion>
      )}
    </>
  );
};

export default AccountManage;
