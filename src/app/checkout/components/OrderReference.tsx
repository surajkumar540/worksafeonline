import React from "react";

const OrderReference = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        Order <span className="text-secondary">Reference</span>
      </h2>
      <div className="text-sm p-4 lg:bg-gray-50 rounded-b-xl space-y-3">
        <div>
          <label className="font-bold block mb-2">Your Reference*:</label>
          <input
            type="text"
            name="Customer_Ref"
            value={formData.Customer_Ref || ""}
            onChange={handleChange}
            required
            className="w-full border-gray-300 border rounded-lg p-3"
            placeholder="Your Reference"
          />
        </div>
        <div>
          <label className="font-bold block mb-2">Despatch Comments:</label>
          <textarea
            rows={5}
            name="Despatch_Comments"
            value={formData.Despatch_Comments || ""}
            onChange={handleChange}
            className="w-full border-gray-300 border rounded-lg p-3"
            placeholder="Despatch Comments"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderReference;
