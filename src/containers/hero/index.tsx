import React from "react";

import img1 from "../../img/Rectangle 22.svg";
import img2 from "../../img/Rectangle 23 (1).svg";
import img3 from "../../img/Vector (4).png";
import { Elevateheader } from "../../constants";
import { aboutelevate } from "../../constants";
import { Link } from "react-router-dom";
const   Hero = () => {
  const carticon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
    >
      <g clipPath="url(#clip0_1689_8)">
        <path
          d="M13.7046 18H0L1.39 4.60876H12.3146L12.5358 6.84309L13.7046 18Z"
          fill="#FF491F"
        />
        <path
          d="M7.03826 8.93732H14.6298L15.5958 18H6.07227L7.03826 8.93732Z"
          fill="#ED3618"
        />
        <path
          d="M7.79803 8.93732H15.3896L16.3556 18H6.83203L7.79803 8.93732Z"
          fill="#FFE14D"
        />
        <path
          d="M9.80032 6.1905C9.72796 6.1905 9.65856 6.16175 9.60739 6.11058C9.55622 6.05942 9.52748 5.99002 9.52748 5.91766V3.21876C9.54083 2.85913 9.48153 2.5005 9.35312 2.16431C9.22471 1.82812 9.02982 1.52127 8.78011 1.26212C8.53041 1.00297 8.231 0.796831 7.89981 0.656032C7.56862 0.515233 7.21243 0.442664 6.85255 0.442664C6.49267 0.442664 6.13649 0.515233 5.80529 0.656032C5.4741 0.796831 5.1747 1.00297 4.92499 1.26212C4.67528 1.52127 4.4804 1.82812 4.35198 2.16431C4.22357 2.5005 4.16427 2.85913 4.17762 3.21876V5.92134C4.18209 5.95959 4.17842 5.99834 4.16684 6.03506C4.15526 6.07178 4.13604 6.10563 4.11044 6.13439C4.08485 6.16315 4.05345 6.18617 4.01832 6.20193C3.9832 6.2177 3.94513 6.22585 3.90663 6.22585C3.86813 6.22585 3.83006 6.2177 3.79493 6.20193C3.7598 6.18617 3.72841 6.16315 3.70281 6.13439C3.67722 6.10563 3.658 6.07178 3.64642 6.03506C3.63484 5.99834 3.63116 5.95959 3.63563 5.92134V3.21876C3.63563 2.36509 3.97475 1.54639 4.57839 0.942754C5.18202 0.339119 6.00073 0 6.85439 0C7.70806 0 8.52677 0.339119 9.1304 0.942754C9.73404 1.54639 10.0732 2.36509 10.0732 3.21876V5.92134C10.0722 5.99306 10.043 6.06152 9.99195 6.11189C9.94089 6.16226 9.87205 6.1905 9.80032 6.1905ZM11.5959 14.3794C11.3291 14.3794 11.0649 14.3268 10.8185 14.2247C10.572 14.1226 10.348 13.973 10.1594 13.7843C9.97073 13.5957 9.82109 13.3717 9.71899 13.1252C9.6169 12.8788 9.56435 12.6146 9.56435 12.3478V10.5928C9.55988 10.5545 9.56356 10.5158 9.57514 10.4791C9.58672 10.4424 9.60593 10.4085 9.63153 10.3797C9.65713 10.351 9.68852 10.328 9.72365 10.3122C9.75878 10.2964 9.79684 10.2883 9.83534 10.2883C9.87385 10.2883 9.91191 10.2964 9.94704 10.3122C9.98217 10.328 10.0136 10.351 10.0392 10.3797C10.0648 10.4085 10.084 10.4424 10.0956 10.4791C10.1071 10.5158 10.1108 10.5545 10.1063 10.5928V12.3515C10.1063 12.7461 10.2631 13.1245 10.5421 13.4035C10.8211 13.6825 11.1995 13.8392 11.594 13.8392C11.9886 13.8392 12.367 13.6825 12.646 13.4035C12.925 13.1245 13.0818 12.7461 13.0818 12.3515V10.5928C13.0895 10.5264 13.1214 10.4651 13.1714 10.4206C13.2213 10.3762 13.2859 10.3516 13.3528 10.3516C13.4196 10.3516 13.4842 10.3762 13.5341 10.4206C13.5841 10.4651 13.616 10.5264 13.6238 10.5928V12.3515C13.6228 12.889 13.4088 13.4042 13.0287 13.7843C12.6486 14.1644 12.1334 14.3784 11.5959 14.3794Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1689_8">
          <rect width="16.3556" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const shop = "Shop Now";
  const explore = "Explore Services";

  return (
    <div className=" flex xl:gap-60 px-4 min-[1024px]:px-[6.25rem]  py-10 lg:gap-32 md:gap-32 ">
      <div className="lg:flex lg:flex-col lg:justify-start max-[1024px]:w-[70%] max-[585px]:w-[100%]">
        <h1 className=" text-black xl:mt-[3rem] font-OpenSans  font-[700] xl:text-6xl lg:text-5xl md:text-4xl text-[1.875rem]">
          {Elevateheader}
        </h1>
        <p className="  text-[#818181] my-4  font-OpenSans text-sm sm:text-xl min-[640px]:leading-[2em] leading-8 font-normal ">
          {aboutelevate}
        </p>

        <div className="flex gap-12 my-4 my max-[480px]:flex-col max-[480px]:gap-4 max-[480px]:w-11/12">
          <a href="/">
            <Link to="/shop">
              {" "}
              <button className=" rounded-3xl bg-black text-white flex justify-center items-center py-4 px-10 font-OpenSans font-medium leading-normal max-[1024px]:py-4 max-[1024px]:px-4 max-[480px]:w-11/12">
                <span> {shop}</span>
                <span className="shopcart flex justify-center items-center ml-2">
                  {" "}
                  {carticon}
                </span>
              </button>
            </Link>
          </a>
          <a href="/">
            <button
              className=" rounded-[1.9375rem] text-[#363636] 
            bg-gradient-to-r from-[#EFEFEF] to-[#efefef00] py-4 px-10   font-medium max-[1024px]:p-4  max-[480px]:w-11/12"
            >
              {explore}
            </button>
          </a>
        </div>
      </div>
      <div className="relative hidden xl:block">
        <img
          className="img1 absolute top-14 -left-32 z-30"
          src={img1}
          alt="img1"
        />
        <img className="img2 absolute z-20 " src={img2} alt="img1" />
        <img className="absolute top-96 -left-12 z-30" src={img3} alt="img1" />
        {/* <img className="img4" src={img4} alt="img1" /> */}
        <div className=" relative -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="369"
            height="428"
            viewBox="0 0 369 428"
            fill="none"
            className="translate-x-[2em] translate-y-[-10em]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M555 26.116L420.021 208.915L555 26.116L420.021 208.915L273.233 428L99.8662 204.067L0 99.9083L44.3498 -31.5123L68.0602 -207L239.168 -182.313L437.626 -171.476L555 26.116Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="translate-x-[2em] translate-y-[-18em]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="238"
            height="382"
            viewBox="0 0 238 382"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M237.554 88.8101L233.476 166.411L237.554 88.8101L233.476 166.411L191.432 245.587L67.5875 381.279L64.0136 169.848L168.28 123.682L0.0987456 0.0669228L115.265 5.22671L206.108 3.89022L237.554 88.8101Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
