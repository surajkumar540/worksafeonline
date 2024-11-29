import React from "react";
import { TiMessages } from "react-icons/ti";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
import { GiWaterRecycling } from "react-icons/gi";

const ProductActions = () => (
  <div className="uppercase mt-4 text-xs text-gray-700 flex flex-wrap justify-evenly gap-5 md:justify-between items-center md:gap-2">
    <div className="flex items-center gap-2">
      <TiMessages size={20} />
      <span className="underline">Ask a question</span>
    </div>
    <div className="flex items-center gap-2">
      <TfiRulerAlt2 size={20} />
      <span className="underline">size guide</span>
    </div>
    <div className="flex items-center gap-2">
      <BsHeart size={20} />
      <span className="underline">add to watchlist</span>
    </div>
    <div className="flex items-center gap-2">
      <GiWaterRecycling size={20} />
      <span className="underline">compare</span>
    </div>
  </div>
);

export default ProductActions;
