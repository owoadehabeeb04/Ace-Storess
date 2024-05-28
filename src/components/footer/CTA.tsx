import React from "react";

import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import { about } from "../../constants";
import { product } from "../../constants";
import { delivery } from "../../constants";
import { Logo } from "../../constants";
const CTA = () => {
  return (
    <div className="py-4 pt-[14em] max-[640px]:pt-12 pb-[5rem] max-[480px]:pl-6">
      <div className="flex max-[480px]:gap-8 sm:gap-0 justify-evenly flex-wrap max-[480px]:flex-col">
        <div className="">
          <h1 className="text-black font-Inika font-bold text-[1rem] sm:text-2xl leading-normal  uppercase ">
            {Logo}
          </h1>

          <div className="flex flex-row   ">
            <div className="mr-2  bg-[#EAEAEA] p-[0.5em]  sm:p-4 rounded-[50%] flex justify-center items-center mt-[2.9em] max-[480px]:mt-0 ">
              <img className="w-[20px] sm:w-[30px] ml-0" src={twitter} alt={twitter} />
            </div>
            <div className="mr-2 bg-[#EAEAEA] p-[0.5em] sm:p-4 rounded-[50%] flex justify-center items-center mt-[2.9em] max-[480px]:mt-0">
              <img className="w-[10px] sm:w-[20px]" src={facebook} alt={facebook} />
            </div>
            <div className="mr-2 bg-[#EAEAEA] p-[0.5em]  sm:p-4 rounded-[50%] flex justify-center items-center mt-[2.9em] max-[480px]:mt-0">
              <img className="w-[20px] sm:w-[30px]" src={instagram} alt={instagram} />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-black font-OpenSans sm:text-2xl font-semibold leading-normal text-base">
            About
          </h1>
          <div>
            <ul className="flex flex-col text-left pl-0">
              {about.map((item, i) => (
                <li
                  className="text-[#414141] font-OpenSans text-4 font-normal leading-normal sm:mt-4 "
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <h1 className="text-black font-OpenSans sm:text-2xl font-semibold leading-normal text-base">
            Products
          </h1>
          <div>
            <ul className="flex flex-col text-left pl-0 ">
              {product.map((item, i) => (
                <li
                  className="text-[#414141]   font-OpenSans text-4 font-normal leading-normal  sm:mt-4 "
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <h1 className="text-black font-OpenSans sm:text-2xl font-semibold leading-normal text-base">
            Delivery
          </h1>
          <div>
            <ul className="flex flex-col text-left pl-0 ">
              {delivery.map((item, i) => (
                <li
                  className="text-[#414141]   font-OpenSans text-4 font-normal leading-normal  sm:mt-4 "
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-[480px]:hidden"></div>
        <div className="max-[480px]:hidden"></div>
      </div>
    </div>
  );
};

export default CTA;
