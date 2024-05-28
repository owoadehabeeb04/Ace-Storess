import React from "react";
import Collectionscopy from "../../components/collections/collectionscopy";
import "../../css/collections.css";
import Collectionsearch from "../../components/collections/collectionsearch";
import { aboutcollection } from "../../constants";
import { ourcollection } from "../../constants";
import Products from "./products";
const Collections = () => {
  return (
    <div className="collectionsection p-4 lg:px-[6.25rem]  md:pt-[.875rem]">
      <div className="max-[793px]:w-fit max-[970px]:w-4/5 min-[970px]:w-4/5">
        <h1 className="text-black font-OpenSans text-4xl font-extrabold leading-normal">
          {ourcollection}
        </h1>
        <p className="text-[#818181] font-OpenSans text-base font-normal leading-6 ">
          {aboutcollection}
        </p>
      </div>
      <Collectionscopy></Collectionscopy>
      {/* <Collectionsearch></Collectionsearch> */}
      {/* <Products></Products> */}
    </div>
  );
};

export default Collections;
