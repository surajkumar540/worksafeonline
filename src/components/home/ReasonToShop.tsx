import { PiMedal } from "react-icons/pi";
import { bigShoulders } from "@/app/layout";
import { GiPriceTag } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";

const reasons = [
  {
    icon: <HiOutlineTrophy />,
    title: "NUMBER 1 IN THE UK SINCE 1983",
    description:
      "After more than 60 years in the business, the family-run company has gained a deep understanding of how to produce clothing.",
  },
  {
    icon: <PiMedal />,
    title: "QUALITY & LIFETIME GUARANTEE",
    description:
      "After more than 60 years in the business, the family-run company has gained a deep understanding of how to produce clothing.",
  },
  {
    icon: <GiPriceTag />,
    title: "PRICE MATCH OUR COMPETITORS",
    description:
      "After more than 60 years in the business, the family-run company has gained a deep understanding of how to produce clothing.",
  },
];

const ReasonsToShop = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto lg:px-6">
        <div className={`relative ${bigShoulders.className}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-center tracking-wider bg-gradient-to-b mb-10 from-gray-300 via-gray-200 to-white bg-clip-text text-transparent">
            WHY CHOOSE US
          </h1>
          <p
            className={`uppercase text-3xl md:text-5xl text-center absolute font-black whitespace-nowrap bottom-0 md:bottom-5 left-1/2 translate-x-[-50%] translate-y-1/2`}
          >
            Reasons to shop
          </p>
        </div>
        <div className="grid px-4 lg:px-32 grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 lg:p-8 rounded-lg text-center transition-transform duration-200 ease-linear transform hover:scale-105 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-6xl">{reason.icon}</span>
                <span className="text-8xl font-bold text-center tracking-wider bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-clip-text text-transparent">
                  0{index + 1}
                </span>
              </div>
              <h3
                className={`text-lg text-left font-black text-gray-800 mb-4 ${bigShoulders.className}`}
              >
                {reason.title}
              </h3>
              <p className="text-gray-500 text-left text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToShop;
