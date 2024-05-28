import React, { useEffect } from "react";
import { SaveNewAddress, checkout } from "../../constants";
import Deliveryform from "./Deliveryform";
import Checkoutsummary from "./Checkoutsummary";
import { useStateContext } from "../../context/stateContext";

const Delivery = () => {
  // const { formData, setFormData }: any = useStateContext();
  const { homeaddress, sethomeaddress }: any = useStateContext();

  const checkedAddress = () => {
    sethomeaddress((prevHomeAddress: any) => !prevHomeAddress);

    setTimeout(() => {
      sethomeaddress(false);
      console.log(homeaddress);
    }, 500);
  };
  useEffect(() => {
    console.log("Address:", homeaddress);
  }, [homeaddress]);

  return (
    <div className="lg:py-4 md:py-4  py-2 px-4 lg:px-[6.25rem] md:px-4 xl:grid grid-cols-3  gap-[2.5rem] ">
      <div className="px-6 py-8 bg-white rounded-xl shadow-2xl border col-span-2">
        <header className="flex justify-between items-center mb-[1.19rem]">
          <h1 className="text-black font-OpenSans text-base sm:text-[1.25rem] font-semibold leading-[normal]">
            {checkout}
          </h1>
          <div className="flex items-center gap-[0.5rem] sm:gap-[0.75rem]">
            <input
              className="w-[0.75rem] h-[0.75rem] border-2 cursor-pointer border-black"
              type="checkbox"
              onClick={() => checkedAddress()}
              checked={homeaddress}
            />
            <h2 className="text-[#818181] font-OpenSans text-[0.5rem] sm:text-[0.75rem] font-medium leading-[normal]">
              {SaveNewAddress}
            </h2>
          </div>
        </header>

        <div className="border-solid border-b-[1px] border-0">
          <h3 className="text-[#818181] font-OpenSans text-[0.5rem] sm:text-[0.75rem] font-medium  leading-normal py-[0.56rem]">
            DELIVERY ADDRESS
          </h3>
        </div>
        <Deliveryform />
      </div>
      <Checkoutsummary />
    </div>
  );
};

export default Delivery;
