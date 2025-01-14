interface DeliveryAddressProps {
  address: {
    Email: string;
    County: string;
    Country: string;
    Address: string;
    PostTown: string;
    PostCode: string;
    Telephone: string;
    CustomerName: string;
  };
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({ address }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-secondary text-white py-2 px-4">
        Billing <span className="">Address</span>
      </h2>
      <div className="grid grid-cols-2 lg:bg-gray-50 rounded-b-xl px-4 py-2 gap-1 text-sm">
        <p className="font-bold">Company/Your Name:</p>
        <p className="">{address.CustomerName ? address.CustomerName : "-"}</p>

        <p className="font-bold">Address:</p>
        <p className="">{address.Address ? address.Address : "-"}</p>

        <p className="font-bold">Post Town:</p>
        <p className="">{address.PostTown ? address.PostTown : "-"}</p>

        <p className="font-bold">County:</p>
        <p className="">{address.County ? address.County : "-"}</p>

        <p className="font-bold">Post Code:</p>
        <p className="">{address.PostCode ? address.PostCode : "-"}</p>

        <p className="font-bold">Country:</p>
        <p className="">{address.Country ? address.Country : "-"}</p>

        <p className="font-bold">Telephone:</p>
        <p className="">{address.Telephone ? address.Telephone : "-"}</p>

        <p className="font-bold">Email:</p>
        <p className="">{address.Email ? address.Email : "-"}</p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
