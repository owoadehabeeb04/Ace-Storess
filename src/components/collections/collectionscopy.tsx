import React from "react";
import { thecommerce } from "../../constants";
import Products from "../../containers/collections/products";

const Collectionscopy = () => {
  return (
    <>
      <div className="max-[793px]:gap-1 flex flex-wrap gap-3">
        {thecommerce.map((commerce,i) => (
          <h3 key={i} className="text-black font-OpenSans text-base font-normal leading-normal rounded-[1.9375rem] py-2 px-4 backdrop-blur-sm max-[793px]:my-2">
            {commerce}
          </h3>
        ))}
      </div>
      <div className="thecollections">
      </div>
      <Products/>
    </>
  );
};
export default Collectionscopy;
