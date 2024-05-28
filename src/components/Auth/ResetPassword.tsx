// src/components/ResetPassword.js

import React, { useState } from "react";
import Navbar from "../../containers/nav_bar";
import { toast } from "react-toastify";
import firebase, { auth } from "../config/config";
import { sendPasswordResetEmail } from "firebase/auth";
import padlock from "../../img/reset-password.png";
import CTA from "../footer/CTA";
const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);

      toast.success("Password reset email sent. Check your inbox!");
    } catch (error: any) {
      console.error("Error sending password reset email:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <div className="flex justify-center items-center">
          <img className="w-[20%] sm:w-[20%]" src={padlock} alt="" />
        </div>
        <h1 className="text-[#000] font-OpenSans sm:mt-4  text-center md:text-[2rem] text-[1.5rem] lg:text-[3rem] font-bold">
          Reset Password
        </h1>

        <div className="flex flex-col justify-center items-center gap-2">
          <label
            htmlFor="email"
            className="text-[black] text-base lg:text-[1.5rem]  leading-normal font-semibold font-OpenSans"
          >
            Email:
          </label>
          <input
            className=" border-2 border-[#CCD2E0] w-3/4 sm:w-[40%]  outline-none border-solid text-black rounded-[5px] px-2 py-1"
            type="email"
            name="Email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />{" "}
          {/* <span className="text-red-500">{errors.email}</span> */}
          <button
            className="upercase bg-black sm:mt-4 sm:w-fit w-3/4 border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem] "
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default ResetPassword;
