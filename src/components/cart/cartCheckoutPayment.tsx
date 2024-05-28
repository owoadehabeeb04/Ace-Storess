import React from "react";
import { useStateContext } from "../../context/stateContext";

const CartCheckPay = () => {
  const { boldCartCheckPay }: any = useStateContext();
  
  // const arrow = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="5"
  //     height="9"
  //     viewBox="0 0 5 9"
  //     fill="none"
  //   >
  //     <path
  //       d="M5 4.12219L4.52036 4.62446L1.04524 8.24438L0 7.23983L2.99095 4.12219L0 1.00454L1.04524 0L4.52036 3.61991L5 4.12219Z"
  //       fill="#000"
  //     />
  //   </svg>
  // );

  return (
    <div className=" flex items-center lg:py-4 md:py-4  py-2 px-4 lg:px-[6.25rem] md:px-4 gap-[1.5rem]">
      <div className=" flex items-center gap-[0.5rem]">
        <h1
          className={`'font-OpenSans flex  gap-[0.3rem] text-[0.875rem]  '  ${
            boldCartCheckPay === "cart" ? "text-black font-semibold" : "text-[#818181]"
          }  `}
        >
          CART
          <span>{">"}</span>{" "}
        </h1>
      </div>
      <div className=" flex items-center gap-[0.5rem]">
        <h1
          className={`'font-OpenSans flex  gap-[0.3rem] text-[0.875rem] '  ${
            boldCartCheckPay === "checkout"
              ? "text-black font-semibold"
              : "text-[#818181]"
          }  `}
        >
          CHECKOUT
          <span>{">"}</span>{" "}
        </h1>
      </div>
      <div className=" flex items-center gap-[0.5rem]">
        <h1
          className={`'font-OpenSans text-[0.875rem] flex  gap-[0.3rem] '   ${
            boldCartCheckPay === "payment" ? "text-black font-semibold " : "text-[#818181]"
          }  `}
        >
          PAYMENT
          <span>{">"}</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default CartCheckPay;
