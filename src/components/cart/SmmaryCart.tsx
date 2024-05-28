import React from "react";
import { useStateContext } from "../../context/stateContext";
import { Link, useNavigate } from "react-router-dom";

const SmmaryCart = () => {
  var { theTotalPrice }: any = useStateContext();
  const { boldCartCheckPay, setboldCartCheckPay }: any = useStateContext();
  var { cart, setCart }: any = useStateContext();
  console.log(cart);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    if (cart.lenth > 0) {
      navigate("/Checkout");
      setboldCartCheckPay("checkout");
    }
  };
  // const checkoutbtn = useEffect(() => {
  //   // This effect will run after the initial render and any subsequent updates
  //   // You can safely perform state updates here
  //   setboldCartCheckPay("");
  // }, []);
  console.log(boldCartCheckPay);
  return (
    <div className="px-6 py-8 bg-white rounded-xl shadow-2xl border col-span-1">
      <h1 className="text-black font-OpenSans font-semibold leading-[normal] text-[1.25rem] ">
        Summary
      </h1>
      <p className="text-[#818181] pt-[1.19rem] font-OpenSans font-medium leading-[normal] ">
        CART SUMMARY
      </p>

      <hr className="mt-[0.5rem]" />
      <figure className="flex justify-between pt-4 pb-[3rem] ">
        <h1 className="text-[#666] font-OpenSans text-[1.25rem] font-medium leding-[normal]">
          Order Total
        </h1>
        <p className="text-black  text-[1.25rem] font-semibold leading-[normal]">
          &#8358;{theTotalPrice}
        </p>
      </figure>
      {/* Discount */}

      <div>
        <h1 className="text-[#818181] font-OpenSans text-[0.75rem] font-medium leading-[normal]">
          DISCOUNT CODE
        </h1>
        <hr />
        <div className="relative discount">
          <input
            type="text"
            className="w-full pl-4 py-[0.8rem] mt-4  rounded-[1.5rem] border border-solid border-[#E9E9E9] bg-[#F7F7F7]"
            placeholder="Add a discount code"
          />

          <button className="text-white px-[2rem] py-[0.7rem] rounded-[1.25rem] float-right absolute right-[0.2%] top-[30%]  shadow-inner backdrop-blur-xl bg-gradient-to-l from-neutral-300 to-neutral-300      font-OpenSans text-base font-medium leading-[normal] ">
            Apply
          </button>
        </div>
        <p className="text-[#414141] font-OpenSans text-[0.875rem] pt-[0.75rem] font-medium leading-normal">
          New Customer? <span className="text-[#ED3618] "> Sign up</span> to get
          better offers
        </p>
      </div>
      <figure>
        <h1 className="mt-[3rem]">SHIPPING ADDRESS</h1>
        <hr />
        <div className="flex gap-[0.63rem] mt-[1.12rem]  pb-[3.5rem] items-center">
          <input
            className="w-[1rem] h-[1rem] border-2 cursor-pointer border-black"
            type="checkbox"
            checked={false}
            // onClick={}
          />

          <p className="text-[#333] font-OpenSans text-[0.875rem] font-medium leading-[normal]">
            Same as home address
          </p>
        </div>
      </figure>
      <figcaption className="flex flex-col gap-4 mb-[2.37rem]">
        <div className="flex justify-between items-center">
          <h1 className="text-[#666] font-OpenSans text-base font-normal leading-[normal]">
            Sub Total
          </h1>
          <p className="text-black  text-[1.25rem] font-semibold leading-[normal]">
            &#8358;{theTotalPrice}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#666] font-OpenSans text-base font-normal leading-[normal]">
            Discount
          </h1>
          <p>{}</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#666] font-OpenSans text-base font-normal leading-[normal]">
            Shipping cost
          </h1>
          <p></p>
        </div>
      </figcaption>
      <div className="flex items-center justify-between">
        <h1>Grand Total</h1>
        <p className="text-black  text-[1.25rem] font-semibold leading-[normal]">
          &#8358;{theTotalPrice}
        </p>
      </div>
      <div>
        <Link to="/Checkout">
          <button
            className="rounded-[3.125rem] bg-black shadow w-full py-4 mt-12"
            onClick={navigateToCheckout}
          >
            <span className="text-white font-OpenSans text-base font-medium leading-[normal]">
              Checkout Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SmmaryCart;
