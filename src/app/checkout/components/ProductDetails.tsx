import Image from "next/image";
import React from "react";

interface ProductDetailsProps {
  cart: {
    Products: {
      Line: number;
      ProductImage: string;
      ProductCode: string;
      ProductDescription: string;
      Colour: string;
      Fitting: string;
      Size: string;
      Quantity: number;
      SalesPrice: number;
      LineTotal: number;
      BulkDiscount: string;
      ArtworkExist: number;
      ArtworkTotalPerQty: number;
      Approve: number;
      ArtworkDetails: string | null;
      Vat: string;
    }[];
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ cart }) => {
  return (
    <div className="overflow-x-scroll no-scrollbar">
      <table className="w-full border-collapse whitespace-nowrap">
        <thead>
          <tr className="bg-[#F06022] font-semibold md:uppercase text-xs md:text-sm text-white">
            <th className="p-3 border text-center">S. No.</th>
            <th className="p-3 border text-center">Image</th>
            <th className="p-3 border text-left">Product Code</th>
            <th className="p-3 border w-1/2 text-left">Description</th>
            <th className="p-3 border text-center">Colour</th>
            <th className="p-3 border text-center">Fitting</th>
            <th className="p-3 border text-center">Size</th>
            <th className="p-3 border text-center">Quantity</th>
            <th className="p-3 border text-center">Price</th>
            <th className="p-3 border text-center">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart?.Products.map((product, index: number) => (
            <tr
              key={product.Line}
              className="hover:bg-gray-50 text-xs cursor-pointer border-b"
            >
              <td className="px-2 text-sm text-center">{index + 1}.</td>
              <td className="px-2 flex items-center py-1">
                <Image
                  width={100}
                  height={100}
                  src={product.ProductImage}
                  alt={product.ProductDescription}
                  className="w-9 h-9 object-contain"
                />
              </td>
              <td className="px-2 text-center">{product.ProductCode}</td>
              <td className="px-2">{product.ProductDescription}</td>
              <td className="px-2 text-center">{product.Colour}</td>
              <td className="px-2 text-center">{product.Fitting}</td>
              <td className="px-2 text-center">{product.Size}</td>
              <td className="px-2 text-center">X {product.Quantity}</td>
              <td className="px-2 text-center">
                £{product.SalesPrice.toFixed(2)}
              </td>
              <td className="px-2 text-base font-semibold text-center">
                £{product.LineTotal.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
