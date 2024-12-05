"use client";

import { useEffect } from "react";

interface PayPalScriptLoaderProps {
  clientId: string;
  onLoad: () => void;
  onError: (error: ErrorEvent) => void;
}

const PayPalScriptLoader: React.FC<PayPalScriptLoaderProps> = ({
  clientId,
  onLoad,
  onError,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons,applepay`;
    script.async = true;
    script.onload = () => onLoad();
    script.onerror = (error: any) => onError(error);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [clientId, onLoad, onError]);

  return null;
};

export default PayPalScriptLoader;
