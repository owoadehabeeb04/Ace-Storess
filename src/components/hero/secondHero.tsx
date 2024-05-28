import React from "react";
import image from "../../img/Illustration.svg";
import "../../css/secondHero.css";
import { textsecondheroh1 } from "../../constants";
import { textsecondheroP } from "../../constants";
import { btntext } from "../../constants";
const SecondHero = () => {
  return (
    <div className=" max-[1220px]:translate-y-[-1rem] flex min-[900px]:flex-row flex-col  xl:translate-y-[-12rem] px-12  gap-2 min-[1024px]:gap-16 max-[640px]:px-4  items-center -translate-y-52 mb-24 mt-12 lg:mb-0 lg:mt-0">
      <div className="flex justify- items-center w-full ">
        <img
          className="  min-[900px]:max-w-none max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center"
          src={image}
          alt=""
        />
      </div>
      <div className="max-[900px]:flex max-[900px]:flex-col lg:w-[70%] max-[900px]:justify-center max-[900px]:items-center mt-8 gap-4">
        <h1 className="text-4xl m-0 max-[900px]:text-4xl max-[900px]:text-center max-[110px]:text-2xl font-OpenSans font-bold max-[640px]:text-3xl">
          {textsecondheroh1}
        </h1>
        <p className="text-sm mt-4 max-[640px]:mt-2  py-1 leading-normal max-[900px]:text-center  min-[110px]:leading-6 font-normal font-OpenSans  ">
          {textsecondheroP}
        </p>
        <button className="btnhero2 mt-4 max-[640px]:mt-2 flex max-[900px]:mb-4 max-[900px]:mx-auto justify-center items-center rounded-3xl  backdrop-blur-sm border-2 border-solid border-white py-4 px-10 max-[640px]:mb-8">
          {btntext}
        </button>
      </div>
    </div>
  );
};

export default SecondHero;
