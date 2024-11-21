import { bigShoulders } from "@/app/layout";
import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden mb-10 whitespace-nowrap relative bottom-12 lg:bottom-7 w-full bg-primary">
      <div className="marquee h-28 flex justify-center items-center">
        <span
          className={`text-4xl uppercase font-semibold tracking-wider flex justify-center items-center ${bigShoulders.className}`}
        >
          Build for work &nbsp; * &nbsp; Keep it scrolling forever! &nbsp; *
          &nbsp; Add more items here! &nbsp; * &nbsp; Keep it scrolling forever!
          &nbsp; * &nbsp; Add more items here! &nbsp; * &nbsp; Keep it scrolling
          forever! &nbsp; * &nbsp; Add more items here! &nbsp; * &nbsp; Keep it
          scrolling forever! &nbsp; * &nbsp; Add more items here! &nbsp; *
          &nbsp; Keep it scrolling forever! &nbsp; * &nbsp; Add more items here!
          &nbsp; * &nbsp; Keep it scrolling forever! &nbsp; * &nbsp; Add more
          items here! &nbsp; * &nbsp; Keep it scrolling forever! &nbsp; * &nbsp;
          Add more items here! &nbsp; * &nbsp; Keep it scrolling forever! &nbsp;
          * &nbsp; Add more items here!
        </span>
      </div>
    </div>
  );
};

export default Marquee;
