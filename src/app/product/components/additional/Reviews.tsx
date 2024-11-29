import { bigShoulders } from "@/app/layout";
import { GoPersonFill } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import Button from "@/components/common/Button";

const Reviews = ({ handleChangeContent }: { handleChangeContent: any }) => {
  const RatingDistribution = [30, 20, 15, 25, 10];
  return (
    <div id="reviews" className="mt-8 lg:mt-14 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:gap-20">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="flex items-center text-gray-500 text-xl gap-5 ">
            <h2
              className={`${bigShoulders.className} text-primary text-6xl font-black`}
            >
              4.4
            </h2>
            <div className="flex flex-col ">
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <IoStarSharp
                    size={20}
                    key={`full-${i}`}
                    className="text-black"
                  />
                ))}
              </div>
              <p className="text-black text-[15px]">100 verified ratings</p>
            </div>
          </div>
          <Button
            text={`Write a review`}
            classes="!rounded-full bg-black !px-6 mt-5 uppercase w-full md:!w-fit text-lg font-semibold border-2 tracking-tight hover:bg-black border-black text-white"
            onClick={() => handleChangeContent("reviews")}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-3/4 gap-5 mt-5 md:mt-0">
          <div className="flex flex-col">
            {Array.from({ length: 5 }, (_, i) => {
              const ratingPercentage = RatingDistribution[i];
              const width = `${ratingPercentage}%`; // Make sure width is a string like '30%'
              const widthRemaining = `${100 - ratingPercentage}%`; // Make sure width is a string like '30%'
              return (
                <div key={i} className="flex items-center w-full lg:w-1/2">
                  <p>{5 - i}</p>
                  <IoStarSharp size={15} className="text-black mx-2" />
                  <span style={{ width }} className="bg-primary h-1"></span>
                  <span
                    style={{ width: widthRemaining }}
                    className="bg-gray-100 h-1"
                  ></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-5 border-b pb-5">
        <div>
          <GoPersonFill
            size={48}
            className="bg-gray-300 rounded-full px-1 pt- text-white"
          />
        </div>
        <div>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <IoStarSharp size={15} key={`full-${i}`} className="text-black" />
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-black">Join Hiddleston</p>
              <span className="text-gray-500"> - February 22, 2024</span>
            </div>
            <p className="font-normal">
              Quality is good though. Lots of pockets for hand tools and
              storage. Fit reminds me of 90's jeans. Down size for length and
              waist is true to size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
