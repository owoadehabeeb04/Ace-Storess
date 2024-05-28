import React, { useState } from "react";
import account from "../../img/account.svg";
import orders from "../../img/order.svg";
// import messages from "../../img/messages.svg";
// import Reviews from "../../img/reviews.svg";
// import vouchers from "../../img/voucher.svg";
import wishlist from "../../img/wishlist.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/config";
import { toast } from "react-toastify";

const SideBar = () => {
  const accountData = [
    {
      href: "/Account/Profile",
      h1: "My Account",
      img: account,
    },
    {
      href: "/Account/Order",
      h1: "Orders",
      img: orders,
    },
    // {
    //   href: "/Account/Profile",
    //   h1: "Messages / Inbox",
    //   img: messages,
    // },
    // {
    //   href: "/Account/Profile",
    //   h1: "Reviews",
    //   img: Reviews,
    // },
    // {
    //   href: "/Account/Profile",
    //   h1: "Vouchers",
    //   img: vouchers,
    // },
    {
      href: "/Account/Profile",
      h1: "Wishlist",
      img: wishlist,
    },
  ];
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const signOut = async (e: any) => {
    console.log("Sign out button clicked");
    setLoad(true); 
    try {
      console.log(' signingout')
      await auth.signOut();
      console.log("Sign out successful");
      setLoad(false);
      toast.success("sign out succesfully");
      navigate("/Home");
    } catch (err: any) {
      console.error("Error during sign out:", err);
      toast.error(`Error during sign out: ${err.message}`);
    }
  };
  return (
    <div className="bg-white flex flex-col rounded-xl h-full  shadow-2xl border col-span-2 w-full pt-6 pb-[2.5rem]">
      <div className="flex flex-grow  gap-12 flex-col pl-[1.5rem] pr-[2.5rem]">
        {accountData.map((acc, i) => (
          <Link to={acc.href}>
            <div
              className="flex gap-2 hover:text-[#ED3618] hover:font-medium hover:bg-[#FFF1EF] hover:p-4 transition-all cursor-pointer rounded-[0.75rem]"
              key={i}
            >
              <img src={acc.img} alt="pictureheader" />

              <h1 className="text-] text-[1.5rem]  leading-[normal]  font-sans">
                {acc.h1}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="sm:justify-center items-center sm:mt-0 mt-4 sm:ml-o ml-4 flex justify-self-end ">
        <button
          className=" border-solid border-[1.5px] rounded-[3.375rem] border-[#2f2f2f] bg-white w-fit sm:px-0 px-4 sm:w-[80%] flex sm:justify-center sm:items-center py-2"
          onClick={signOut}
        >
          {load && (
            <div className="border-4  animate-spin border-black p-2 w-fit flex  justify-center items-center text-center rounded-full"></div>
          )}
          <p className={`${load ? "hidden" : ""}`}>
            <span className="font-sans text-[#2f2f2f] text-[1.5rem] font-normal leading-normal">
              Log Out
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
