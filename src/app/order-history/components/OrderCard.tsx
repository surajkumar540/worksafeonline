const OrderCard = ({ cart }: { cart: any }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md space-y-4">
      {/* Header */}
      <div className="flex border-b border-primary pb-3 justify-between items-center">
        <span className="uppercase font-bold text-gray-800">
          Product ({cart?.CartTot?.TotalQuantity})
        </span>
        <span className="uppercase font-bold text-gray-800">Subtotal</span>
      </div>

      {/* Products */}
      <div className="border-b border-primary">
        {cart?.Products?.length > 0 ? (
          cart.Products.map((item: any) => (
            <div
              key={item.Line}
              className="flex justify-between items-center pb-3 text-gray-700 text-sm"
            >
              <span>
                {item.ProductDescription}{" "}
                <span className="font-semibold">x {item.Quantity}</span>
              </span>
              <span className="text-gray-800 font-medium">
                £{item?.LineTotal.toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <div className="text-gray-500 italic">No products in the cart.</div>
        )}
      </div>

      {/* Amounts */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span>Amount excluding VAT</span>
          <span className="font-medium">
            £{cart?.CartTot?.TotalAmountExVat.toFixed(2)}
          </span>
        </div>
        {cart?.CartTot?.ArtworkCost > 0 && (
          <div className="flex justify-between items-center">
            <span>Artwork Cost</span>
            <span className="text-yellow-600 font-medium">
              + £{cart?.CartTot?.ArtworkCost.toFixed(2)}
            </span>
          </div>
        )}
        {cart?.CartTot?.Discount > 0 && (
          <div className="flex justify-between items-center">
            <span>Discount Applied</span>
            <span className="text-red-500 font-medium">
              - £{cart?.CartTot?.Discount.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span>VAT Amount</span>
          <span className="font-medium">
            + £{cart?.CartTot?.Vat_Amount.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Final Amount */}
      <div className="flex justify-between items-center text-primary font-semibold text-lg">
        <span>Final Amount:</span>
        <span className="text-2xl font-bold">
          £{cart?.CartTot?.TotalAmount.toFixed(2)}
        </span>
      </div>

      {/* Order Details Button */}
      <div className="text-right">
        <button
          className="bg-primary text-black w-full px-5 py-2 rounded-lg transition"
          onClick={() => alert("View order details")}
        >
          Show Order Details
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
