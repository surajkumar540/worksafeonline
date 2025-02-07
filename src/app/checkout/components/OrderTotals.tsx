import Link from "next/link";
import { useEffect, useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";

interface OrderTotalsProps {
  cart: any;
  updatedCart: any;
  formloading: boolean;
}

const OrderTotals: React.FC<OrderTotalsProps> = ({
  cart,
  updatedCart,
  formloading,
}) => {
  const [cartValues, setCartValues] = useState({
    Coupon: 0,
    Carriage: 0,
    Discount: 0,
    Vat_Amount: 0,
    ArtworkCost: 0,
    TotalAmount: 0,
    TotalQuantity: 0,
    CouponDiscount: 0,
    TotalAmountExVat: 0,
  });

  useEffect(() => {
    if (updatedCart) {
      setCartValues({
        Coupon: updatedCart.Coupon || "",
        Carriage: updatedCart.Carriage || 0,
        Discount: updatedCart.Discount || 0,
        Vat_Amount: updatedCart.Vat_Amount || 0,
        ArtworkCost: updatedCart.ArtworkCost || 0,
        TotalAmount: updatedCart.TotalAmount || 0,
        TotalQuantity: updatedCart.TotalQuantity || 0,
        CouponDiscount: updatedCart.CouponDiscount || 0,
        TotalAmountExVat: updatedCart.TotalAmountExVat || 0,
      });
    }
  }, [updatedCart]); // Runs when updatedCart changes

  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        Order <span className="text-secondary">Totals</span>
      </h2>
      <div className="lg:bg-gray-50 p-4 rounded-b-xl pt-2">
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-bold">Total Quantity</span>
          <span className="text-base font-semibold font-sans">
            x{" "}
            {cartValues?.TotalQuantity
              ? cartValues?.TotalQuantity
              : cart?.CartTot?.TotalQuantity}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-bold">Sub Total (Excl VAT)</span>
          <span className="text-base font-semibold font-sans">
            £
            {cartValues?.TotalAmountExVat
              ? cartValues.TotalAmountExVat
              : cart?.CartTot?.TotalAmountExVat.toFixed(2)}
          </span>
        </div>
        {(cartValues.ArtworkCost > 0 || cart?.CartTot?.ArtworkCost > 0) && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">ArtWork Cost</span>
            <span className="text-base font-semibold font-sans">
              + £
              {cartValues.ArtworkCost
                ? cartValues.ArtworkCost
                : cart?.CartTot?.ArtworkCost.toFixed(2)}
            </span>
          </div>
        )}
        {cartValues.Carriage > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Carriage</span>
            <span className="text-base font-semibold font-sans">
              + £{cartValues.Carriage}
            </span>
          </div>
        )}
        {cartValues.Coupon && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Coupon Code</span>
            <span className="text-base text-secondary font-bold font-sans">
              {cartValues.Coupon}
            </span>
          </div>
        )}
        {(cartValues.CouponDiscount > 0 ||
          cart?.CartTot?.CouponDiscount > 0) && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Coupon Discount Applied</span>
            <span className="text-base font-semibold font-sans">
              - £
              {cartValues.CouponDiscount
                ? cartValues.CouponDiscount
                : cart?.CartTot?.CouponDiscount.toFixed(2)}
            </span>
          </div>
        )}
        {(cartValues.Discount > 0 || cart?.CartTot?.Discount > 0) && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Discount Applied</span>
            <span className="text-base font-semibold font-sans">
              - £
              {cartValues.Discount
                ? cartValues.Discount
                : cart?.CartTot?.Discount.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-bold">Total VAT</span>
          <span className="text-base font-semibold font-sans">
            + £
            {cartValues.Vat_Amount
              ? cartValues.Vat_Amount
              : cart?.CartTot?.Vat_Amount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-secondary items-center font-semibold pt-2 text-xl md:text-2xl mb-5">
          <span className="font-bold">Final Amount:</span>
          <span className="text-xl md:text-2xl font-bold font-sans">
            £
            {cartValues.TotalAmount
              ? cartValues.TotalAmount
              : cart?.CartTot?.TotalAmount.toFixed(2)}
          </span>
        </div>
        <p className="font-sans text-xs md:text-sm text-gray-700">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <Link
            href={"/privacy-policy"}
            className="text-black hover:underline hover:underline-offset-2 hover:text-primary"
          >
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={formloading}
          className="bg-green-500 w-full flex gap-2 items-center justify-center text-white py-2.5 md:text-lg px-5 hover:bg-green-700 transition mt-3"
        >
          <IoBagCheckOutline className="text-2xl" />
          Confirm Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderTotals;
