import React, { Fragment, useEffect, useState } from "react";
import { auth, googleAuth } from "../config/config";
// import { getAuth, onAuthStateChanged } from "firebase/auth"
import img2 from "../../img/Rectangle 23 (1).svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import googleimg from "../../img/google.svg";
import {
  // User,
  createUserWithEmailAndPassword,
  signInWithPopup,
  // signOut,
} from "firebase/auth";
// import { Link, useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../containers/nav_bar";
import CTA from "../footer/CTA";
import { useStateContext } from "../../context/stateContext";
import { FirebaseError } from "firebase/app";
import { createUser, getShowUser } from "../../api/user";
import { userProps } from "../../dataTypes";
const Signup = () => {
  let [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNo, setPhoneNo] = useState<number>();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
  });
  const { setLoggedIn }: any = useStateContext();
  const { signup, setSignup }: any = useStateContext();
  const { userDetails, setUserDetails }: any = useStateContext();
  const { setCurrentUserIdData }: any = useStateContext();

  const navigate = useNavigate();

  const signGoogle = async (e: any) => {
    // console.log(e.target);
    try {
      await signInWithPopup(auth, googleAuth);
      setLoggedIn(true);
      toast.success("sign in with google successfully");
      const userId = auth.currentUser?.uid;
      const mail = auth.currentUser?.email;
      const userEmail = mail ?? "";
      if (!userId) {
        throw new Error("Failed to obtain user ID");
      }

      // Save user data to firebase
      await createUser({
        firstName: firstName,
        lastName: lastName,
        email: userEmail,
        userId: userId,
        password: Password,
        phoneNo: phoneNo,
      });
      console.log("succcess");
      try {
        let users = await getShowUser();
        setUserDetails(users);
        console.log(users);

        // console.log(userDetails);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      // localStorage.setItem("loggedIn", JSON.stringify(true));
      navigate("/Home");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message);
    }
  };
  // const signOut = async (e: any) => {
  //   console.log("Sign out button clicked");

  //   try {
  //     await auth.signOut();
  //     console.log("Sign out successful");
  //     toast.success("sign out succesfully");
  //   } catch (err: any) {
  //     console.error("Error during sign out:", err);
  //     toast.error(`Error during sign out: ${err.message}`);
  //   }
  // };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNo: "",
    };

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!phoneNo) {
      newErrors.phoneNo = "Phone No is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!Password.trim()) {
      newErrors.password = "Password is required";
    } else if (Password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const signbtn = async (e: any) => {
    // console.log(e.target);
    try {
      await createUserWithEmailAndPassword(auth, email, Password);

      // localStorage.setItem("userEmail", email);
      setLoggedIn(true);
      toast.success("sign in succesfully");
      const userId = auth.currentUser?.uid;

      const mail = auth.currentUser?.email;
      const userEmail = mail ?? "";
      console.log(userEmail);
      // Check if userId is defined
      if (!userId) {
        throw new Error("Failed to obtain user ID");
      }

      // Save user data to firebase
      await createUser({
        firstName: firstName,
        lastName: lastName,
        email: userEmail,
        userId: userId,
        password: Password,
        phoneNo: phoneNo,
      });

      console.log("User ID:", userId);

      // localStorage.setItem("userEmail", userEmail);

      try {
        let users = await getShowUser();
        setUserDetails(users);
        console.log(users);

        // console.log(userDetails);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }

      // current useridData
      // if (userId) {

      // }
      // console.log("currentuserdata");

      // localStorage.setItem("loggedIn", JSON.stringify(true)); //
      //
      navigate("/Home");
    } catch (err: any) {
      console.error(err);
      toast.error(`Error during sign in: ${(err as FirebaseError).message}`);
    }
    validateForm();
  };

  // auth.currentUser.email
  useEffect(() => {
    const fetchUserEmail = async () => {
      // const email = auth.currentUser?.email;
      const userId = auth.currentUser?.uid;
      console.log(userId);
      const CurrentUser = (userDetails: userProps[], currentID: any) => {
        return userDetails.filter(
          (user: userProps) => user.userId === currentID
        );
      };
      console.log(userDetails);
      const currentuserdata = CurrentUser(userDetails, userId);

      console.log("CURRENTUSERDATAAAA", currentuserdata);

      if (currentuserdata) {
        console.log("Current user data:", currentuserdata);
        setCurrentUserIdData(currentuserdata);
        // localStorage.setItem("currentuserdata", currentuserdata);
      } else {
        console.log("User not found in userDetails array");
      }
    };
    fetchUserEmail();
  }, [setSignup]);

  useEffect(() => {
    console.log(signup);
  }, [signup]);
  const nigeriaFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
    >
      <path d="M0 0H20V12H0V0Z" fill="white" />
      <path
        d="M0 0H6.77419V12H0V0ZM13.2258 0H20V12H13.2258V0Z"
        fill="#186648"
      />
    </svg>
  );
  return (
    <Fragment>
      {/* <Navbar /> */}
      <h1 className="font-Inika text-black font-bold text uppercase text-xl my-12">
        <div className="waviy flex justify-center items-center flex-wrap">
          ACE STORES
        </div>
      </h1>
      <div className="md:grid grid-cols-2  justify-between lg:py-4 md:py-4   py-2 px-4 lg:px-[6.25rem] md:px-4">
        <div className="w-full">
          <img className="img2  w-[100%] h-full " src={img2} alt="img1" />
        </div>
        <div className="flex flex-col  ">
          <h1 className="text-[#000] font-OpenSans  sm:text-center md:text-[2rem] text-[1.5rem] lg:text-[3rem] font-bold">
            Create your Account
          </h1>
          <div className="form   rounded-[5%] sm:p-8   md:pt-8 pt-2 max-[390px]:px-0 md:mt-4">
            <form
              action=""
              className="flex justify-center flex-col gap-4 lg:gap-[2rem] "
            >
              <div className="flex flex-col sm:flex-row gap-6  ">
                <div className="flex w-full flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-[black] text-base lg:text-[1.5rem] leading-normal font-semibold font-OpenSans"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-2 border-[#CCD2E0] w-full h-[3rem] font-medium outline-none border-solid text-black rounded-[5px] px-2 py-1"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />{" "}
                  <span className="text-red-500">{errors.firstName}</span>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor=""
                    className="text-[black] text-base lg:text-[1.5rem] leading-normal font-semibold font-OpenSans"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-2 border-[#CCD2E0] h-[3rem] font-medium w-full outline-none border-solid text-black rounded-[5px] px-2 py-1"
                    placeholder="Last Name"
                    onChange={(e) => setlastName(e.target.value)}
                    value={lastName}
                  />
                  <span className="text-red-500">{errors.lastName}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[black] text-base lg:text-[1.5rem]  leading-normal font-semibold font-OpenSans"
                >
                  Email:
                </label>
                <input
                  className=" border-2 border-[#CCD2E0]  h-[3rem] font-medium  outline-none border-solid text-black rounded-[5px] px-2 py-1"
                  type="email"
                  name="Email"
                  placeholder="Email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />{" "}
                <span className="text-red-500">{errors.email}</span>
              </div>
              {/* <div className="flex flex-col gap-2">
                <label
                  htmlFor="phoneNo"
                  className="text-[black] text-base lg:text-[1.5rem]  leading-normal font-semibold font-OpenSans"
                >
                  Phone Number:
                </label>{" "}
                <input
                  type="number"
                  className=" border-2 border-[#CCD2E0]  outline-none border-solid text-black rounded-[5px] px-2 py-1"
                  placeholder="000 0000 000"
                  value={phoneNo}
                  onChange={(e: any) => setPhoneNo(e.target.value)}
                />
                <span className="text-red-500">{errors.phoneNo}</span>
              </div> */}

              <div className="flex flex-col gap-[0.5rem] w-full relative">
                <label
                  htmlFor=""
                  className="text-black font-OpenSans  text-base lg:text-[1.5rem] font-semibold leading-[normal]"
                >
                  Phone Number
                </label>
                <div className="absolute top-[53%] pl-[0.75rem] font-medium flex after:content-['|'] after:text-[#D9D9D9] after:pl-[0.5rem] after:w-[1.25rem]">
                  <p className="text-[#333] mt-[0.2rem] font-OpenSans flex gap-[0.37rem] items-center justify-center  text-[0.75rem] font-bold leading-[normal]">
                    {" "}
                    <span>{nigeriaFlag}</span> +234
                  </p>
                </div>
                <input
                  type="number"
                  className=" border-2 h-[3rem] border-[#CCD2E0] font-medium  outline-none border-solid text-black rounded-[5px] px-2 py-1 pl-[5.5rem]"
                  placeholder="000 0000 000"
                  onChange={(e: any) => setPhoneNo(e.target.value)}
                  value={phoneNo}
                />
                <span className="text-red-500">{errors.phoneNo}</span>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Password"
                  className="text-[black] text-base lg:text-[1.5rem] leading-normal font-semibold font-OpenSans"
                >
                  Password:
                </label>
                <input
                  className="border-2 h-[3rem] border-[#CCD2E0] font-medium outline-none border-solid text-black rounded-[5px] px-2 py-1"
                  type="Password"
                  name="Email"
                  placeholder="Password..."
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <span className="text-red-500">{errors.password}</span>
              </div>

              <div className="flex flex-col justify-center ">
                <>
                  <Link to="">
                    <div className="flex justify-center items-center w-[100%]">
                      {" "}
                      <button
                        // disabled={
                        //   // !email || !Password || !firstName || !lastName
                        // }
                        className="upercase bg-black w-[70%] border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem] "
                        onClick={signbtn}
                      >
                        Sign Up
                      </button>
                    </div>
                  </Link>
                  <br />
                </>
                {/* <div className="flex justify-center items-center gap-4 mt-8">
                  <div className="bg-[#CCD2E0] w-full h-[3px]"></div>
                  <p className="before:content-[' '] before:block before:w-[130px] md:before:w-[180px] lg:before:w-[190px] xl:before:w-[250px] before:h-[1px] before:bg-[#CCD2E0] before:absolute before:top-[.9rem] before:left-0 after:content-[' '] after:block after:w-[130px] md:after:w-[180px] lg:after:w-[190px] xl:after:w-[250px] after:h-[1px] after:bg-white-700 after:absolute after:top-[.9rem] after:right-0 text-white-700 font-medium text-center text-[1.4rem]">
                    OR
                  </p>
                  <div className="bg-[#CCD2E0] w-full h-[3px]"></div>
                </div> */}
                {/* <button
                  className="upercase bg-black border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem]"
                  onClick={signGoogle}
                >
                  Sign In With Google
                </button>{" "}
                <br /> */}
                {/* <button
                  className="upercase bg-black border-black border-2 rounded-lg text-white px-[1.9rem] py-[0.5rem]"
                  onClick={signOut}
                >
                  Sign Out
                </button> */}
                {/* <div className="flex justify-center items-center mt-8">
                  <button
                    className="text-base md:text-[2rem] w-fit hover:bg-[#CCD2E0] lg:text-[2.7rem] border border-white-500 rounded-lg py-4 px-10 md:px-12 cursor-pointer"
                    onClick={signGoogle}
                  >
                    <img src={googleimg} alt="google" />
                  </button>
                </div> */}
              </div>
              <p className="text-[black] text-[1rem] text-center leading-normal font-semibold font-OpenSans">
                Already have an account ?{" "}
                <Link to="/Login">
                  {" "}
                  <span className="text-[#CCD2E0] cursor-pointer"> Log In</span>
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

export default Signup;
