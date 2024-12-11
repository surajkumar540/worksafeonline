"use client";

import { Product } from "@/types/api";
import { toast } from "react-toastify";
import {
  addToCart,
  // getCartDetails,
  // removeProduct,
  // updateQuantity,
} from "@/api/cartApi";
import { bigShoulders } from "@/app/layout";
// import { storeDeviceData } from "@/api/generateDeviceId";
import { handleAddToCart } from "@/hooks/useEventEmitter";

const AddToCartButton = ({
  product,
  quantity,
  fieldsCheck,
  selectedFields,
}: {
  product: Product;
  quantity: number;
  fieldsCheck: any;
  selectedFields: any;
}) => {
  const handleCart = async (product: any) => {
    if (fieldsCheck()) return;
    if (selectedFields?.size.length === 0)
      return toast.info("Please select a size");

    const updatedData = {
      quantity: quantity,
      MenuId: product.MenuId,
      Style: product?.ProductID,
      Size: selectedFields?.size,
      Color: selectedFields?.color,
      Fitting: selectedFields?.fitting,
      Description: product?.ProductName,
      ListingImage: product?.ProductImage,
      EndPrice: product?.ProductSellingPrice,
    };
    const handleAddToCartRequest = {
      BOM: [],
      DeviceID: "",
      ProductID: updatedData?.Style,
      Colour: updatedData?.Color?.Colour.trim(),
      Fitting: updatedData?.Fitting?.Fitting.trim(),
      Size: updatedData?.Size.map((item: any) => ({
        Size: item?.Size,
        Quantity: item?.quantity,
      })),
    };
    await addToCart(handleAddToCartRequest);
    // const response: any = await getCartDetails();
    // const filtered = response?.Products.filter(
    //   (item: any) => item?.ProductCode === updatedData?.Style
    // );
    // const removeProductData = {
    //   Seq: 0,
    //   Qty: 0,
    //   DeviceID: "",
    //   Line: filtered[0]?.Line,
    // };
    // const updateProductData = {
    //   Seq: 0,
    //   Qty: 1,
    //   DeviceID: "",
    //   Line: 47,
    // };
    // const d = await removeProduct(removeProductData);
    // console.log(response, d);
    // const d = await updateQuantity(updateProductData);
    // console.log(response, d);
    // const resp: any = await getCartDetails();
    // console.log(resp);
    await handleAddToCart(updatedData);
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
