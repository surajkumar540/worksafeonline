import { bigShoulders } from "@/app/layout";

const ApplyCoupon = () => {
  return (
    <div className="">
      <h2
        className={`uppercase my-5 text-xl md:text-3xl flex items-center font-black ${bigShoulders.className}`}
      >
        Apply Coupon
      </h2>
      <div className="flex justify-start items-center gap-5">
        <input
          className="w-full lg:w-1/2 p-4 text-sm border-2 border-gray-300 rounded-full focus:outline-none focus:ring-primary"
          type="text"
          placeholder="Enter your coupon code"
        />
        <button className="w-fit px-4 border-2 border-primary whitespace-nowrap lg:px-12 bg-primary font-sans hover:bg-primary/70 py-4 text-xs font-semibold rounded-full">
          APPLY COUPON
        </button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
