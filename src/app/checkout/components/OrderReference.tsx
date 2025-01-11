import React from "react";

const OrderReference = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase rounded-t-xl bg-black text-white py-2 px-4">
        Order <span className="text-secondary">Reference</span>
      </h2>
      <div className="text-sm p-4 bg-gray-50 rounded-b-xl space-y-3">
        <div>
          <label className="font-bold block mb-2">Your Reference:</label>
          <input
            type="text"
            className="w-full border-gray-300 border rounded-lg p-3"
            placeholder="Your Reference"
          />
        </div>
        <div>
          <label className="font-bold block mb-2">Despatch Comments:</label>
          <textarea
            rows={5}
            className="w-full border-gray-300 border rounded-lg p-3"
            placeholder="Despatch Comments"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderReference;
