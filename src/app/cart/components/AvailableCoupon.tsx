import { RiCoupon3Fill } from "react-icons/ri";

const AvailableCoupon = ({
  couponList,
  applyCoupon,
  selectedCoupon,
  setSelectedCoupon,
}: {
  couponList: any;
  applyCoupon: any;
  selectedCoupon: any;
  setSelectedCoupon: any;
}) => {
  return (
    <div className="bg-gray-50 rounded-b-xl">
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        Available <span className="text-secondary">Coupons</span>
      </h2>
      <div className="grid md:grid-cols-2 p-4 gap-2">
        {couponList.map((couponListItem: any) => {
          const isSelected = selectedCoupon?.Coupon === couponListItem.Code;
          return (
            <div
              key={couponListItem?.Code}
              className={`py-2 px-3 rounded-xl border cursor-pointer ${
                isSelected
                  ? "bg-secondary border-secondary"
                  : "bg-white group hover:bg-secondary hover:border-secondary"
              }`}
            >
              <div className="flex items-center flex-wrap justify-between gap-2">
                <p
                  className={`text-xl flex items-center gap-1 font-semibold ${
                    isSelected
                      ? "text-white"
                      : "text-secondary group-hover:text-white"
                  }`}
                >
                  <RiCoupon3Fill className="text-2xl" /> {couponListItem?.Code}
                </p>
                <button
                  type="button"
                  onClick={async () => {
                    setSelectedCoupon((prev: any) => ({
                      ...prev,
                      Coupon: couponListItem.Code,
                    }));
                    await applyCoupon(couponListItem.Code);
                  }}
                  className={`text-xs rounded-full px-4 py-1 ${
                    isSelected
                      ? "bg-white text-secondary"
                      : "bg-secondary text-white group-hover:bg-white group-hover:text-secondary"
                  }`}
                >
                  Apply
                </button>
              </div>
              <span
                className={`font-semibold text-sm ${
                  isSelected
                    ? "text-white"
                    : "text-blue-400 group-hover:text-white"
                }`}
              >
                T&C*
              </span>
              <p
                className={`text-xs tracking-wide font-thin ${
                  isSelected
                    ? "text-white"
                    : "text-gray-500 group-hover:text-white"
                }`}
              >
                {couponListItem?.Description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableCoupon;
