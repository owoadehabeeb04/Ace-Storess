import React, { ReactElement, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Addproducts from "./components/Addproducts/Addproducts";
import Shop from "./pages/shop/Shop";
import Aboutproduct from "./pages/products/aboutproduct";
import { useStateContext } from "./context/stateContext";
import { getShowProducts } from "./api/products";
// import Loader from "./components/Loader";
import Signup from "./components/Auth/SIGNUP";
import AddToCart from "./pages/products/AddToCart";
import Cart from "./pages/Cart/cart";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import LOGIN from "./components/Auth/LOGIN";
// import Account from "./pages/Account";
import AccountProfie from "./components/Account/accountProfie";
import ResetPassword from "./components/Auth/ResetPassword";
import { getShowUser } from "./api/user";
import { userProps } from "./dataTypes";
import { auth } from "./components/config/config";
import {  getShowCartsOfCurrentUser } from "./api/cart";

import Success from "./pages/success/Success";
import Notfound from "./pages/404/Notfound";
import Order from "./components/Account/accountOrder";
import Preloader from "./components/PreLoader";
import OrderDetails from "./pages/orderDetails";
function App(): ReactElement {
  const { setCart }: any = useStateContext();
  const { setGottenProducts, isloading, setisloading }: any = useStateContext();
  const { userDetails, setUserDetails }: any = useStateContext();
  const { setCurrentUserIdData }: any = useStateContext();

  const userId = auth.currentUser?.uid;
  // const [, setisloading  ]: any = useState(true);
  // let isloading = true;
  useEffect(() => {
    async function fetchData() {
      // You can await here

      let products = await getShowProducts();
      let users = await getShowUser();
      setUserDetails(users);
      console.log(users);
      setGottenProducts(products);
      setisloading(false);
      console.log(products);
      const CurrentUser = (userDetails: userProps[], currentID: any) => {
        return userDetails.filter(
          (user: userProps) => user.userId === currentID
        );
      };
      console.log(userDetails);
      const currentuserdata = CurrentUser(userDetails, userId);

      console.log("CURRENTUSERDATAAAA", currentuserdata);
      if (currentuserdata !== undefined) {
        console.log("Current user data:", currentuserdata);
        setCurrentUserIdData(currentuserdata);
        // localStorage.setItem("currentuserdata", currentuserdata);
      } else {
        console.log("User not found in userDetails array");
      }
      // ....
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      // setloading(true);
      if (userId) {
        let Carts = await getShowCartsOfCurrentUser(userId);
        setCart(Carts);
      }
    }
    fetchData();
  }, [setCart, userId]);

  return isloading ? (
    <div className="h-screen flex justify-center items-center">
      <Preloader />{" "}
    </div>
  ) : (
    <div>
      {/* <ToastContainer /> */}

      <Routes>  
        <Route path="/" element={<LOGIN />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productsubid" element={<Aboutproduct />} />
        <Route path="/Addproducts" element={<Addproducts />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<LOGIN />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Account/Profile" element={<AccountProfie />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Resetpassword" element={<ResetPassword />} />
        <Route path="/Success/:reference" element={<Success />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Notfound />} />
        <Route
          path="/ProductCartOfProduct/:productsubid"
          element={<AddToCart />}
        />
        <Route path="/Account/Order" element={<Order />} />
        <Route path="/OrderDetails/orderId" element={<OrderDetails />} />
        <Route element={<Preloader />} />
      </Routes>
    </div>
  );
}

export default App;
