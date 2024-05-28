import React from "react";
import nikeimage from "../../img/Rectangle 6 (2).svg";
import Guyimage from "../../img/Rectangle 6 (1).svg";
import Categorycopy from "../../components/categories/categorycopy";
import "../../css/categories.css";
import { menWear } from "../../constants";
import { sweatshirts } from "../../constants";
import { Handbags } from "../../constants";
import { sneakers } from "../../constants";
import { aboutmenwear } from "../../constants";
import { aboutsweatshirt } from "../../constants";
import { abouthandbagsAndsneakers } from "../../constants";
import { headercategories } from "../../constants";
import { aboutheadercategories } from "../../constants";
const Categories = () => {
  return (
    <div className="max-[1220px]:translate-y-0 px-4 min-[1024px]:px-[6.25rem] md:pb-[7rem]  ">
      <div>
        <h1 className="text-black font-OpenSans text-4xl font-semibold leading-normal mb-2">{headercategories}</h1>
        <p className="font-OpenSans text-base font-normal mt-0 leading-6 text-[grey]">
          {aboutheadercategories}
        </p>
      </div>
      <div className=" flex max-[647px]:flex-col max-[480px]:text-start flex-grow max-[480px]:flex-nowrap flex-wrap min-[1024px]:flex-nowrap max-[1000px]:justify-start  text-center mt-8  ">
        <Categorycopy text={menWear} abouttext={aboutmenwear}>
          <img src={nikeimage} alt="" />
        </Categorycopy>
        <Categorycopy text={sweatshirts} abouttext={aboutsweatshirt}>
          {" "}
          <img src={Guyimage} alt="" />
        </Categorycopy>
        <Categorycopy  text={Handbags} abouttext={abouthandbagsAndsneakers}>
          {" "}
          <img src={Guyimage} alt="" />
        </Categorycopy>
        <Categorycopy text={sneakers} abouttext={abouthandbagsAndsneakers}>
          {" "}
          <img src={Guyimage} alt="" />
        </Categorycopy>
        <Categorycopy text={sneakers} abouttext={abouthandbagsAndsneakers}>
          {" "}
          <img src={Guyimage} alt="" />
        </Categorycopy>
      </div>
    </div>
  );
};

export default Categories;
