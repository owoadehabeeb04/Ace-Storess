import React from "react";
import { useStateContext } from "../../context/stateContext";

const Deliveryform = () => {
  const { formData, setFormData }: any = useStateContext();

  const { homeaddress }: any = useStateContext();
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

  console.log("formData:", formData);
  console.log("formData.phoneNo:", formData.phoneNo);
  console.log(
    "formData.phoneNo.value:",
    parseFloat(formData.phoneNo.value),
    formData.firstName.value,
    formData.lastName.value,
    formData.state.value,
    formData.Email.value,
    formData.address.value,
    formData.city.value,
    formData.additionalInfo.value
  );
  console.log("address error", formData.address.hasError);
  console.log(formData);
  if (homeaddress === true && formData.address.value !== "") {
  }
  console.log(formData.phoneNo.value.length);
  return (
    <div>
      <form action="" id="checkout">
        <div className="flex flex-col sm:gap-[2.5rem] gap-4  mt-[1.5rem]  mb-6 sm:mb-[4.44rem]">
          {/* names */}
          <div className=" sm:flex-row flex-col  flex gap-4 sm:gap-6">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <label
                htmlFor=""
                className="text-black font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-semibold leading-[normal]"
              >
                First Name <span className="text-[#E74242]">*</span>
              </label>

              <input
                type="text"
                className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 pl-4   h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder: sm:placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem]  w-full  bg-white ${
                  formData.firstName.hasError === true
                    ? "border-red-500"
                    : " border-[#D9D9D9] "
                }`}
                placeholder="Enter your first name"
                onChange={(e) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    firstName: { value: e.target.value, hasError: false },
                  }))
                }
                value={formData.firstName ? formData.firstName.value : ""}
              />
            </div>
            <div className="flex flex-col gap-[0.5rem] w-full">
              <label
                htmlFor=""
                className="text-black font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-semibold leading-[normal]"
              >
                Last Name <span className="text-[#E74242]">*</span>
              </label>
              <input
                type="text"
                className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 pl-4   h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder: placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2  border-[#D9D9D9] 
                rounded-[0.5rem]  bg-white  w-full     ${
                  formData.lastName.hasError === true
                    ? "border-red-500"
                    : "border-[#D9D9D9]"
                }`}
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    lastName: { value: e.target.value, hasError: false },
                  }))
                }
                value={formData.lastName ? formData.lastName.value : ""}
              />
            </div>
          </div>
          {/* numbers */}
          <div className=" sm:flex-row flex flex-col  w-full gap-4 sm:gap-6">
            <div className="flex flex-col gap-[0.5rem] w-full relative">
              <label
                htmlFor=""
                className="text-black font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-semibold leading-[normal]"
              >
                Email Address <span className="text-[#E74242]">*</span>
              </label>

              <input
                type="email"
                className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0   h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder: sm:placeholder:text-[0.875rem] pl-4   text-[0.875rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem] w-full bg-white    ${
                  formData.Email.hasError === true
                    ? "border-red-500"
                    : "border-[#D9D9D9]"
                }`}
                placeholder="Enter your email address"
                onChange={(e) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    Email: { value: e.target.value, hasError: false },
                  }))
                }
                value={formData.Email ? formData.Email.value : ""}
              />
            </div>
            <div className="flex flex-col gap-[0.5rem] w-full relative">
              <label
                htmlFor=""
                className="text-black font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-semibold leading-[normal]"
              >
                Phone Number <span className="text-[#E74242]">*</span>
              </label>
              <div className="absolute top-[50%] pl-[0.75rem] flex after:content-['|'] after:text-[#D9D9D9] after:pl-[0.5rem] after:w-[1.25rem]">
                <p className="text-[#333] mt-[0.2rem] font-OpenSans flex gap-[0.37rem] items-center justify-center  text-[0.75rem] font-bold leading-[normal]">
                  {" "}
                  <span>{nigeriaFlag}</span> +234
                </p>
              </div>
              <input
                type="number"
                className={`text-[black] font-semibold font-OpenSans
  leading-[normal]  outline-0 pl-[5.5rem]   h-[3rem]
  placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
  placeholder: sm:placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
  placeholder:font-normal border-2 border-[#D9D9D9] 
  rounded-[0.5rem]  w-full bg-white    ${
    formData.phoneNo.hasError === true ? "border-red-500" : "border-[#D9D9D9]"
  }`}
                placeholder="000 0000 000"
                onChange={(e) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    phoneNo: {
                      value: parseInt(e.target.value.slice(0, 10)) || "",
                      hasError: false,
                    },
                  }))
                }
                value={formData.phoneNo ? formData.phoneNo.value : ""}
              />
            </div>
          </div>
          {/* state and city */}
          <div className="flex sm:flex-row flex-col   w-full gap-4 sm:gap-6">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <label
                htmlFor=""
                className="text-black font-OpenSans text-[0.6rem]  text-[0.875rem]  font-semibold leading-[normal]"
              >
                City/Region <span className="text-[#E74242]">*</span>
              </label>
              <input
                type="text"
                className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 pl-4   h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder: sm:placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem]  w-full bg-white    ${
                  formData.city.hasError === true
                    ? "border-red-500"
                    : "border-[#D9D9D9]"
                }`}
                placeholder="Select a city"
                onChange={(e) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    city: { value: e.target.value, hasError: false },
                  }))
                }
                value={formData.city ? formData.city.value : ""}
              />
            </div>
            <div className="flex flex-col gap-[0.5rem] w-full">
              <label
                htmlFor=""
                className="text-black font-OpenSans text-[0.875rem]  font-semibold leading-[normal]"
              >
                State <span className="text-[#E74242]">*</span>{" "}
              </label>
              <input
                type="text"
                className={`text-[black] font-semibold font-OpenSans 
                leading-[normal]  outline-0 pl-4   h-[3rem]
                 placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
                 placeholder: sm:placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
                 placeholder:font-normal border-2 border-[#D9D9D9] 
                rounded-[0.5rem]  w-full bg-white"
                ${
                  formData.state.hasError === true
                    ? "border-red-500"
                    : "border-[#D9D9D9]"
                }`}
                placeholder="Select a State"
                onChange={(e) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    state: { value: e.target.value, hasError: false },
                  }))
                }
                value={formData.state ? formData.state.value : ""}
              />
            </div>
          </div>
          {/* Addres */}
          <div className="flex flex-col gap-[0.5rem] w-full">
            <label
              htmlFor=""
              className="text-black font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-semibold leading-[normal]"
            >
              Address <span className="text-[#E74242]">*</span>
            </label>
            <input
              type="text"
              className={`text-[black] font-semibold font-OpenSans 
              leading-[normal]  outline-0 pl-4   h-[3rem]
               placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
               placeholder: sm:placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
               placeholder:font-normal border-2 border-[#D9D9D9] 
              rounded-[0.5rem] w-full  bg-white  ${
                formData.address.hasError === true
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              }`}
              placeholder="Enter house number and street address"
              onChange={(e) =>
                setFormData((prevData: any) => ({
                  ...prevData,
                  address: { value: e.target.value, hasError: false },
                }))
              }
              value={formData.address ? formData.address.value : ""}
            />
          </div>
          {/* additional information */}
          <div className="flex flex-col gap-[0.5rem] w-full">
            <label
              htmlFor=""
              className="text-black font-OpenSans text-[0.6rem] sm:text-[0.875rem] font-semibold leading-[normal]"
            >
              Additional Information <span className="text-[#E74242]">*</span>
            </label>
            <input
              type="text"
              className={`text-[black] font-semibold font-OpenSans
              leading-[normal]  outline-0 pl-4   h-[3rem]
               placeholder:text-[#B4B4B4] placeholder:font-OpenSans 
              placeholder: sm:placeholder:text-[0.875rem]   text-[0.875rem]  placeholder:leading-[normal]
               placeholder:font-normal border-2 border-[#D9D9D9] sm:pt-6 sm:pb-[2.87rem]
              rounded-[0.5rem]  w-full bg-white   ${
                formData.additionalInfo.hasError === true
                  ? "border-red-500"
                  : "border-[#D9D9D9]"
              } `}
              placeholder="Enter any additional information for this address"
              onChange={(e) =>
                setFormData((prevData: any) => ({
                  ...prevData,
                  additionalInfo: {
                    value: e.target.value,
                    hasError: false,
                  },
                }))
              }
              value={
                formData.additionalInfo ? formData.additionalInfo.value : ""
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Deliveryform;
