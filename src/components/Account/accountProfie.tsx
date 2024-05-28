import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/stateContext";
import { getShowCheckouts } from "../../api/checkout";
import Navbarsign from "../../containers/nav_bar/navbarsign";
import SideBar from "./sidebar";
import { SaveNewAddress } from "../../constants";
import CTA from "../footer/CTA";
import { auth } from "../config/config";
import { getShowUser } from "../../api/user";
import { userProps } from "../../dataTypes";
// import Loader from "../Loader";
import Preloader from "../PreLoader";

const AccountProfie = () => {
  const { checkoutGotten, setcheckoutGotten }: any = useStateContext();
  const { formData }: any = useStateContext();
  const { userDetails, setUserDetails }: any = useStateContext();
  const { currentUserIdData, setCurrentUserIdData }: any = useStateContext();
  const [isLoading, setIsLoading] = useState(true);

  const userId = auth.currentUser?.uid;
  useEffect(() => {
    async function fetchData() {
      // You can await here

      let users = await getShowUser();
      setUserDetails(users);
      const CurrentUser = (userDetails: userProps[], currentID: any) => {
        return userDetails.filter(
          (user: userProps) => user.userId === currentID
        );
      };
      console.log(userDetails);
      const currentuserdata = CurrentUser(userDetails, userId);

      console.log("CURRENTUSERDATAAAA", currentuserdata);
      if (currentuserdata !== undefined) {
        console.log("Current user data:", currentuserdata);
        setCurrentUserIdData(currentuserdata);
        localStorage.setItem(
          "currentuserdata",
          JSON.stringify(currentuserdata)
        );
        // localStorage.setItem("currentuserdata", currentuserdata);
      } else {
        console.log("User not found in userDetails array");
      }
      // ....
    }
    fetchData();
  }, []);

  const { homeaddress }: any = useStateContext();
  // const [open, setOpen] = useState(false);
  // const isOpen = () => {
  //   setOpen(!open);
  // };

  useEffect(() => {
    const storedData = localStorage.getItem("currentuserdata");
    if (storedData) {
      setCurrentUserIdData(JSON.parse(storedData));
    }
  }, []);
  // console.log(currentUserIdData[0]);
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
  useEffect(() => {
    async function fetchData() {
      // You can await here
      let checkoutss = await getShowCheckouts();
      console.log(checkoutss);
      setcheckoutGotten(checkoutss);
      console.log(checkoutss, "checkingouttss");
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      // ...
    }
    fetchData();
  }, []);
  if (homeaddress === true && formData.address.value !== "") {
  }
  console.log(userId);
  console.log(checkoutGotten);
  // const checkoutId = checkoutGotten.map((checkout: { userId: any }) => {
  //   console.log(checkout?.userId);
  // });
  const filteredCheckoutGotten = checkoutGotten.filter(
    (checkout: { userId: (string | undefined)[] }) =>
      checkout.userId.includes(userId)
  );

  console.log(filteredCheckoutGotten[0]);
  if (isLoading) {
    // Render a preloader here
    return (
      <div className="h-screen flex justify-center items-center">
        <Preloader />{" "}
      </div>
    );
  }

  return (
    <div>
      <Navbarsign />
      <div className="lg:py-4 md:py-4 mt-[2rem] gap-[2rem] h-full py-2 px-4 lg:px-[6.25rem] md:px-4 sm:grid   lg:grid-cols-4   w-full">
        <div className="h-full col-span-1">
          <SideBar />
        </div>
        <div className="w-full bg-white rounded-xl h-full sm:mt-0 mt-8 shadow-2xl border  col-span-3">
          <div className="m-8">
            <div>
              <div className="flex justify-between items-center mb-[1.19rem]">
                <h1 className="text-[#000] text-[1.25rem] font-semibold font-OpenSans leading-[normal] ">
                  {" "}
                  My Account
                </h1>
                <div className="flex items-center gap-[0.5rem] sm:gap-[0.75rem]">
                  <input
                    className="w-[0.75rem] h-[0.75rem] border-2 cursor-pointer border-black"
                    type="checkbox"
                    // onClick={() => checkedAddress()}
                    checked={homeaddress}
                  />
                  <h2 className="text-[#818181] font-OpenSans text-[0.5rem] sm:text-[0.75rem] font-medium leading-[normal]">
                    {SaveNewAddress}
                  </h2>
                </div>
              </div>
            </div>
            <form action="" id="checkout " className="w-full">
              <div className="flex flex-col sm:gap-[2.5rem] gap-4  mt-[1.5rem]  mb-6 sm:mb-[4.44rem]">
                {/* names */}
                <div className=" sm:flex-row flex-col  flex gap-4 sm:gap-6">
                  <div className="flex flex-col gap-[0.5rem] w-full">
                    <label
                      htmlFor=""
                      className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 px-4 h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem]  w-full  bg-white`}
                      placeholder="Enter your first name"
                      // onChange={(e) =>
                      //   // setFormData((prevData: any) => ({
                      //   //   ...prevData,
                      //   //   firstName: { value: e.target.value, hasError: false },
                      //   // }))
                      // }
                      readOnly
                      value={
                        currentUserIdData && currentUserIdData[0]?.firstName
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem] w-full">
                    <label
                      htmlFor=""
                      className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 px-4 h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2  border-[#D9D9D9] 
                rounded-[0.5rem]  bg-white  w-full `}
                      readOnly
                      placeholder="Enter your last name"
                      // onChange={(e) =>
                      //   setFormData((prevData: any) => ({
                      //     ...prevData,
                      //     lastName: { value: e.target.value, hasError: false },
                      //   }))
                      // }
                      value={
                        currentUserIdData && currentUserIdData[0]?.lastName
                      }
                    />
                  </div>
                </div>
                {/* numbers */}
                <div className=" sm:flex-row flex flex-col  w-full gap-4 sm:gap-6">
                  <div className="flex flex-col gap-[0.5rem] w-full relative">
                    <label
                      htmlFor=""
                      className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder:text-[0.6rem]  sm:placeholder:text-[1rem] px-4   text-[1rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem] w-full bg-white  `}
                      readOnly
                      placeholder="Enter your email address"
                      // onChange={(e) =>
                      //   setFormData((prevData: any) => ({
                      //     ...prevData,
                      //     Email: { value: e.target.value, hasError: false },
                      //   }))
                      // }
                      value={currentUserIdData && currentUserIdData[0]?.email}
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem] w-full relative">
                    <label
                      htmlFor=""
                      className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                    >
                      Phone Number
                    </label>
                    <div className="absolute top-[50%] pl-[0.75rem] flex after:content-['|'] after:text-[#D9D9D9] after:pl-[0.5rem] after:w-[1.25rem]">
                      <p className="text-[#333] mt-[0.2rem] font-OpenSans flex gap-[0.37rem] items-center justify-center  text-[1rem] font-bold leading-[normal]">
                        {" "}
                        <span>{nigeriaFlag}</span> +234
                      </p>
                    </div>
                    <input
                      type="number"
                      className={`text-[black] font-semibold font-OpenSans
  leading-[normal]  outline-0 pl-[5.5rem] h-[3rem]
  placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
  placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
  placeholder:font-normal border-2 border-[#D9D9D9] 
  rounded-[0.5rem]  w-full bg-white`}
                      readOnly
                      placeholder="000 0000 000"
                      value={currentUserIdData && currentUserIdData[0]?.phoneNo}
                    />
                  </div>
                </div>
                {/* state and city */}
                <div className="flex sm:flex-row flex-col   w-full gap-4 sm:gap-6">
                  <div className="flex flex-col gap-[0.5rem] w-full">
                    <label
                      htmlFor=""
                      className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                    >
                      City/Region
                    </label>
                    <input
                      type="text"
                      className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 px-4 h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem]  w-full bg-white  `}
                      placeholder="Select a city"
                      readOnly
                      value={
                        filteredCheckoutGotten &&
                        filteredCheckoutGotten[0]?.city
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem] w-full">
                    <label
                      htmlFor=""
                      className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                    >
                      State{" "}
                    </label>
                    <input
                      type="text"
                      className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 px-4 h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem]  w-full bg-white"
`}
                      placeholder="Select a State"
                      readOnly
                      value={
                        filteredCheckoutGotten &&
                        filteredCheckoutGotten[0]?.state
                      }
                    />
                  </div>
                </div>
                {/* Addres */}
                <div className="flex flex-col gap-[0.5rem] w-full">
                  <label
                    htmlFor=""
                    className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className={`text-[black] font-semibold font-OpenSans 
              leading-[normal]  outline-0 px-4 h-[3rem]
               placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
               placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
               placeholder:font-normal border-2 border-[#D9D9D9]  text-ellipsis
              rounded-[0.5rem] w-full  bg-white`}
                    placeholder="Enter house number and street address"
                    readOnly
                    value={
                      filteredCheckoutGotten &&
                      filteredCheckoutGotten[0]?.address
                    }
                  />
                </div>
                {/* additional information */}
                <div className="flex flex-col gap-[0.5rem] w-full">
                  <label
                    htmlFor=""
                    className="text-black font-OpenSans  text-[1rem] font-semibold leading-[normal]"
                  >
                    Additional Information{" "}
                  </label>
                  <input
                    type="text"
                    className={`text-[black] font-semibold font-OpenSans
              leading-[normal]  outline-0 px-4 h-[3rem]
               placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
              placeholder:text-[0.6rem]  sm:placeholder:text-[1rem]  text-[1rem]  placeholder:leading-[normal]
               placeholder:font-normal border-2 border-[#D9D9D9] sm:pt-6 sm:pb-[2.87rem]
              rounded-[0.5rem]  w-full bg-white `}
                    placeholder="Enter any additional information for this address"
                    readOnly
                    value={
                      filteredCheckoutGotten &&
                      filteredCheckoutGotten[0]?.additionalInfo
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default AccountProfie;
