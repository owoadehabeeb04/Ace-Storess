import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/stateContext";
import {  useNavigate, useParams } from "react-router-dom";
import { createCheckout } from "../../api/checkout";
import { auth } from "../config/config";
import { toast } from "react-toastify";

import { PaystackButton } from "react-paystack";
import { deleteCart } from "../../api/cart";
import { createOrder } from "../../api/order";

const Checkoutsummary = () => {
  const [ordering, settingOrdering] = useState(false);
  const { homeaddress }: any = useStateContext();
  const { formData, setFormData }: any = useStateContext();

  const { cardOrDelivery, setcardOrDelivery }: any = useStateContext();
  const payOnDelivery = () => {
    setcardOrDelivery("PAYONDELIVERY");
    console.log(cardOrDelivery);
  };
  const payWithCard = () => {
    setcardOrDelivery("PAYWITHCARD");
    console.log(cardOrDelivery);
  };
  useEffect(() => {
    console.log("CARDORDELIVERY", cardOrDelivery);
  }, [cardOrDelivery]);
  console.log(Object.entries(formData));

  const { orderId, setOrderId }: any = useStateContext();

  const totalPrice: any = localStorage.getItem("totalprice");
  const totalquantity = localStorage.getItem("totalquantity");
  const noTotalQuantity = Number(totalquantity);
  console.log(noTotalQuantity, totalPrice);

  const allFieldsValid =
    Object.values(formData).every((field: any) => !field.hasError) &&
    cardOrDelivery !== "";

  const paymentBtn = async (e: React.FormEvent) => {
    e.preventDefault();

    const validateEmail = (email: string) => {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    };

    // Check and update form data state based on validation
    setFormData((prevData: any) => ({
      ...prevData,
      firstName: {
        value: prevData.firstName.value,
        hasError: prevData.firstName.value === "",
      },
      lastName: {
        value: prevData.lastName.value,
        hasError: prevData.lastName.value === "",
      },
      city: {
        value: prevData.city.value,
        hasError: prevData.city.value === "",
      },
      state: {
        value: prevData.state.value,
        hasError: prevData.state.value === "",
      },
      address: {
        value: prevData.address.value,
        hasError: prevData.address.value === "",
      },
      additionalInfo: {
        value: prevData.additionalInfo.value,
        hasError: prevData.additionalInfo.value === "", // Update this based on your validation logic
      },
      phoneNo: {
        value: prevData.phoneNo.value,
        hasError: prevData.phoneNo.value.toString().length < 10,
      },

      Email: {
        value: prevData.Email.value,
        hasError: !validateEmail(prevData.Email.value),
      },
    }));

    // Check if all fields have no errors
    const allFieldsValid =
      Object.values(formData).every((field: any) => !field.hasError) &&
      cardOrDelivery !== "";
    console.log(cardOrDelivery);

    if (allFieldsValid) {
      console.log("success");

      // api function to firebase
      const userId = auth.currentUser?.uid;
      console.log(userId);
    }

    if (!allFieldsValid) {
      console.log("failure");

      // Continue with your logic for successful form submission
    }
  };

  // const [AddressSaved, setAddressSaved] = useState("");
  const [AddressSavedArray, setAddressSavedArray] = useState([""]);
  useEffect(() => {
    if (homeaddress && formData.address.value !== "") {
      setAddressSavedArray((prevAddresses) => [
        ...prevAddresses,
        formData.address.value,
      ]);
    }
  }, [homeaddress, formData.address.value]);

  let newSavedArray: string[] = [];

  AddressSavedArray.forEach((arr) => {
    if (!newSavedArray.includes(arr)) {
      newSavedArray.push(arr);
    }
  });
  const navigate = useNavigate();
  const { cart }: any = useStateContext();
  let componentProps: any;

  console.log(cart);
  const userId = auth?.currentUser?.uid;
  console.log(userId);
  const [index, setIndex] = useState(0);

  const orderingFunction = async () => {
    const OrderIdd = await createOrder({
      // date: new Date().toISOString(),
      date: new Date(new Date().toISOString()).toLocaleString("en-US", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),

      orderId: orderId,
      price: totalPrice,
      shippingAddress: formData.address.value,
      paymentType: cardOrDelivery,
      cart: [...cart],
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      email: formData.Email.value,
      phoneNo: formData.phoneNo.value,
      userId: userId,
    });

    const cartIds = cart.map((cartItem: { cartId: any }) => cartItem.cartId);
    async function clearCartAfterPayment(
      e: any,
      i: React.SetStateAction<number>
    ) {
      setIndex(i);
      const selectedCartIds = cart.map((item: { cartId: any }) => item.cartId);
      for (const cartId of selectedCartIds) {
        await deleteCart(cartId);
        // toast.success("deleted carts")
      }
    }
    clearCartAfterPayment(cartIds, cartIds[index]);

    setOrderId(OrderIdd);
    await createCheckout({
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      city: formData.city.value,
      state: formData.state.value,
      address: formData.address.value,
      additionalInfo: formData.additionalInfo.value,
      phoneNo: formData.phoneNo.value,
      Email: formData.Email.value,
      cardOrDelivery: cardOrDelivery,
      userId: userId,
    });
  };

  const { reference } = useParams();
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  console.log(publicKey);
  const amount: any = totalPrice * 100;
  const name: any = formData.firstName.value;
  const phone: any = formData.phoneNo.value;
  const email: any = formData.Email.value;
  // setTimeout(function () {
  componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: ({ reference }: any) => {
      settingOrdering(true);
      console.log(reference);
      toast.success("success !");
      orderingFunction();
      toast.success("creating orders!");
      navigate(`/Success/${reference}`);
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => alert("Wait, Please don't leave "),
  };

  return (
    <div className="px-6 py-8 bg-white rounded-xl shadow-2xl mt-4 xl:mt-0 border col-span-1">
      <h1 className="text-black font-OpenSans font-semibold leading-[normal] text-base sm:text-[1.25rem] ">
        Summary
      </h1>
      <p className="text-[#818181] text-[0.75rem] pt-[1.19rem] font-OpenSans font-medium leading-[normal] ">
        CART SUMMARY
      </p>

      <hr className="mt-[0.5rem]" />
      {/* Discount */}

      <figcaption className="flex flex-col gap-4 mb-[2.37rem]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#666] font-OpenSans text-[0.75rem] sm:text-base font-normal leading-[normal]">
            Sub Total
          </h1>
          <p className="text-black text-[0.75rem]  sm:text-[1.25rem] font-semibold leading-[normal]">
            &#8358;{totalPrice}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#666] font-OpenSans text-[0.75rem] sm:text-base font-normal leading-[normal]">
            Discount
          </h1>
          <p className="text-[0.75rem]  sm:text-[1.25rem] ">{}</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#666] font-OpenSans text-[0.75rem] sm:text-base font-normal leading-[normal]">
            Shipping cost
          </h1>
          <p className="text-[0.75rem]  sm:text-[1.25rem] "></p>
        </div>
      </figcaption>

      <div className="border-b-[1px] mb-4 border-0 border-[#D9D9D9]">
        <h1 className="text-[#818181] pb-[0.5rem] font-OpenSans text-[0.75rem] font-medium leading-[normal]">
          DELIVERY ADDRESS
        </h1>
      </div>
      {/* address */}

      <div className="rounded-[0.5rem] border-[1px] border-solid bg-white border-[#E9E9E9] w-full py-[0.5rem] sm:py-[0.7rem] pl-[0.75rem]">
        <h1 className="text-[#333] text-[0.6rem] sm:text-[0.875rem] pb-[0.25rem] font-medium leading-[normal]">
          {formData.firstName.value}
        </h1>

        {newSavedArray.map((address, index) => (
          <h3
            key={index}
            className="text-[#818181] font-OpenSans text-[0.5rem] sm:text-[0.875rem] font-normal leading-[normal]"
          >
            {address}
          </h3>
        ))}
      </div>

      <div className="border-b-[1px] mb-4 mt-[2.75rem] border-0 border-[#D9D9D9]">
        <h1 className="text-[#818181] pb-[0.5rem] font-OpenSans text-[0.75rem] font-medium leading-[normal]">
          DELIVERY METHOD
        </h1>
      </div>

      {/* Pay On Delivery */}
      <div
        className={`flex gap-[0.5rem] pl-[0.75rem] py-[0.75rem] border-2 border-solid border-[#E9E9E9] rounded-[0.5rem]  ${
          cardOrDelivery === "" ? "border-red-500" : "border-[#E9E9E9] "
        }`}
      >
        <div>
          <label htmlFor="payOnDelivery">
            <input
              id="payOnDelivery"
              className={`w-[0.875rem] h-[0.875rem] rounded-[100%] border-2 cursor-`}
              type="radio"
              name="pay"
              onClick={payOnDelivery}
            />
          </label>
        </div>

        <div>
          <h1 className="text-[#333] font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-medium leading-[normal]">
            Pay on Delivery
          </h1>
          <p className="text-[#818181] pt-[0.25rem] text-[0.5rem] sm:text-[0.875rem]  font-OpenSans font-normal leading-[normal] ">
            With Cash, Bank transfers or Cards
          </p>
        </div>
      </div>
      <div
        className={`flex gap-[0.5rem] pl-[0.75rem] mt-4 py-[0.75rem] border-2 border-solid border-[#E9E9E9] rounded-[0.5rem]  ${
          cardOrDelivery === "" ? "border-red-500" : "border-[#E9E9E9] "
        }`}
      >
        <div>
          <label htmlFor="">
            <input
              className={`w-[0.875rem] h-[0.875rem]  rounded-[100%]  border-2 cursor-pointer border-black`}
              type="radio"
              name="pay"
              // checked={checked()}
              onClick={payWithCard}
            />
          </label>
        </div>

        <div>
          <h1 className="text-[#333] font-OpenSans text-[0.65rem] sm:text-[0.875rem] font-medium leading-[normal]">
            Pay with Cards, Bank Transfer or USSD
          </h1>
          <p className="text-[#818181] pt-[0.25rem] text-[0.5rem] sm:text-[0.875rem] sm font-OpenSans font-normal leading-[normal] ">
            With Cash, Bank transfers or Cards
          </p>
        </div>
      </div>
      <div>
        {allFieldsValid ? (
          <PaystackButton
            className="rounded-[3.125rem] text-white font-OpenSans text-base font-medium leading-[normal] bg-black shadow w-full py-4 mt-[3rem] sm:mt-[5rem]"
            {...componentProps}
            onClick={(e: any) => {
              // clearCartAfterPayment();
              orderingFunction();
              paymentBtn(e);
            }}
          />
        ) : (
          <button
            className="rounded-[3.125rem] text-white font-OpenSans text-base font-medium leading-[normal] bg-black shadow w-full py-4 mt-[3rem] sm:mt-[5rem]"
            onClick={(e: any) => {
              paymentBtn(e);
            }}
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkoutsummary;
