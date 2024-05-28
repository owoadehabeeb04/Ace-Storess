import React, { useEffect, useRef, useState } from "react";
import { Logo, arraylink } from "../../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import carticon from "../../img/cart.svg";
import { useStateContext } from "../../context/stateContext";
import { getShowCartsOfCurrentUser } from "../../api/cart";
import { auth } from "../../components/config/config";
const Navbarsign = () => {
  const { cart, setCart }: any = useStateContext();
  console.log(cart.length);
  const navref = useRef<HTMLInputElement | null>(null);
  const [link, selectedlink] = useState(-1);

  const [show, setShow] = useState(false);
  const clickNav = () => {
    setShow(!show);
    console.log(show);
  };
  const userId = auth.currentUser?.uid;
  useEffect(() => {
    async function fetchData() {
      // setloading(true);
      if (userId) {
        let Carts = await getShowCartsOfCurrentUser(userId);
        setCart(Carts);
      }
      // console.log(loading);

      console.log(cart);
    }
    fetchData();
  }, []);
  return (
    <div className=" flex justify-between items-center  lg:py-4 md:py-4  py-2 px- lg:px-[6.25rem] md:px-4  bg-white z-40 sticky top-0  ">
      <div className=" ">
        <h1 className=" font-Inika text-black font-bold text uppercase  text-xl ">
          {Logo}
        </h1>
      </div>
      {show && (
        <div className="bg-black fixed  top-[0px] h-[100vh] w-full z-[100] py-8 ">
          <ul className=" text-white  flex-col justify-center items-center flex gap-4 lg:gap-12">
            {arraylink.map((arr, i) => (
              <li
                className={
                  link === i ? "md:text-black text-white font-bold " : ""
                }
                key={i}
                onClick={(e) => {
                  selectedlink(i);
                }}
              >
                <a className="font-OpenSans text-sm text-white " href="/">
                  <Link key={i} to={`/${arr}`}>
                    {arr}
                  </Link>
                </a>
              </li>
            ))}
          </ul>

          <button
            className=" text-white text-[30px] absolute right-[10px] top-[2px]"
            onClick={clickNav}
          >
            <FaTimes></FaTimes>
          </button>
        </div>
      )}
      <div className="" ref={navref}>
        <ul className=" md:flex hidden gap-4 lg:gap-12">
          {arraylink.map((arr, i) => (
            <li
              className={
                link === i ? "md:text-black text-white font-bold " : ""
              }
              key={i}
              onClick={(e) => {
                selectedlink(i);
              }}
            >
              <a className="font-OpenSans text-sm " href="/">
                <Link key={i} to={`/${arr}`}>
                  {arr}
                </Link>
              </a>
            </li>
          ))}
        </ul>
        {/* <div className="btn mobilebtn ">
       <Link to={signup}>  <a href="">
            <button className="signup">SignUp</button>
          </a></Link> 
        <Link to={Login}><a href="">
            <button className="Login">Login</button>
          </a></Link>  
        </div>   */}
      </div>
      <div className="flex gap-[1.5rem] justify-center items-center">
        <button className="nav-btn  text-[1rem]" onClick={clickNav}>
          <FaBars className="text-[1rem] text-black"></FaBars>
        </button>
        <Link to="/Cart">
          <a
            href="/"
            className="flex flex-row justify-center items-center gap-[0.5px] relative"
          >
            <img src={carticon} alt="" />
            <p className=" font-OpenSans  font-normal leading-[normal]">Cart</p>
            <span className="bg-[#ff6347] shadow-lg shadow-black rounded-[100%] text-[white] mr-1 px-1 py-0 text-[0.5rem] absolute left-11 top-[0px]">
              {cart.length}
            </span>
          </a>
        </Link>
        <Link to="/Account/Profile">
          <div>
            <a href="/" className="no-underline">
              <p className=" font-OpenSans text-base font-normal leading-[normal]">
                Account
              </p>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbarsign;
