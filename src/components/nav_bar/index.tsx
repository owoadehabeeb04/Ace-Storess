

import React, { useEffect, useRef, useState } from "react";
import { Logo, arraylink } from "../../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import carticon from "../../img/cart.svg";
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
    <div className=" flex justify-between items-center  lg:py-4 md:py-4  py-2  lg:px-[6.25rem] md:px-4  bg-white z-40 sticky top-0  ">
      <div className=" ">
        <h1 className=" font-Inika text-black font-bold text uppercase  text-xl ">
          {Logo}
        </h1>
      </div>
      <div className="md:hidden block">
        {show && (
          <div className="bg-black absolute left-0  top-[0px] h-[100vh] w-full z-[100] py-8 ">
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
            <div className="flex justify-center gap-4 items-center mt-4">
              <Link to="/Signup">
                <button className=" rounded-lg border cursor-pointer border-white bg-black text-white py-4 px-8">
                  SignUp
                </button>
              </Link>
              <a href="/Login">
                <button className="rounded-lg border cursor-pointer border-black bg-white text-black py-4 px-8">
                  Login
                </button>
              </a>
            </div>
            <button
              className=" text-white text-[30px] absolute right-[10px] top-[2px]"
              onClick={clickNav}
            >
              <FaTimes></FaTimes>
            </button>
          </div>
        )}
      </div>
      <div className="md:flex hidden" ref={navref}>
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
      <button className=" md:hidden flex text-[2rem]" onClick={clickNav}>
        <FaBars className="text-[1rem] text-black"></FaBars>
      </button>
      <div className="md:flex hidden gap-[1.5rem] justify-center items-center">
        <div className="  flex gap-3">
          <Link to="/Signup">
            <button className=" rounded-lg border cursor-pointer border-black bg-black text-white py-4 px-8">
              SignUp
            </button>
          </Link>
          <a href="/Login">
            <button className="rounded-lg border cursor-pointer border-black bg-white text-black py-4 px-8">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbarsign;
