import React, { useEffect } from "react";
import Navbarsign from "../../containers/nav_bar/navbarsign";
import CartCheckPay from "../../components/cart/cartCheckoutPayment";
import Delivery from "../../components/Checkout/Delivery";
import CTA from "../../components/footer/CTA";
import { useStateContext } from "../../context/stateContext";
const Checkout = () => {
  const {  setboldCartCheckPay }: any = useStateContext();
  useEffect(() => {
    setboldCartCheckPay("checkout");
  }, []);

  return (
    <div>
      <Navbarsign />
      <CartCheckPay />
      <Delivery />
      <CTA />
    </div>
  );
};

export default Checkout;
