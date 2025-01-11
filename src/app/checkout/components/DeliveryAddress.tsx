interface DeliveryAddressProps {
  title: string;
  address: {
    name: string;
    address: string;
    postTown: string;
    county: string;
    postCode: string;
    country: string;
    telephone: string;
    email: string;
  };
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  title,
  address,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase rounded-t-xl bg-black text-white py-2 px-4">
        {title} <span className="text-secondary">Address</span>
      </h2>
      <div className="grid grid-cols-2 bg-gray-50 rounded-b-xl p-4 gap-2 text-sm">
        <p className="font-bold">Company/Your Name:</p>
        <p className="">{address.name}</p>

        <p className="font-bold">Address:</p>
        <p className="">{address.address}</p>

        <p className="font-bold">Post Town:</p>
        <p className="">{address.postTown}</p>

        <p className="font-bold">County:</p>
        <p className="">{address.county}</p>

        <p className="font-bold">Post Code:</p>
        <p className="">{address.postCode}</p>

        <p className="font-bold">Country:</p>
        <p className="">{address.country}</p>

        <p className="font-bold">Telephone:</p>
        <p className="">{address.telephone}</p>

        <p className="font-bold">Email:</p>
        <p className="">{address.email}</p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
