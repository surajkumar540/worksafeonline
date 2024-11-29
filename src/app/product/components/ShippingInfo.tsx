import { TbReload } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";

const ShippingInfo = () => (
  <div className="mt-4 flex uppercase gap-10 text-sm">
    <div className="flex font-semibold items-center mt-3 gap-3">
      <LiaShippingFastSolid size={24} />
      <span>
        Free delivery <span className="text-gray-400">over $100</span>
      </span>
    </div>
    <div className="flex font-semibold items-center mt-3 gap-3">
      <TbReload size={24} className="rotate-180" />
      <span>
        30 days return <span className="text-gray-400">period</span>
      </span>
    </div>
  </div>
);

export default ShippingInfo;
