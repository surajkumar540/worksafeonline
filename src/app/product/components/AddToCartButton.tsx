"use client";

import { Product } from "@/types/api";
import { toast } from "react-toastify";
import { addToCart } from "@/api/cartApi";
import { bigShoulders } from "@/app/layout";
import eventEmitter from "@/hooks/useEventEmitter";
import { getDeviceData } from "@/api/generateDeviceId";

const AddToCartButton = ({
  product,
  fieldsCheck,
  selectedFields,
}: {
  product: Product;
  fieldsCheck: any;
  selectedFields: any;
}) => {
  const handleCart = async (product: any) => {
    if (fieldsCheck()) return;
    if (selectedFields?.size.length === 0)
      return toast.info("Please select a size");

    let deviceId: any = "";
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (!token) {
      deviceId = getDeviceData();
      deviceId = deviceId?.deviceId;
    } else deviceId = "";

    const handleAddToCartRequest = {
      BOM: [],
      DeviceID: deviceId,
      ProductID: product?.ProductID,
      Colour: selectedFields?.color?.Colour
        ? selectedFields?.color?.Colour.trim()
        : "NA",
      Fitting: selectedFields?.fitting?.Fitting
        ? selectedFields?.fitting?.Fitting.trim()
        : "NA",
      Size:
        selectedFields?.size.map((item: any) => ({
          Size: item?.Size,
          Quantity: item?.quantity,
        })) ?? [],
    };
    const response = await addToCart(handleAddToCartRequest);
    if (response?.status) eventEmitter?.emit("addToCart", product?.ProductID);
  };
  return (
    <button
      type="button"
      onClick={() => handleCart(product)}
      className={`w-full flex items-center justify-center px-4 py-2 border transition-all duration-200 ease-linear border-primary/20 hover:bg-primary rounded-full text-2xl font-bold uppercase bg-primary/80 text-black ${bigShoulders.className}`}
    >
      Add to Cart
    </button>
  );
};
export default AddToCartButton;
