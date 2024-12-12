import React from "react";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";

interface CartSummaryProps {
  cart: any;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  const navigate = useRouter();
  // const totalAmount =
  //   cart?.reduce((acc: any, item: any) => {
  //     if (typeof item?.EndPrice === "number") {
  //       return acc + item.EndPrice * item.Quantity;
  //     } else {
  //       console.error(`Invalid EndPrice for item ID: ${item?.ID}`);
  //       return acc;
  //     }
  //   }, 0) || 0;

  const handleCheckout = () => {
    navigate.push("/checkout");
  };

  return (
    <div className={`p-6 rounded-lg border-4 ${bigShoulders.className}`}>
      <h2 className="text-4xl font-black mb-8">CART TOTALS</h2>
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <span className="text-xl font-bold">Total Quantity</span>
        <span className="text-xl font-sans">
          {cart?.TotalQuantity.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Amount excluding Vat</span>
        <span className="text-xl font-sans">
          £{cart?.TotalAmountExVat.toFixed(2)}
        </span>
      </div>
      {cart?.ArtworkCost > 0 && (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <span className="text-xl font-bold">ArtWork Cost</span>
          <span className="text-xl font-sans">
            + £{cart?.ArtworkCost.toFixed(2)}
          </span>
        </div>
      )}
      {cart?.Discount > 0 && (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <span className="text-xl font-bold">Discount Applied</span>
          <span className="text-xl font-sans">
            - £{cart?.Discount.toFixed(2)}
          </span>
        </div>
      )}
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Vat Amount</span>
        <span className="text-xl font-sans">
          + £{cart?.Vat_Amount.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center font-semibold pt-4 text-lg mb-4">
        <span className="text-xl font-bold">Amount to be Paid:</span>
        <span className="text-2xl font-sans">
          £{cart?.TotalAmount.toFixed(2)}
        </span>
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
