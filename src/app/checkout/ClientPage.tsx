"use client";

import { bigShoulders } from "../layout";
import { mockData } from "./components/data";
import CartSkeleton from "./CheckoutSkeleton";
import { getCartDetails } from "@/api/cartApi";
import { RiLoginBoxFill } from "react-icons/ri";
import { formFields } from "./components/formType";
import OrderTotals from "./components/OrderTotals";
import Features from "@/components/common/Features";
import AccountManage from "./components/AccountManage";
import { useCallback, useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import OrderReference from "./components/OrderReference";
import DeliveryAddress from "./components/DeliveryAddress";
import { FaAddressBook, FaShoppingCart } from "react-icons/fa";
import CheckoutForm, { Accordion } from "./components/CheckoutForm";

export default function ClientPage() {
  const [cart, setCart] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>({});
  const [activateScreen, setActivateScreen] = useState<any>(null);
  const [formloading, setFormLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    city: "",
    state: "",
    email: "",
    zipcode: "",
    lastName: "",
    firstName: "",
    orderNotes: "",
    countryCode: "",
    phomenumber: "",
    companyName: "",
    addressLine1: "",
    addressLine2: "",
  });

  console.log(formloading);

  useEffect(() => {
    const token =
      typeof window !== "undefined" &&
      localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (token) setActivateScreen(1);
    else setActivateScreen(0);
  }, []);

  const fetchCart = useCallback(async () => {
    try {
      const response = await getCartDetails();
      if (response?.status) setCart(response);
      else setCart({});
    } catch (error) {
      setCart({});
      console.log("Error fetching Cart: " + error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  const validateForm = () => {
    const newErrors: any = {};
    formFields.forEach((field) => {
      const value = formData[field.name];
      if (newErrors[field.name]) return;
      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }
      if (field.validation) {
        const validationError = field.validation(value);
        if (validationError) newErrors[field.name] = validationError;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set errors to state if validation fails
      return;
    }
    try {
      setErrors({});
      setFormLoading(true);
      console.log(formData);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) return <CartSkeleton />;

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <h1
          className={`uppercase text-4xl md:text-5xl lg:text-6xl flex items-center font-black ${bigShoulders.className}`}
        >
          checkout
        </h1>
        <div className="flex flex-col mt-5">
          <AccountManage
            icon={RiLoginBoxFill}
            activateScreen={activateScreen}
            setActivateScreen={setActivateScreen}
          />
          <CheckoutForm
            errors={errors}
            formData={formData}
            icon={FaAddressBook}
            title="Billing Details"
            setFormData={setFormData}
            activateScreen={activateScreen}
            setActivateScreen={setActivateScreen}
          />
          <CheckoutForm
            errors={errors}
            formData={formData}
            icon={FaAddressBook}
            title="Delivery Details"
            setFormData={setFormData}
            activateScreen={activateScreen}
            setActivateScreen={setActivateScreen}
          />
          {cart && cart?.Products && cart?.Products.length > 0 && (
            <Accordion
              Icon={FaShoppingCart}
              title="Order Details"
              activateScreen={activateScreen}
            >
              <div className="space-y-5">
                <ProductDetails cart={cart} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <DeliveryAddress
                    title="Delivery"
                    address={mockData.deliveryAddress}
                  />
                  <DeliveryAddress
                    title="Invoice"
                    address={mockData.invoiceAddress}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <OrderReference />
                  <div>
                    <OrderTotals cart={cart} handleSubmit={handleSubmit} />
                  </div>
                </div>
              </div>
            </Accordion>
          )}
        </div>
      </div>
      {/* <div className="flex items-center justify-center">
        <PayPalCheckout />
      </div> */}
      <Features />
    </>
  );
}
