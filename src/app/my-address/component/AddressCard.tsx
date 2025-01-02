import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

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
  const router = useRouter();
  const handleEdit = (id: number | string) => {
    router.push(`/edit-address?address_id=${id}&type=${type}`);
  };
  return (
    <div
      onClick={() => handleSelected(address?.ID)}
      className={`text-black p-4 pb-2 h-fit transition-all border-2 cursor-pointer duration-200 rounded-xl ${
        selectedAddress === address?.ID ? "border-primary" : "border-primary/20"
      }`}
    >
      {address?.Customer_Name && (
        <p className="flex items-center gap-5 text-lg mb-1">
          <span className="text-primary text-xl">
            <FaUser />
          </span>
          <span className="text-base">{address.Customer_Name}</span>
        </p>
      )}
      {address?.Telephone && (
        <p className="flex items-center gap-5 text-lg mb-1">
          <span className="text-primary text-xl">
            <FaPhone />
          </span>
          <span className="text-base">{address.Telephone}</span>
        </p>
      )}
      {address?.Address && (
        <p className="flex items-center gap-5 text-lg mb-1">
          <span className="text-primary text-xl">
            <FaLocationDot />
          </span>
          <span className="text-base">
            {address.Address ? address.Address : "-"}
          </span>
        </p>
      )}
      <div className="flex justify-end gap-3 mb-2">
        {address?.AllowEdit === 1 && (
          <button
            title="Edit Address"
            onClick={() => handleEdit(address?.ID)}
            className="flex items-center text-sm gap-1 px-2 py-1.5 text-white bg-primary/80 hover:bg-primary rounded-md transition"
          >
            <MdEdit className="text-xl" />
            Edit
          </button>
        )}
        {address?.AllowDelete === 1 && (
          <button
            title="Delete Address"
            className="flex items-center text-sm gap-1 px-2 py-1.5 text-white bg-red-500 hover:bg-red-600 rounded-md transition"
          >
            <MdDelete className="text-xl" />
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
