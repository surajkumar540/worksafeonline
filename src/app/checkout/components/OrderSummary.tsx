"use client";

import { bigShoulders } from "@/app/layout";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OrderSummary = ({ cart }: { cart: any }) => {
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
    console.log("Order Checkout:")
  };

  return (
    <div className={`p-6 rounded-lg border-4 ${bigShoulders.className}`}>
      <h2 className="text-4xl font-black mb-8 uppercase">Your order</h2>
      <div className="flex border-b pb-3 justify-between items-center gap-5">
        <span className="text-2xl font-bold">Product</span>
        <span className="text-2xl font-bold">Subtotal</span>
      </div>
      {cart.length > 0 && cart.map((item: any) => {
        return (
          <div key={item.ID} className="flex font-sans tracking-tighter justify-between items-center border-b border-gray-300 py-4 gap-5">
            <span className="text-gray-500 text-lg">{item.Description} x {item.quantity}</span>
            <span>{item.EndPrice * item.quantity}$</span>
          </div>
        )
      })}
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Subtotal</span>
        <span className="text-xl font-sans">{totalAmount.toFixed(2)}$</span>
      </div>
      <div className="flex justify-between items-center font-semibold pt-4 text-lg mb-4">
        <span className="text-xl font-bold">Total</span>
        <span className="text-2xl font-sans">{totalAmount.toFixed(2)}$</span>
      </div>
      <p className="font-sans text-gray-500 pb-5">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href={"/privacy-policy"} className="text-black hover:underline hover:underline-offset-2 hover:text-primary">privacy policy</Link>.</p>
      <button
        onClick={handleCheckout}
        className="w-full bg-primary font-sans hover:bg-primary/70 py-4 text-xs font-semibold rounded-full"
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default OrderSummary;
