import React, { Children, ReactNode } from "react";
import searchlogo from "../../img/searchlogo.svg";


const Collectionsearch = () => {
  return (
    <div className="searchcollection">
      <div className="search">
        <img
          className="searchlogocollection"
          src={searchlogo}
          alt={searchlogo}
          onClick={() => {}}
        />
        <input className="searchinput" type="text" placeholder="Search..." />
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default Collectionsearch;
