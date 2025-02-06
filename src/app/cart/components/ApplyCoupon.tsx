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
      <div className="flex justify-start bg-gray-50 items-center pt-4 lg:p-4 pb-0 gap-2 md:gap-5">
        <input
          value={selectedCoupon?.Coupon || ""}
          onChange={(e) =>
            setSelectedCoupon((prev: any) => ({
              ...prev,
              Coupon: e.target.value,
            }))
          }
          type="text"
          autoComplete="off"
          placeholder="Enter your coupon code"
          className="w-2/3 p-4 text-sm border-2 border-gray-300 rounded-full focus:outline-none focus:ring-primary"
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          disabled={!selectedCoupon?.Coupon}
          className={`w-1/3 px-2 text-xs lg:uppercase lg:text-base lg:px-4 whitespace-nowrap bg-secondary/70 text-white font-sans hover:bg-secondary transition py-3.5 font-semibold rounded-full ${bigShoulders.className}`}
        >
          Apply Coupon
        </button>
      </div>
      <div className="text-center flex flex-wrap items-center gap-1 px-2 lg:px-4 pt-2 lg:pt-0 text-sm text-gray-500">
        <p>Do you want to remove this coupon?</p>
        <button
          type="button"
          onClick={handleRemoveCoupon}
          className="text-xs lg:text-sm text-red-500 hover:underline"
        >
          Remove Coupon
        </button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
