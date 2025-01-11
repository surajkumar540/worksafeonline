import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";

interface OrderTotalsProps {
  cart: any;
  handleSubmit: any;
}

const OrderTotals: React.FC<OrderTotalsProps> = ({ cart, handleSubmit }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        Order <span className="text-secondary">Totals</span>
      </h2>
      <div className="lg:bg-gray-50 p-4 rounded-b-xl pt-2">
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-bold">Total Quantity</span>
          <span className="text-base font-semibold font-sans">
            X {cart?.CartTot?.TotalQuantity}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-bold">Sub Total (Excl VAT)</span>
          <span className="text-base font-semibold font-sans">
            £{cart?.CartTot?.TotalAmountExVat.toFixed(2)}
          </span>
        </div>
        {cart?.CartTot?.ArtworkCost > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">ArtWork Cost</span>
            <span className="text-base font-semibold font-sans">
              + £{cart?.CartTot?.ArtworkCost.toFixed(2)}
            </span>
          </div>
        )}
        {cart?.CartTot?.Discount > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Discount Applied</span>
            <span className="text-base font-semibold font-sans">
              - £{cart?.CartTot?.Discount.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-bold">Total VAT</span>
          <span className="text-base font-semibold font-sans">
            + £{cart?.CartTot?.Vat_Amount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-secondary items-center font-semibold pt-2 text-xl md:text-2xl mb-5">
          <span className="font-bold">Final Amount:</span>
          <span className="text-xl md:text-2xl font-bold font-sans">
            £{cart?.CartTot?.TotalAmount.toFixed(2)}
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
          type="button"
          onClick={handleSubmit}
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
