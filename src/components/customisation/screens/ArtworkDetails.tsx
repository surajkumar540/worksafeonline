import Image from "next/image";
import React, { useState } from "react";

export const ArtworkDetails = ({
  product: products,
  setIsLogoSelected,
}: {
  product: any;
  setIsLogoSelected: any;
}) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleSelectRow = (index: number) => {
    setSelectedRow(selectedRow === index ? null : index);
    setIsLogoSelected(selectedRow === index ? null : index);
  };

  return (
    <table className="table-auto w-full border-collapse border border-black">
      <thead>
        <tr>
          <th className="border border-black px-4 py-2 font-bold uppercase text-center w-1/12">
            S.No.
          </th>
          <th className="border border-black px-4 py-2 font-bold uppercase text-center w-1/3">
            Artwork
          </th>
          <th className="border border-black px-4 py-2 font-bold uppercase text-center w-1/3">
            Position
          </th>
          <th className="border border-black px-4 py-2 font-bold uppercase text-center w-1/3">
            Application Type
          </th>
          <th className="border border-black px-4 py-2 font-bold uppercase text-center w-1/12">
            Select
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: any, index: number) => (
          <tr
            key={product?.id}
            className={`${
              selectedRow === index ? "bg-primary/10" : ""
            } hover:bg-gray-100`}
          >
            {/* S.No. Column */}
            <td className="border border-black px-4 py-2 text-center align-middle">
              {index + 1}
            </td>

            {/* Artwork Column */}
            <td className="border border-black px-4 py-2 text-center align-middle">
              {product?.imageText?.id === 1 ? (
                <Image
                  alt="Artwork Image"
                  width={200}
                  height={75}
                  src={product?.designImage}
                  className="w-fit object-contain mx-auto"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <p className="font-bold">
                    Font Style:{" "}
                    <span className="font-light">{product?.addtext?.font}</span>
                  </p>
                  <p className="font-bold">
                    Color:{" "}
                    <span className="font-light">
                      {product?.addtext?.color}
                    </span>
                  </p>
                  {product?.addtext?.textLine1 && (
                    <p className="font-bold">
                      Line Text 1:{" "}
                      <span className="font-light">
                        {product?.addtext?.textLine1}
                      </span>
                    </p>
                  )}
                  {product?.addtext?.textLine2 && (
                    <p className="font-bold">
                      Line Text 2:{" "}
                      <span className="font-light">
                        {product?.addtext?.textLine2}
                      </span>
                    </p>
                  )}
                  {product?.addtext?.textLine3 && (
                    <p className="font-bold">
                      Line Text 3:{" "}
                      <span className="font-light">
                        {product?.addtext?.textLine3}
                      </span>
                    </p>
                  )}
                </div>
              )}
            </td>

            {/* Position Column */}
            <td className="border border-black px-4 py-2 text-center align-middle">
              <Image
                alt="Position Icon"
                width={200}
                height={100}
                src={product?.logoPosition?.icon}
                className="w-fit object-contain mx-auto"
              />
            </td>

            {/* Application Type Column */}
            <td className="border border-black px-4 py-2 text-center align-middle">
              <Image
                alt="Application Type Icon"
                width={200}
                height={75}
                src={product?.printEmbroidery?.icon}
                className="w-fit object-contain mx-auto"
              />
            </td>

            {/* Select Button */}
            <td className="border border-black px-4 py-2 text-center align-middle">
              <button
                onClick={() => handleSelectRow(index)}
                className={`px-4 py-1 text-white rounded-md ${
                  selectedRow === index ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {selectedRow === index ? "Deselect" : "Select"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
