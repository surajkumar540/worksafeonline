import Link from "next/link";
import React from "react";

interface Order {
  Seq: number;
  Email: string;
  OrderID: number;
  FlagTrack: number;
  OrderedBy: string;
  Order_Date: string;
  TotalValue: number;
  TotalEvent: number;
  FlagReturn: number;
  FlagCancel: number;
  Customer_Ref: string;
  Customer_Name: string;
  PaymentStatus: string;
}

const OrderHistoryTable = ({ orders }: { orders: Order[] }) => {
  return (
    <div className="overflow-x-auto no-scrollbar mt-5">
      <table className="min-w-full whitespace-nowrap border-collapse bg-white text-sm text-gray-800">
        <thead className="bg-primary/80 text-black font-semibold">
          <tr>
            <th className="border border-primary px-4 text-center py-3">#</th>
            <th className="border border-primary px-4 py-3 text-left">
              Order ID
            </th>
            <th className="border border-primary px-4 py-3 text-left">
              Customer Name
            </th>
            <th className="border border-primary px-4 py-3 text-left">
              Reference
            </th>
            <th className="border border-primary px-4 py-3 text-left">
              Order Date
            </th>
            <th className="border border-primary px-4 py-3 text-right">
              Total Value
            </th>
            <th className="border border-primary px-4 py-3 text-left">Email</th>
            <th className="border border-primary px-4 py-3 text-left">
              Payment Status
            </th>
            <th className="border border-primary px-4 py-3 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order.Seq}
              className={`cursor-pointer ${
                index % 2 !== 0 ? "bg-primary/20" : "bg-white"
              }`}
            >
              <td className="border border-primary text-center px-4 py-3">
                {order.Seq ? order.Seq : "-"}
              </td>
              <td className="border border-primary px-4 py-3">
                {order.OrderID ? order.OrderID : "-"}
              </td>
              <td className="border border-primary px-4 py-3">
                {order.Customer_Name ? order.Customer_Name : "-"}
              </td>
              <td className="border border-primary px-4 py-3">
                {order.Customer_Ref ? order.Customer_Ref : "-"}
              </td>
              <td className="border border-primary px-4 py-3">
                {order.Order_Date ? order.Order_Date : "-"}
              </td>
              <td className="border border-primary font-semibold px-4 py-3 text-left">
                £ {order.TotalValue ? order.TotalValue.toFixed(2) : "-"}
              </td>
              <td className="border border-primary px-4 py-3">
                {order.Email ? order.Email : "-"}
              </td>
              <td
                className={`border border-primary px-4 py-3 ${
                  order.PaymentStatus === "success"
                    ? "text-green-700"
                    : "text-red-600"
                }`}
              >
                {order.PaymentStatus}
              </td>
              <td className="border border-primary px-4 py-3">
                <div className="flex items-center gap-2">
                  <Link
                    href={"/order-history/" + order.OrderID}
                    className="bg-secondary/80 text-white px-2 py-1 rounded text-xs hover:bg-secondary transition"
                  >
                    View Details
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryTable;
