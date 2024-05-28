/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
// import Loader from "../Loader";
import { useStateContext } from "../../context/stateContext";
import { productsProps, userProps } from "../../dataTypes";
import { Link, useParams } from "react-router-dom";
import { sizes } from "../../constants";
import rate from "../../img/rate.svg";
import comment from "../../img/comment.svg";
import sizeguide from "../../img/sizeguide.svg";
import increaseicon from "../../img/increaseicon.svg";
import decreaseicon from "../../img/decreaseicon.svg";
import blackcart from "../../img/blackcarticon.svg";
import deliveryicon from "../../img/deliveryicon.svg";
import commenticon from "../../img/commenticon.svg";
import sizeandcoloricon from "../../img/sizeandcolor.svg";

import { toast } from "react-toastify";

import { createCart, getShowCartsOfCurrentUser } from "../../api/cart";

import { getShowUser } from "../../api/user";
import { auth } from "../config/config";
import Preloader from "../PreLoader";

const ProductCart = () => {
  // cartprops
  // type cartProps = {
  //   [x: string]: any;
  //   selectsize: string;
  //   product: any;
  //   quantity: number;
  //   thePriceOfProduct: number;
  //   UserId: string;
  //   cartItemId: number;
  //   ownerEmail: string;
  // };
  // carticonsvg
  const carticon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
    >
      <g clipPath="url(#clip0_1689_8)">
        <path
          d="M13.7046 18H0L1.39 4.60876H12.3146L12.5358 6.84309L13.7046 18Z"
          fill="#FF491F"
        />
        <path
          d="M7.03826 8.93732H14.6298L15.5958 18H6.07227L7.03826 8.93732Z"
          fill="#ED3618"
        />
        <path
          d="M7.79803 8.93732H15.3896L16.3556 18H6.83203L7.79803 8.93732Z"
          fill="#FFE14D"
        />
        <path
          d="M9.80032 6.1905C9.72796 6.1905 9.65856 6.16175 9.60739 6.11058C9.55622 6.05942 9.52748 5.99002 9.52748 5.91766V3.21876C9.54083 2.85913 9.48153 2.5005 9.35312 2.16431C9.22471 1.82812 9.02982 1.52127 8.78011 1.26212C8.53041 1.00297 8.231 0.796831 7.89981 0.656032C7.56862 0.515233 7.21243 0.442664 6.85255 0.442664C6.49267 0.442664 6.13649 0.515233 5.80529 0.656032C5.4741 0.796831 5.1747 1.00297 4.92499 1.26212C4.67528 1.52127 4.4804 1.82812 4.35198 2.16431C4.22357 2.5005 4.16427 2.85913 4.17762 3.21876V5.92134C4.18209 5.95959 4.17842 5.99834 4.16684 6.03506C4.15526 6.07178 4.13604 6.10563 4.11044 6.13439C4.08485 6.16315 4.05345 6.18617 4.01832 6.20193C3.9832 6.2177 3.94513 6.22585 3.90663 6.22585C3.86813 6.22585 3.83006 6.2177 3.79493 6.20193C3.7598 6.18617 3.72841 6.16315 3.70281 6.13439C3.67722 6.10563 3.658 6.07178 3.64642 6.03506C3.63484 5.99834 3.63116 5.95959 3.63563 5.92134V3.21876C3.63563 2.36509 3.97475 1.54639 4.57839 0.942754C5.18202 0.339119 6.00073 0 6.85439 0C7.70806 0 8.52677 0.339119 9.1304 0.942754C9.73404 1.54639 10.0732 2.36509 10.0732 3.21876V5.92134C10.0722 5.99306 10.043 6.06152 9.99195 6.11189C9.94089 6.16226 9.87205 6.1905 9.80032 6.1905ZM11.5959 14.3794C11.3291 14.3794 11.0649 14.3268 10.8185 14.2247C10.572 14.1226 10.348 13.973 10.1594 13.7843C9.97073 13.5957 9.82109 13.3717 9.71899 13.1252C9.6169 12.8788 9.56435 12.6146 9.56435 12.3478V10.5928C9.55988 10.5545 9.56356 10.5158 9.57514 10.4791C9.58672 10.4424 9.60593 10.4085 9.63153 10.3797C9.65713 10.351 9.68852 10.328 9.72365 10.3122C9.75878 10.2964 9.79684 10.2883 9.83534 10.2883C9.87385 10.2883 9.91191 10.2964 9.94704 10.3122C9.98217 10.328 10.0136 10.351 10.0392 10.3797C10.0648 10.4085 10.084 10.4424 10.0956 10.4791C10.1071 10.5158 10.1108 10.5545 10.1063 10.5928V12.3515C10.1063 12.7461 10.2631 13.1245 10.5421 13.4035C10.8211 13.6825 11.1995 13.8392 11.594 13.8392C11.9886 13.8392 12.367 13.6825 12.646 13.4035C12.925 13.1245 13.0818 12.7461 13.0818 12.3515V10.5928C13.0895 10.5264 13.1214 10.4651 13.1714 10.4206C13.2213 10.3762 13.2859 10.3516 13.3528 10.3516C13.4196 10.3516 13.4842 10.3762 13.5341 10.4206C13.5841 10.4651 13.616 10.5264 13.6238 10.5928V12.3515C13.6228 12.889 13.4088 13.4042 13.0287 13.7843C12.6486 14.1644 12.1334 14.3784 11.5959 14.3794Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1689_8">
          <rect width="16.3556" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  //   //    //    //   //   //   //

  const { productsubid } = useParams();
  const ProductCartSubid = Number(productsubid);
  // statecontex
  const {
    gottenProducts,

    setisloading,
    filteredProducts,
    setFilteredProducts,
  }: any = useStateContext();

  // const [filteredProducts, setFilteredProducts] = useState<productsProps[]>([]);
  const { cart, setCart }: any = useStateContext();
  const { boldCartCheckPay }: any = useStateContext();
  // const { selectsize, setSelectSize }: any = useStateContext();

  useEffect(() => {
    async function fetchData() {
      // // You can await here

      setFilteredProducts(
        gottenProducts.filter(
          (product: productsProps) => Number(product.subid) === ProductCartSubid
        )
      );
    }
    fetchData();
  }, []);

  // const { quantity, setQuantity }: any = useStateContext();
  const { quantity, setQuantity }: any = useStateContext();
  // const { price, setPrice }: any = useStateContext();
  const [selectsize, setSelectSize] = useState(NaN);
  const [clickedButton, setClickedButton] = useState(null);
  const { cartId, setCartId }: any = useStateContext();
  // increase and decrease in quantity
  const increase = () => {
    setQuantity(quantity + 1);
    // productPriceCart = productPriceCart
  };
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity);
    }
  };
  const { currentUserIdData, setCurrentUserIdData }: any = useStateContext();

  // function quantity * price
  let productPriceCart = gottenProducts.filter(
    (product: productsProps) => Number(product.subid) === ProductCartSubid
  )[0].productPrice;
  const thePriceOfProduct = productPriceCart * quantity;
  // function for size

  const { text, settext }: any = useStateContext();
  const handlebtnclick = (e: any) => {
    setClickedButton(e.target);
    console.log(clickedButton);
    settext(e.currentTarget.textContent);
  };
  const { userDetails, setUserDetails }: any = useStateContext();

  const userId = auth.currentUser?.uid;
  useEffect(() => {
    async function fetchData() {
      // You can await here

      let users = await getShowUser();
      setUserDetails(users);
      console.log(users);

      setisloading(false);

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

  const [loading, setloading] = useState(false);
  console.log(currentUserIdData);
  const orderno = currentUserIdData && currentUserIdData[0]?.userId;
  const ownermail = currentUserIdData && currentUserIdData[0]?.email;
  // selectsizebtnfunction

  const AddProductToCart = async () => {
    // Modify the cart state here
    // eslint-disable-next-line use-isnan
    if (!Number.isNaN(selectsize) && quantity > 0) {
      const cartIdd = await createCart({
        thePriceOfProduct: thePriceOfProduct,
        quantity: quantity,
        product: [...filteredProducts],
        selectsize: text,
        UserId: orderno,
        cartItemId: cart.length + 1,
        ownerEmail: ownermail,
        cartId: cartId,
      });
      console.log("cartId", cartId);
      setCartId(cartIdd);
      // You can await here
      setloading(true);
      // let Carts = await getShowCarts();
      // setCart(Carts);
      const userId = auth.currentUser?.uid;
      if (userId) {
        let Carts = await getShowCartsOfCurrentUser(userId);
        setCart(Carts);
      }
      // console.log(loading);
      // const CurrentUser = (userDetails: userProps[], currentID: any) => {
      //   return userDetails.filter(
      //     (user: userProps) => user.userId === currentID
      //   );
      // };
      // const currentuserdata = CurrentUser(userDetails, userId);

      // const userCarts = (cart: cartProps[], currentID: any) => {
      //   return cart.filter((cart: cartProps) => cart.UserId === currentID);
      // };

      // const currentCart = userCarts(cart, userId);
      // console.log("currentusercarttt", currentCart);
      // setCart(currentCart);
      // ...

      toast.success("Added successfully");
      setloading(false);
      // }, []);
    } else {
      toast.error("pick a size or quantity cant be 0");
    }

    // Modify the boldCartCheckPay state here
  };
  console.log(boldCartCheckPay);
  // useEffect can be used here to perform side effects

  return filteredProducts.length > 0 ? (
    <div>
      <section className="lg:px-[6.25rem] lg:pt-[4.5rem] md:pt-[2.5rem] px-[1rem] grid grid-cols-2 gap-[5rem] max-[800px]:grid-cols-1 max-[800px]:flex max-[800px]:flex-col-reverse">
        <aside className="flex flex-col gap-[1.25rem] max-[1024px]:gap-[0.75rem] justify-start items-start max-[480px]:text-center max-[480px]:items-center">
          <p className="text-[#818181] font-OpenSans text-[1.125rem] font-medium leading-[1.5625rem]">
            AC-463201
          </p>
          <h1 className="text-black font-OpenSans font-semibold text-[2.25rem] leading-normal">
            {
              gottenProducts.filter(
                (product: productsProps) =>
                  Number(product.subid) === ProductCartSubid
              )[0].productName
            }
          </h1>
          <figcaption className="flex gap-[2rem]">
            <figure className="flex gap-[0.25rem]">
              <img src={rate} alt="rate" />
              <p>4.5</p>
            </figure>
            <figure className="flex gap-[0.5rem]">
              <img src={comment} alt="comment" />
              <p>120 Comments</p>
            </figure>
          </figcaption>

          <div className="">
            <div className="flex gap-[2rem] max-[480px]:justify-center max-[480px]:items-center">
              <p className="text-black text-base font-medium leading-[normal]">
                Select Size
              </p>
              <span className="flex flex-row justify-center items-center text-[#818181] font-OpenSans text-base font-normal leading-[normal]">
                Size Guide <img src={sizeguide} alt="size" />
              </span>
            </div>
            <div className="flex flex-row gap-[1rem] mt-[2rem]">
              {sizes.map((size, i) => (
                <button
                  className={
                    selectsize === i
                      ? "   bg-black text-white rounded-[1.9375rem]"
                      : ""
                  }
                  // eslint-disable-next-line no-sequences
                  onClick={(e: any) => {
                    // eslint-disable-next-line no-sequences
                    handlebtnclick(e), setSelectSize(i);
                  }}
                  key={i}
                >
                  <span className=" grid  place-content-center border-2 border-[#CFCFCF] w-[2.5rem] h-[2.5rem] p-[0.5625rem] rounded-[1.9375rem]">
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p>Variation</p>
          </div>
          {/* add to cart */}

          <section className="flex gap-[3rem] rounded-[1.9375rem] bg-gradient-to-l from-[#F2F2F2] to-[#fdfdfd] px-[0.3rem] py-[0.5rem]">
            <button onClick={decrease}>
              <img src={decreaseicon} alt="" />
            </button>
            <p>{quantity}</p>
            <button onClick={increase}>
              <img src={increaseicon} alt="" />
            </button>
          </section>

          {/* price */}
          <div className="flex gap-[39px]">
            <p>
              Price:{" "}
              <span className="text-black font-bold">
                {" "}
                &#8358;{thePriceOfProduct}
              </span>
            </p>
            <p>Qty: {quantity}</p>
          </div>
          <figcaption className="flex gap-[55px] max-[480px]:flex-col max-[480px]:gap-[5px]">
            <button
              className={`flex gap-[0.5rem]  items-center justify-center font-bold rounded-[1.9375rem] text-[#363636] 
            bg-gradient-to-r from-[#EFEFEF] to-[#efefef00] py-4 px-10    max-[1024px]:p-4   max-[480px]:w-[100%] max-[480px]:mb-[0rem] ${
              loading ? "opacity-10" : ""
            }`}
              onClick={AddProductToCart}
            >
              {loading && (
                <div className="border-4  animate-spin border-black p-2 w-fit flex  justify-center items-center text-center rounded-full"></div>
              )}
              <span className={`${loading ? "hidden" : ""}`}>Add to Cart</span>
              <span className={`${loading ? "hidden" : ""}`}>
                <img src={blackcart} alt="cart" />
              </span>
            </button>

            <Link to="/Shop                                                                                                                                                                               ">
              <button className=" rounded-3xl bg-black text-white flex justify-center items-center py-4 px-10 font-OpenSans font-medium leading-normal max-[1024px]:py-4 max-[1024px]:px-4 max-[480px]:w-fit max-[480px]:mt-[0rem]">
                <span> Continue Shopping</span>
                <span className="shopcart flex justify-center items-center ml-2">
                  {" "}
                  {carticon}
                </span>
              </button>
            </Link>
          </figcaption>

          <section className="bg-[#C8C8C8] w-[34.1875rem] max-[600px]:w-full h-[0.0625rem] "></section>
          <section className="grid grid-cols-2 gap-[5rem] max-[600px]:gap-[2rem] max-[430px]:grid-cols-1 max-[430px]:gap-[0.2rem]">
            <div className="flex items-center gap-[1rem] max-[510px]:flex-col   max-[510px]:items-start max-[430px]:items-center">
              <img src={deliveryicon} alt="" />
              <span>Delivery Process</span>
            </div>
            <div className="flex items-center gap-[1rem] max-[510px]:flex-col max-[510px]:items-start max-[430px]:items-center">
              <img src={sizeandcoloricon} alt="" />
              <span>Size & Color Grading</span>
            </div>
            <div className="flex items-center gap-[1rem] max-[510px]:flex-col  max-[510px]:items-start max-[430px]:items-center">
              <img src={commenticon} alt="" />
              <span>Comments</span>
            </div>
            <div className="flex items-center gap-[1rem] max-[510px]:flex-col   max-[510px]:items-start max-[430px]:items-center">
              <img src={deliveryicon} alt="" />
              <span>Product Description</span>
            </div>
          </section>
        </aside>
        <figure className=" max-[800px]:flex  max-[480px]:justify-center  max-[480px]:items-center max-[480px]:pt-[2rem]">
          <img
            className="w-[100%]  max-[800px]:w-[50%] max-[480px]:w-[90%] max-[800px]:flex  max-[800px]:justify-center  max-[800px]:items-center "
            src={
              gottenProducts.filter(
                (product: productsProps) =>
                  Number(product.subid) === ProductCartSubid
              )[0].productImage
            }
            alt=""
          />
        </figure>
        <footer className=" max-[800px]:hidden col-span-2 rounded-[1rem] bg-[#FBFBFB] p-[2.5rem] shadow-lg shadow-black-500/50 ">
          <h1 className="before:content-['h'] before:w-[0.375rem] before:py-[0.5rem] before:mr-[0.3rem] before:rounded-[1.9375rem] before:bg-black text-black text-[1.25rem] font-bold font-OpenSans">
            Product Description
          </h1>
          <p className="text-[black] font-OpenSans text-[1.25rem] font-[300] pt-[1em]  leading-[2.625rem]">
            {" "}
            {
              gottenProducts.filter(
                (product: productsProps) =>
                  Number(product.subid) === ProductCartSubid
              )[0].productDetails
            }
          </p>
        </footer>
      </section>
      <footer className="mt-[2rem] min-[800px]:hidden max-[800px]:m-[1rem] rounded-[3rem] bg-[#FBFBFB] p-[2.5rem] shadow-lg shadow-black-500/50 ">
        <h1 className="before:content-['h'] before:w-[0.375rem] before:py-[0.5rem] before:mr-[0.3rem] before:rounded-[1.9375rem] before:bg-black text-black text-[1.25rem] max-[430px]:text-base font-bold font-OpenSans">
          Product Description
        </h1>
        <p className="text-[black] font-OpenSans text-[1.25rem] font-[300] pt-[1em]  leading-[2.625rem] max-[430px]:text-[0.7rem] max-[430px]:leading-[1.5rem]">
          {" "}
          {
            gottenProducts.filter(
              (product: productsProps) =>
                Number(product.subid) === ProductCartSubid
            )[0].productDetails
          }
        </p>
      </footer>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
         <Preloader />{" "}
    </div>
  );
};
export default ProductCart;
