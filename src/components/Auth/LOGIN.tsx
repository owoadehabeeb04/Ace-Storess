import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../containers/nav_bar";
import CTA from "../footer/CTA";
import { Link, useNavigate } from "react-router-dom";

import img2 from "../../img/Rectangle 23 (1).svg";
// import googleimg from "../../img/google.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { useStateContext } from "../../context/stateContext";
import { toast } from "react-toastify";

const LOGIN = () => {
  let [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setLoggedIn }: any = useStateContext();
  useEffect(() => {
    // Check local storage for login status on component mount
    // const storedLoginStatus = localStorage.getItem("loggedIn");
    // if (storedLoginStatus) {
    //   setLoggedIn(JSON.parse(storedLoginStatus));
    // }
  }, []);
  const navigate = useNavigate();

  const signIn = async (e: any) => {
    e.preventDefault();
    console.log("clicked");
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        Password
      );
      const user = userCredentials.user;
      console.log(user);
      if (user) {
        // alert("success");
        setEmail("");
        setPassword("");
        // localStorage.setItem("loggedIn", JSON.stringify(true));
        toast.success("Log in successfully");
        navigate("/Home");
      } else {
        // alert("failed");
      }
    } catch (err: any) {
      // alert(err);
      toast.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* <Navbar /> */}
      <h1 className="font-Inika text-black font-bold text uppercase text-xl my-12">
        <div className="waviy flex justify-center items-center flex-wrap">
          ACE STORES
        </div>
      </h1>
      <div className="md:grid grid-cols-2   lg:py-4 md:py-4   py-2 px-4 lg:px-[6.25rem] md:px-4">
        <div className="w-full">
          <img className="img2  w-[100%] h-full " src={img2} alt="img1" />
        </div>
        <div className="flex flex-col justify-center  ">
          <h1 className="text-[#000] font-OpenSans  sm:text-center md:text-[2rem] text-[1.5rem] lg:text-[3rem] font-bold">
            Login
          </h1>
          <div className="form   rounded-[5%] sm:p-8   md:pt-8 pt-2 max-[390px]:px-0 md:mt-0">
            <form
              action=""
              className="flex justify-center flex-col gap-4 lg:gap-[2rem] "
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[black] text-base lg:text-[1.5rem]  leading-normal font-semibold font-OpenSans"
                >
                  Email:
                </label>
                <input
                  className=" border-2 border-[#CCD2E0]  h-[3rem] outline-none border-solid text-black rounded-[5px] px-2 py-1"
                  type="email"
                  name="Email"
                  placeholder="Email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                />{" "}
                <span className="text-red-500">{errors.email}</span>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Password"
                  className="text-[black] text-base lg:text-[1.5rem] leading-normal font-semibold font-OpenSans"
                >
                  Password:
                </label>
                <div className="flex flex-col">
                  <input
                    className="border-2 border-[#CCD2E0] h-[3rem] outline-none border-solid text-black rounded-[5px] px-2 py-1"
                    type="password"
                    name="Email"
                    placeholder="Password..."
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    alt="current-password"
                    value={Password}
                    required
                  />
                  <span className="text-red-500">{errors.password}</span>
                  <Link to="/Resetpassword">
                    {" "}
                    <span className="text-[#CCD2E0] cursor-pointer">
                      Forgot Password?
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center ">
                <>
                  <Link to="">
                    <div className="flex justify-center items-center w-[100%]">
                      {" "}
                      <button
                        disabled={!email || !Password}
                        className="upercase bg-black w-[70%] border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem] "
                        onClick={signIn}
                      >
                        Log In
                      </button>
                    </div>
                  </Link>
                  <br />
                </>

                {/* <button
                  className="upercase bg-black border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem]"
                  onClick={signGoogle}
                >
                  Sign In With Google
                </button>{" "}
                <br />
                <button
                  className="upercase bg-black border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem]"
                  onClick={signOut}
                >
                  Sign Out
                </button> */}
              </div>
              <p className="text-[black] text-[1rem] text-center leading-normal font-semibold font-OpenSans">
                Already have an account ?{" "}
                <Link to="/Signup">
                  {" "}
                  <span className="text-[#CCD2E0] cursor-pointer">
                    {" "}
                    Sign In
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <CTA />
    </Fragment>
  );
};

export default LOGIN;
