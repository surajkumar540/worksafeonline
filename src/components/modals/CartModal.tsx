import React from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import eventEmitter from "@/hooks/useEventEmitter";
import SubTotal from "@/app/wishlist/components/cart/SubTotal";
import CartItem from "@/app/wishlist/components/cart/cartItems";
import Image from "next/image";

const CartListModal = ({
  cart,
  isOpen,
  setCart,
  handleToggle,
}: {
  cart: any;
  setCart: any;
  isOpen: boolean;
  handleToggle: any;
}) => {
  const handleRemove = (id: string) => {
    cart = cart.filter((item: any) => item?.ID !== id);
    if (cart.length === 0) handleToggle();
    setCart(cart);
    if (eventEmitter) eventEmitter.emit("removeFromCart", id);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full text-black bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-full md:w-1/2 lg:w-[30%]`}
      >
        <div className="flex justify-between relative items-center p-4 shadow-md">
          <p
            className={`text-xl font-black uppercase ${bigShoulders.className}`}
          >
            Shopping Cart ({cart.length})
          </p>
          <RxCross1
            size={20}
            title="Close"
            onClick={handleToggle}
            className="text-black text-3xl hover:text-primary"
          />
        </div>
        <div className="overflow-auto h-full pb-60">
          {cart && cart.length > 0 ? (
            cart.map((item: any) => (
              <React.Fragment key={item?.ID}>
                <CartItem product={item} handleRemove={handleRemove} />
              </React.Fragment>
            ))
          ) : (
            <Image
              width={200}
              height={200}
              priority
              unoptimized
              alt={"Empty Wishlist"}
              src={"/assets/empty_cart.avif"}
              className="w-2/3 mx-auto object-contain rounded-md"
            />
          )}
        </div>
        <div className="absolute bottom-0 pb-3 w-full bg-white border-t">
          <SubTotal cart={cart} />
          <div className="w-full flex flex-col gap-3 justify-center px-4 text-white items-center">
            <Link
              href={"/cart"}
              onClick={handleToggle}
              className="bg-primary rounded-full uppercase hover:bg-primary/70 font-semibold transition-all duration-200 ease-linear outline-none w-full text-center py-3"
            >
              View Cart
            </Link>
            <Link
              href={"/checkout"}
              onClick={handleToggle}
              className="bg-black rounded-full uppercase hover:bg-transparent/80 font-semibold transition-all duration-200 ease-linear outline-none w-full text-center py-3"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
};

export default CartListModal;
