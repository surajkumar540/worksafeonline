import { bigShoulders } from "@/app/layout";

const ApplyCoupon = ({
  applyCoupon,
  removeCoupon,
  selectedCoupon,
  setSelectedCoupon,
}: {
  applyCoupon: any;
  removeCoupon: any;
  selectedCoupon: any;
  setSelectedCoupon: any;
}) => {
  const handleApplyCoupon = async () => {
    applyCoupon(selectedCoupon.Coupon);
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setSelectedCoupon((prev: any) => ({
      ...prev,
      Coupon: "",
    }));
  };

  return (
    <div className="bg-gray-50 rounded-b-xl">
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        Apply <span className="text-secondary">Coupon</span>
      </h2>
      <div className="flex justify-start bg-gray-50 items-center p-4 pb-0 gap-2 md:gap-5">
        <input
          value={selectedCoupon?.Coupon || ""}
          onChange={(e) =>
            setSelectedCoupon((prev: any) => ({
              ...prev,
              Coupon: e.target.value,
            }))
          }
          className="w-2/3 p-4 text-sm border-2 border-gray-300 rounded-full focus:outline-none focus:ring-primary"
          type="text"
          placeholder="Enter your coupon code"
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          disabled={!selectedCoupon?.Coupon}
          className={`w-1/3 px-4 whitespace-nowrap bg-secondary/70 text-white font-sans hover:bg-secondary transition py-3.5 font-semibold rounded-full ${bigShoulders.className}`}
        >
          APPLY COUPON
        </button>
      </div>
      <div className="text-center flex items-center gap-1 px-4 pt-2 text-sm text-gray-500">
        <p>Do you want to remove this coupon?</p>
        <button
          type="button"
          onClick={handleRemoveCoupon}
          className="text-sm text-red-500 hover:underline"
        >
          Remove Coupon
        </button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
