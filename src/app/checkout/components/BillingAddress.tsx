interface BillingAddressProps {
  title: string;
  address: {
    DAdd: string;
    DName: string;
    DPTown: string;
    DPCode: string;
    DEmail: string;
    DCounty: string;
    DTelephone: string;
    DCountryCode: string;
  };
}

const BillingAddress: React.FC<BillingAddressProps> = ({ title, address }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-black text-white py-2 px-4">
        {title} <span className="text-secondary">Address</span>
      </h2>
      <div className="grid grid-cols-2 lg:bg-gray-50 rounded-b-xl p-4 gap-2 text-sm">
        <p className="font-bold">Company/Your Name:</p>
        <p className="">{address.DName ? address.DName : "-"}</p>

        <p className="font-bold">Address:</p>
        <p className="">{address.DAdd ? address.DAdd : "-"}</p>

        <p className="font-bold">Post Town:</p>
        <p className="">{address.DPTown ? address.DPTown : "-"}</p>

        <p className="font-bold">County:</p>
        <p className="">{address.DCounty ? address.DCounty : "-"}</p>

        <p className="font-bold">Post Code:</p>
        <p className="">{address.DPCode ? address.DPCode : "-"}</p>

        <p className="font-bold">Country:</p>
        <p className="">{address.DCountryCode ? address.DCountryCode : "-"}</p>

        <p className="font-bold">Telephone:</p>
        <p className="">{address.DTelephone ? address.DTelephone : "-"}</p>

        <p className="font-bold">Email:</p>
        <p className="">{address.DEmail ? address.DEmail : "-"}</p>
      </div>
    </div>
  );
};

export default BillingAddress;
