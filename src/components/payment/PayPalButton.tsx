"use client";

import { useEffect } from "react";

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
  onError: (error: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({
  amount,
  onSuccess,
  onError,
}) => {
  useEffect(() => {
    // Dynamically load PayPal script
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID";
    script.addEventListener("load", () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                    },
                  },
                ],
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then(onSuccess);
            },
            onError: (error: any) => {
              onError(error);
            },
          })
          .render("#paypal-button-container");
      }
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when component unmounts
    };
  }, [amount, onSuccess, onError]);

  return (
    <div
      id="paypal-button-container"
      className="w-full mt-4 flex justify-center"
    ></div>
  );
};

export default PayPalButton;
