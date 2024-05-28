import React, { useEffect, useState } from "react";
import { PRICE, acecart, products, quantitytext } from "../../constants";
import { useStateContext } from "../../context/stateContext";
import { cartProps } from "../../dataTypes";
import increaseicon from "../../img/increaseicon.svg";
import decreaseicon from "../../img/decreaseicon.svg";
import rate from "../../img/rate.svg";
// import delete from "../../img/delete.svg";

// import liststyle from "../../img/list style type.svg";
import deleteicon from "../../img/delete.svg";
// import { act } from "react-dom/test-utils";
// import Cart from "../../pages/Cart/cart";
import SmmaryCart from "./SmmaryCart";
import {
  deleteCart,
  getShowCartsOfCurrentUser,
  updateCartItemQuantity,
} from "../../api/cart";

import { auth } from "../config/config";
// import "../../css/collections"

const Acecart = () => {
  const [loading, setloading] = useState(false);

  const { cart, setCart }: any = useStateContext();
  const { boldCartCheckPay, setboldCartCheckPay }: any = useStateContext();

  const userId = auth?.currentUser?.uid;

  useEffect(() => {
    setboldCartCheckPay("cart");
    setloading(true);
    console.log(loading);
    async function fetchData() {
      // await the carts
      if (userId) {
        let Carts = await getShowCartsOfCurrentUser(userId);
        setCart(Carts);
      }

      setloading(false);
    }
    fetchData();
  }, []);
  // const { cartId }: any = useStateContext();
  const cartIds = cart.map((cartItem: { cartId: any }) => cartItem.cartId);
  console.log("Cart IDs:", cartIds);
  console.log(cart);
  const increase = async (index: number, cartId: string) => {
    try {
      console.log("Original cartId:", cartId);

      let newcart = [...cart];
      newcart[index]["quantity"] = newcart[index]["quantity"] + 1;
      newcart[index]["thePriceOfProduct"] =
        newcart[index]["product"][0].productPrice * newcart[index]["quantity"];

      // Update the quantity in Firebase
      console.log(
        "Updated cartId and quantity",
        cartId,
        newcart[index]["quantity"]
      );
      await updateCartItemQuantity(
        cartId,
        newcart[index]["quantity"],
        newcart[index]["thePriceOfProduct"]
      );

      setCart([...newcart]);
    } catch (error) {
      console.error("Error increasing cart item quantity", error);
    }
  };

  const decrease = async (index: number, cartId: string) => {
    try {
      if (cart[index]["quantity"] > 0) {
        let newcart = [...cart];
        newcart[index]["quantity"] = newcart[index]["quantity"] - 1;
        newcart[index]["thePriceOfProduct"] =
          newcart[index]["product"][0].productPrice *
          newcart[index]["quantity"];

        setCart([...newcart]);
        await updateCartItemQuantity(
          cartId,
          newcart[index]["quantity"],
          newcart[index]["thePriceOfProduct"]
        );
        // Update the quantity in Firebase
      }
    } catch (error) {
      console.error("Error decreasing cart item quantity", error);
    }
  };

  // const [checkcart]

  const [active, setActive] = useState(false);
  const [selectedItems, setSelectedItems] = useState<cartProps[]>([]);

  // TOGGLE FUNCTION

  const toggleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      // If all products are selected, clear the selection
      setSelectedItems([]);
    } else {
      // If not all products are selected, select all
      setSelectedItems([...cart]);
    }
  };

  // CHECKED FUNCTION FOR ALL PRODUCTS

  const checked = () => {
    return selectedItems.length === cart.length;
  };

  // TOGGLE FUNCTION FOR EACH PRODUCTS
  const [index, setIndex] = useState(0);

  const toggleEach = (e: cartProps, i: number) => {
    setIndex(i);
    setActive((formerstate) => !formerstate);

    // Ensure that e[i] is a single item or an array of items

    const item = e[i];

    const isSelected = selectedItems.some(
      (selectedItem) => selectedItem === item
    );

    if (isSelected) {
      // If it's selected, remove it from selectedItems
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If it's not selected, add it to selectedItems
      setSelectedItems((prevSelectedItems) => prevSelectedItems.concat(item));
    }
  };

  // CHECKED ALL PRODUCTS AND EACH PRODUCT

  const secondchecked = (e: any, i: number) => {
    console.log(e[i]);
    const checkedselect1 = selectedItems.includes(e);
    const isCartChecked = selectedItems.includes(cart);
    console.log(isCartChecked, checkedselect1);
    return checkedselect1 || isCartChecked;
  };

  // DELETE ALL CHECKED PRODUCTS
  // const deleteFromChecked = async (i: number, id: string) => {
  //   if (selectedItems.length === cart.length) {
  //     console.log("All products selected, clearing cart");
  //     setCart([]);
  //   } else {
  //     console.log("Not all products selected, updating cart");
  //     const updatedCart = cart.filter(
  //       (item: any) => !selectedItems.includes(item)
  //     );
  //     await deleteCart(id);

  //     console.log("updatedCart:", updatedCart);
  //     setCart(updatedCart);
  //   }

  //   console.log("Cleared selectedItems");
  //   selectedItems.length = 0;
  // };

  const deleteFromChecked = async (i: number, id: string) => {
    try {
      const selectedCartIds = selectedItems.map((item) => item.cartId);
      for (const cartId of selectedCartIds) {
        await deleteCart(cartId);
      }

      setCart(cart.filter((item: any) => !selectedItems.includes(item)));
      // Clear selectedItems after deletion
      setSelectedItems([]);
    } catch (error) {
      console.error("Error deleting products from Firebase", error);
    }
  };

  console.log(selectedItems);
  //   if (selectedItems.length === cart.length) {
  //     const filterDeleteFromFirebase = selectedItems.filter(
  //  (cartItem) => cartIds.includes(cartItem.cartId)
  // );
  // console.log(filterDeleteFromFirebase);
  // if (filterDeleteFromFirebase.length > 0) {
  //  // If any selected products match the cartIds, delete them
  //  await deleteCart(id);
  // }

  // console.log(boldCartCheckPay);
  // TOTAL PRICE
  var { theTotalPrice, settheTotalPrice }: any = useStateContext();
  console.log(cart);
  const arrayTotal = cart.map(
    (cartprice: any, i: any) => cartprice.thePriceOfProduct
  );
  const arrayQuantity = cart.map(
    (cartprice: any, i: any) => cartprice.quantity
  );

  const TotalPrice = arrayTotal.reduce((arr: any, i: any) => arr + i, 0);
  const TotalQuantity = arrayQuantity.reduce((arr: any, i: any) => arr + i, 0);
  console.log(TotalQuantity);
  useEffect(() => {
    settheTotalPrice(TotalPrice);
  }, [TotalPrice, settheTotalPrice]);
  localStorage.setItem("totalprice", TotalPrice);
  localStorage.setItem("totalquantity", TotalQuantity);

  return (
    <div className="lg:py-4 md:py-4  py-2 px-4 lg:px-[6.25rem] md:px-4 grid lg:grid-cols-3  gap-[2.5rem] ">
      <div className="px-6 py-8 bg-white rounded-xl shadow-2xl border lg:col-span-2">
        <header className="flex justify-between">
          <h1 className="text-black font-OpenSans text-base lg:text-[1.25rem] font-semibold leading-[normal]">
            {acecart}
          </h1>
          {selectedItems.length > 0 && (
            <img
              className="cursor-pointer"
              onClick={() => deleteFromChecked(index, cartIds[index])}
              src={deleteicon}
              alt=""
            />
          )}
        </header>
        <main>
          <section className="acesetion grid mt-[2rem]">
            <div className="flex  items-center gap-[1rem]">
              <input
                className="w-[0.75rem] h-[0.75rem] border-2 cursor-pointer border-black"
                type="checkbox"
                checked={checked()}
                onClick={toggleSelectAll}
              />
              <p>{products}</p>
            </div>
            <p className="text-right sm:block hidden ml-[1.2rem] ">
              {quantitytext}
            </p>
            <p className="text-right sm:block hidden">{PRICE}</p>
          </section>
          <hr className="mb-[1.5rem]" />
          <figure className="mt-[1rem]">
            <ul className="flex flex-col gap-[2rem]">
              {cart.map((cartItem: any, i: any) => (
                <li className=" cartlist acesection" key={i}>
                  <div className="flex flex-row gap-[1rem]">
                    <input
                      className="w-[0.75rem] h-[0.75rem] cursor-pointer border-2 border-black"
                      type="checkbox"
                      checked={secondchecked(cartItem, i)}
                      onClick={() => {
                        toggleEach(cart, i);
                      }}

                      // onChange={()=>setActive(!active)
                      // }
                    />
                    <img
                      className="w-[5rem] h-[5rem]"
                      src={cartItem.product[0].productImage}
                      alt="ime"
                    />
                    <section className="flex flex-col gap-[0.3rem]">
                      <h1 className="text-black text-base font-bold leading-[normal] font-OpenSans text-ellipsis  overflow-hidden whitespace-nowrap">
                        {cartItem.product[0].productName}
                      </h1>
                      <img className="w-[5rem] h-[1rem]" src={rate} alt="" />
                      <p className="flex  gap-[0.5rem] ">
                        <span className="text-black font-OpenSans text-[0.75rem] font-normal leading-[normal]">
                          Size:
                        </span>
                        <span className="grid  text-black text-[0.625rem] place-content-center border-2 border-[#CFCFCF] w-fit p-[ 0.35156rem] py-[0.1rem]  px-[0.35rem] rounded-[100%]">
                          {" "}
                          {cartItem.selectsize}
                        </span>
                      </p>
                    </section>
                  </div>

                  <div className="flex sm:mt-0 mt-4  sm:justify-end xl:ml-4  sm:ml-0 ml-6 items-start gap-[0.2rem]">
                    <button
                      className="bg-gradient-to-l from-[#F2F2F2] to-[#fdfdfd] rounded-[0.79781rem] py-[0.41175rem] px-[1.02944rem]"
                      onClick={() => {
                        decrease(i, cartIds[i]);
                      }}
                    >
                      <img src={decreaseicon} alt="" />
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button
                      className="bg-gradient-to-l from-[#F2F2F2] to-[#fdfdfd] rounded-[0.79781rem] py-[0.41175rem] px-[1.02944rem] "
                      onClick={() => {
                        increase(i, cartIds[i]);
                      }}
                    >
                      <img src={increaseicon} alt="" />
                    </button>
                  </div>
                  <div>
                    <p className="sm:text-right sm:ml-0 ml-6 sm:mt-0 mt-4">
                      &#8358;<span>{cartItem.thePriceOfProduct}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </figure>
        </main>
        <footer className="flex justify-between mt-[1.5rem] ">
          <h1 className="text-[#666] font-OpenSans text-[1.25rem] font-medium leding-[normal]">
            Order Total
          </h1>

          <p className="text-black text-right text-[1.25rem] font-semibold leading-[normal]">
            &#8358;{theTotalPrice}
          </p>
        </footer>
      </div>
      <SmmaryCart />
    </div>
  );
};
export default Acecart;
