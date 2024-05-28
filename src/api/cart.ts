
import {
  collection,
  getDocs,
  query,
  doc,
  setDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
import { cartProps } from "../dataTypes";
import { db } from "../components/config/config";

export const createCart = async (cart: cartProps) => {
  const cartRef = collection(db, "Carts");
  const cartDocRef = doc(cartRef);
  await setDoc(cartDocRef, cart);
  const cartIdd = cartDocRef.id;
  console.log(cartIdd);
  return cartIdd;
};

// show the cart information
export const getShowCarts = async () => {
  const showCart = collection(db, "Carts");
  const q = query(showCart);
  const querySnapshot = await getDocs(q);

  console.log(querySnapshot);
  let carts = [] as cartProps[];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    carts.push({
      selectsize: doc.data().selectsize ?? doc.data().selectsize,
      product: doc.data().product ?? doc.data().product,
      quantity: doc.data().quantity ?? doc.data().quantity,
      thePriceOfProduct:
        doc.data().thePriceOfProduct ?? doc.data().thePriceOfProduct,
      UserId: doc.data().UserId ?? doc.data().UserId,
      cartItemId: doc.data().cartItemId ?? doc.data().cartItemId,
      ownerEmail: doc.data().ownerEmail ?? doc.data().ownerEmail,
      cartId: doc.id,
    });
  });
  console.log(carts);
  return carts;
};


export const getShowCartsOfCurrentUser = async (userId: any) => {
  const showCart = collection(db, "Carts");
  const q = query(showCart, where("UserId", "==", userId)); // Filter by UserId

  try {
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
    let carts = [] as cartProps[];

    querySnapshot.forEach((doc) => {
      carts.push({
        selectsize: doc.data().selectsize ?? doc.data().selectsize,
        product: doc.data().product ?? doc.data().product,
        quantity: doc.data().quantity ?? doc.data().quantity,
        thePriceOfProduct:
          doc.data().thePriceOfProduct ?? doc.data().thePriceOfProduct,
        UserId: doc.data().UserId ?? doc.data().UserId,
        cartItemId: doc.data().cartItemId ?? doc.data().cartItemId,
        ownerEmail: doc.data().ownerEmail ?? doc.data().ownerEmail,
        cartId: doc.id,
      });
    });

    console.log(carts);
    return carts;
  } catch (error) {
    console.error("Error fetching carts for current user:", error);
    return [];
  }
};
export const updateCartItemQuantity = async (
  cartId: any,
  newQuantity: number,
  newPriceProduct: number
) => {
  try {
    const cartItemRef = doc(db, "Carts", cartId);
    console.log("clicking o,", cartId);
    // Update the quantity field
    await setDoc(
      cartItemRef,
      { quantity: newQuantity, thePriceOfProduct: newPriceProduct },
      { merge: true }
    );

    console.log("Quantity updated in Firebase for cart item ID:", cartId);
  } catch (error) {
    console.error("Error updating quantity in Firebase:", error);
    throw error; // Re-throw the error to propagate it to the calling code
  }
};

export const deleteCart = async (theId: string) => {
  try {
    await deleteDoc(doc(db, "Carts", theId));
    } catch (error) {
    console.error("Error deleting cart documents:", error);
  }
};

export const deleteCartAfterPayment = async (theId: string) => {
  try {
    await deleteDoc(doc(db, "Carts", theId));
    } catch (error) {
    console.error("Error deleting cart documents:", error);
  }
};
