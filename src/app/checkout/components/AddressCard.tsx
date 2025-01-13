import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaPhone } from "react-icons/fa";

const AddressCard = ({
  type,
  address,
  handleSelected,
  selectedAddress,
}: {
  type: string;
  address: any;
  handleSelected?: any;
  selectedAddress?: any;
}) => {
  const handleSelect = (address: any, type: string) => {
    if (type === "billing") {
      handleSelected((prev: any) => ({
        ...prev,
        billingAddressId: address,
      }));
    } else if (type === "invoice") {
      handleSelected((prev: any) => ({
        ...prev,
        invoiceAddressId: address,
      }));
    }
  };

  return (
    <div
      onClick={() => handleSelect(address, type)}
      className={`p-4 pb-2 text-sm h-full transition-all border-[3px] cursor-pointer duration-200 rounded-xl ${
        (type === "billing" &&
          selectedAddress.billingAddressId?.ID === address?.ID) ||
        (type === "invoice" &&
          selectedAddress.invoiceAddressId?.ID === address?.ID)
          ? "border-secondary/80 bg-secondary text-white"
          : "border-gray-200 text-gray-500"
      }`}
    >
      {address?.Customer_Name && (
        <p className="flex items-center gap-2 mb-1">
          <span>
            <FaUser />
          </span>
          <span>{address.Customer_Name}</span>
        </p>
      )}
      {address?.Telephone && (
        <p className="flex items-center gap-2 mb-1">
          <span>
            <FaPhone />
          </span>
          <span>{address.Telephone}</span>
        </p>
      )}
      {address?.Address && (
        <p className="flex items-center gap-2 mb-1">
          <span>
            <FaLocationDot />
          </span>
          <span>{address.Address ? address.Address : "-"}</span>
        </p>
      )}
    </div>
  );
};

export default AddressCard;
