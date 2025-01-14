interface InvoiceAddressProps {
  address: {
    InvEmail: string;
    InvCounty: string;
    InvCountry: string;
    InvAddress: string;
    InvPostTown: string;
    InvPostCode: string;
    InvTelephone: string;
    InvCustomerName: string;
  };
}

const InvoiceAddress: React.FC<InvoiceAddressProps> = ({ address }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold uppercase lg:rounded-t-xl bg-secondary text-white py-2 px-4">
        Invoice <span className="">Address</span>
      </h2>
      <div className="grid grid-cols-2 lg:bg-gray-50 rounded-b-xl px-4 py-2 gap-1 text-sm">
        <p className="font-bold">Company/Your Name:</p>
        <p className="">
          {address.InvCustomerName ? address.InvCustomerName : "-"}
        </p>

        <p className="font-bold">Address:</p>
        <p className="">{address.InvAddress ? address.InvAddress : "-"}</p>

        <p className="font-bold">Post Town:</p>
        <p className="">{address.InvPostTown ? address.InvPostTown : "-"}</p>

        <p className="font-bold">County:</p>
        <p className="">{address.InvCounty ? address.InvCounty : "-"}</p>

        <p className="font-bold">Post Code:</p>
        <p className="">{address.InvPostCode ? address.InvPostCode : "-"}</p>

        <p className="font-bold">Country:</p>
        <p className="">{address.InvCountry ? address.InvCountry : "-"}</p>

        <p className="font-bold">Telephone:</p>
        <p className="">{address.InvTelephone ? address.InvTelephone : "-"}</p>

        <p className="font-bold">Email:</p>
        <p className="">{address.InvEmail ? address.InvEmail : "-"}</p>
      </div>
    </div>
  );
};

export default InvoiceAddress;
