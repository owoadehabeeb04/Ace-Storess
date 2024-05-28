import React, { createContext, useContext, useState } from "react";
// import Loader from "../components/Loader";
import {
  cartProps,
  checkoutProps,
  orderProps,
  productsProps,
  userProps,
} from "../dataTypes";
const Context = createContext({});
export const StateContext = ({ children }: any) => {
  const [gottenProducts, setGottenProducts] = useState<productsProps[]>([]);
  const [isloading, setisloading] = useState(true);
  const [homeaddress, sethomeaddress] = useState(false);
  const [boldCartCheckPay, setboldCartCheckPay] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<productsProps[]>([]);
  const [cart, setCart] = useState<cartProps[]>([]);
  // const [cartId, setCartId] = useState<cartProps[]>([]);
  const [theTotalPrice, settheTotalPrice] = useState<cartProps[]>([]);
  const [text, settext]: any = useState("");
  const [cardOrDelivery, setcardOrDelivery] = useState("");
  const [signup, setSignup] = useState();
  const [checkoutGotten, setcheckoutGotten] = useState<checkoutProps[]>([]);
  const [cartId, setCartId] = useState("");
  const [orders, setOrders] = useState<orderProps[]>([]);
  const initialFormData = {
    firstName: { value: "", hasError: false },
    lastName: { value: "", hasError: false },
    Email: { value: "", hasError: false },
    phoneNo: { value: "", hasError: false },
    city: { value: "", hasError: false },
    state: { value: "", hasError: false },
    address: { value: "", hasError: false },
    additionalInfo: { value: "", hasError: false },
  };
  const [quantity, setQuantity] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [cartGotten, setCartGotten] = useState<cartProps[]>([]);
  const [userDetails, setUserDetails] = useState<userProps[]>([]);
  const [currentUserIdData, setCurrentUserIdData] = useState();
  const [price, setPrice] = useState();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setLoggedIn(!!user); // Set loggedIn to true if user is not null
  //     setUserDetails(user ? { /* map user details here */ } : null);
  //     setisloading(false); // Set loading to false after checking user state
  //   });

  //   return () => unsubscribe(); // Cleanup subscription on unmount
  // }, []);

  return (
    <Context.Provider
      value={{
        gottenProducts,
        setGottenProducts,
        isloading,
        setisloading,
        filteredProducts,
        setFilteredProducts,
        cart,
        setCart,
        boldCartCheckPay,
        setboldCartCheckPay,
        homeaddress,
        sethomeaddress,
        text,
        settext,
        theTotalPrice,
        settheTotalPrice,
        formData,
        setFormData,
        cardOrDelivery,
        setcardOrDelivery,
        loggedIn,
        setLoggedIn,
        checkoutGotten,
        setcheckoutGotten,
        signup,
        setSignup,
        userDetails,
        setUserDetails,
        currentUserIdData,
        setCurrentUserIdData,
        quantity,
        setQuantity,
        cartId,
        setCartId,
        price,
        setPrice,
        setOrderId,
        orderId,
        setOrders,
        orders,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
