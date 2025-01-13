interface DeliveryAddressProps {
  title: string;
  address: {
    Add: string;
    Name: string;
    PTown: string;
    PCode: string;
    Email: string;
    County: string;
    Telephone: string;
    CountryCode: string;
  };
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  title,
  address,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        {title} <span className="text-secondary">Address</span>
      </h2>
      <div className="grid grid-cols-2 lg:bg-gray-50 rounded-b-xl p-4 gap-2 text-sm">
        <p className="font-bold">Company/Your Name:</p>
        <p className="">{address.Name ? address.Name : "-"}</p>

        <p className="font-bold">Address:</p>
        <p className="">{address.Add ? address.Add : "-"}</p>

        <p className="font-bold">Post Town:</p>
        <p className="">{address.PTown ? address.PTown : "-"}</p>

        <p className="font-bold">County:</p>
        <p className="">{address.County ? address.County : "-"}</p>

        <p className="font-bold">Post Code:</p>
        <p className="">{address.PCode ? address.PCode : "-"}</p>

        <p className="font-bold">Country:</p>
        <p className="">{address.CountryCode ? address.CountryCode : "-"}</p>

        <p className="font-bold">Telephone:</p>
        <p className="">{address.Telephone ? address.Telephone : "-"}</p>

        <p className="font-bold">Email:</p>
        <p className="">{address.Email ? address.Email : "-"}</p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
