import React from "react";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";

interface CartSummaryProps {
  cart: any;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  const navigate = useRouter();
  const totalAmount =
    cart?.reduce((acc: any, item: any) => {
      if (typeof item?.EndPrice === "number") {
        return acc + item.EndPrice * item.quantity;
      } else {
        console.error(`Invalid EndPrice for item ID: ${item?.ID}`);
        return acc;
      }
    }, 0) || 0;

  const handleCheckout = () => {
    navigate.push("/checkout");
  };

  return (
    <div className={`p-6 rounded-lg border-4 ${bigShoulders.className}`}>
      <h2 className="text-4xl font-black mb-8">CART TOTALS</h2>
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <span className="text-xl font-bold">Subtotal</span>
        <span className="text-xl font-sans">{totalAmount.toFixed(2)}$</span>
      </div>
      <div className="flex justify-between items-center font-semibold pt-4 text-lg mb-4">
        <span className="text-xl font-bold">Total</span>
        <span className="text-2xl font-sans">{totalAmount.toFixed(2)}$</span>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full bg-primary font-sans hover:bg-primary/70 py-4 text-xs font-semibold rounded-full"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartSummary;
