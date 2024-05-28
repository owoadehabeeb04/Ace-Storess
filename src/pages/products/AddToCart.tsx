import React from "react";
import Navbarsign from "../../containers/nav_bar/navbarsign";
import ProductCart from "../../components/ProductCart/ProductCart";
// import { useParams } from "react-router-dom";
import CTA from "../../components/footer/CTA";

const AddToCart = () => {
  // const { productsubid } = useParams();
  // console.log(useParams)
  // console.log(productsubid)
  return (
    <div>
      <Navbarsign />
      <ProductCart />
      <CTA />
    </div>
  );
};

export default AddToCart;
