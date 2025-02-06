import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import LogoModal from "@/components/modals/LogoModal";

interface CartItemProps {
  fetchCart: any;
  handleRemove: any;
  handleUpdateQuantity: any;
}

const CartItem: React.FC<CartItemProps> = ({
  fetchCart,
  handleRemove,
  handleUpdateQuantity,
}) => {
  const [data, setData] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);
  const openArtWorkModal = async (artworkDetails: any) => {
    setData(artworkDetails);
    setOpenModal(true);
  };
  return (
    <>
      <LogoModal
        data={data}
        isVisible={openModal}
        onclose={() => setOpenModal(false)}
      />
      <div className="md:hidden">
        {fetchCart.map((item: any) => {
          return (
            <div key={item?.Line} className="border-b flex gap-2 items-start">
              <div className="w-1/4 p-2">
                <Image
                  width={200}
                  height={200}
                  src={item?.ProductImage}
                  alt={item?.ProductDescription}
                  className="w-full aspect-square object-contain rounded-md border"
                />
              </div>
              <div className="w-3/4 py-2">
                <>
                  <p className={`line-clamp-1 font-bold`}>
                    {item?.ProductDescription}
                  </p>
                  {item?.Colour && (
                    <span className="text-sm">Color: {item?.Colour}</span>
                  )}
                  {item?.Fitting && (
                    <span className="border-x text-sm px-2 mx-2 border-black">
                      Fitting: {item?.Fitting}
                    </span>
                  )}
                  {item?.Size && (
                    <span className="text-sm mb-1">Size: {item?.Size}</span>
                  )}
                </>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        handleUpdateQuantity(
                          item.Line,
                          Math.max(1, item.Quantity - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <span className="px-2">{item.Quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        handleUpdateQuantity(item.Line, item.Quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  {item?.ArtworkExist > 0 && (
                    <p
                      onClick={() => openArtWorkModal(item?.ArtworkDetails)}
                      className="bg-secondary/80 cursor-pointer text-white px-2 text-xs whitespace-nowrap py-1 rounded hover:bg-secondary w-fit transition"
                    >
                      View Detail
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block">
        <div
          className={`grid grid-cols-7 border-y py-4 gap-5 justify-center items-center ${bigShoulders.className}`}
        >
          <p></p>
          <p className="text-xl lg:text-2xl col-span-2 font-black uppercase">
            Product
          </p>
          <p className="text-xl lg:text-2xl font-black uppercase">ArtWork</p>
          <p className="text-xl lg:text-2xl font-black uppercase">Price</p>
          <p className="text-xl lg:text-2xl font-black uppercase">Quantity</p>
          <p className="text-xl lg:text-2xl font-black uppercase">Subtotal</p>
        </div>
        {fetchCart.map((item: any) => {
          return (
            <div
              key={item?.Line}
              className="border-b grid grid-cols-7 gap-5 justify-center items-center"
            >
              <div className="p-2 flex justify-center items-center">
                <span
                  onClick={() => handleRemove(item?.Line)}
                  className="flex justify-center items-center my-auto h-full transition-all duration-200 ease-linear cursor-pointer rounded-full hover:bg-gray-200 p-2 mr-1"
                >
                  <RxCross1 />
                </span>
                <Image
                  width={200}
                  height={200}
                  src={item?.ProductImage}
                  alt={item?.ProductDescription}
                  className="w-full aspect-square object-contain rounded-md border"
                />
              </div>
              <div className="col-span-2">
                <p className="line-clamp-3 text-sm lg:text-base font-semibold">
                  {item?.ProductDescription}
                </p>
                {item?.Colour && (
                  <span className="text-sm">Color: {item?.Colour}</span>
                )}
                {item?.Fitting && (
                  <span className="border-x text-sm px-2 mx-2 border-black">
                    Fitting: {item?.Fitting}
                  </span>
                )}
                {item?.Size && (
                  <span className="text-sm">Size: {item?.Size}</span>
                )}
              </div>
              {item?.ArtworkExist > 0 ? (
                <p
                  onClick={() => openArtWorkModal(item?.ArtworkDetails)}
                  className="bg-secondary/80 cursor-pointer text-white px-2 text-sm whitespace-nowrap py-1 rounded hover:bg-secondary w-fit transition"
                >
                  View Detail
                </p>
              ) : (
                "-"
              )}
              <p className="text-sm lg:text-lg">£ {item?.SalesPrice}</p>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>
                    handleUpdateQuantity(
                      item.Line,
                      Math.max(1, item.Quantity - 1)
                    )
                  }
                >
                  -
                </button>
                <span className="px-2 lg:px-4">{item.Quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() =>
                    handleUpdateQuantity(item.Line, item.Quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <p className="text-sm lg:text-lg">
                £ {item.LineTotal.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartItem;
