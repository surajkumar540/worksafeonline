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
    <div className="overflow-x-auto rounded-lg bg-white">
      <table className="table-auto w-full text-sm border-collapse">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="border px-4 py-2 font-bold uppercase text-center text-gray-600">
              S.No.
            </th>
            <th className="border px-4 py-2 font-bold uppercase text-center text-gray-600">
              Artwork
            </th>
            <th className="border px-4 py-2 font-bold uppercase text-center text-gray-600">
              Position
            </th>
            <th className="border px-4 py-2 font-bold uppercase text-center text-gray-600">
              Application Type
            </th>
            <th className="border px-4 py-2 font-bold uppercase text-center text-gray-600">
              Select
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any, index: number) => (
            <tr
              key={product?.id}
              className={`${
                selectedRow === index ? "bg-blue-50" : "bg-white"
              } hover:bg-blue-100 transition-all`}
            >
              {/* S.No. Column */}
              <td className="border px-4 py-3 text-center align-middle font-medium text-gray-800">
                {index + 1}
              </td>

              {/* Artwork Column */}
              <td className="border px-4 py-3 text-center align-middle">
                {product?.imageText?.id === 1 ? (
                  <Image
                    alt="Artwork Image"
                    width={200}
                    height={75}
                    src={product?.designImage}
                    className="w-fit object-contain mx-auto rounded-md shadow-sm"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <p className="font-semibold text-gray-700">
                      Font Style:{" "}
                      <span className="font-light">
                        {product?.addtext?.font}
                      </span>
                    </p>
                    <p className="font-semibold text-gray-700">
                      Color:{" "}
                      <span className="font-light">
                        {product?.addtext?.color}
                      </span>
                    </p>
                    {product?.addtext?.textLine1 && (
                      <p className="font-semibold text-gray-700">
                        Line Text 1:{" "}
                        <span className="font-light">
                          {product?.addtext?.textLine1}
                        </span>
                      </p>
                    )}
                    {product?.addtext?.textLine2 && (
                      <p className="font-semibold text-gray-700">
                        Line Text 2:{" "}
                        <span className="font-light">
                          {product?.addtext?.textLine2}
                        </span>
                      </p>
                    )}
                    {product?.addtext?.textLine3 && (
                      <p className="font-semibold text-gray-700">
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
              <td className="border px-4 py-3 text-center align-middle">
                <Image
                  alt="Position Icon"
                  width={200}
                  height={100}
                  src={product?.logoPosition?.icon}
                  className="w-fit object-contain mx-auto rounded-md shadow-sm"
                />
              </td>

              {/* Application Type Column */}
              <td className="border px-4 py-3 text-center align-middle">
                <Image
                  alt="Application Type Icon"
                  width={200}
                  height={75}
                  src={product?.printEmbroidery?.icon}
                  className="w-fit object-contain mx-auto rounded-md shadow-sm"
                />
              </td>

              {/* Select Button */}
              <td className="border px-4 py-3 text-center align-middle">
                <button
                  onClick={() => handleSelectRow(index)}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg shadow-md transition-transform transform ${
                    selectedRow === index
                      ? "bg-red-500 hover:scale-105"
                      : "bg-green-500 hover:scale-105"
                  }`}
                >
                  {selectedRow === index ? "Deselect" : "Select"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
