import {
  collection,
  getDocs,
  query,
  doc,
  setDoc,
  where,
} from "firebase/firestore";
import { orderProps } from "../dataTypes";
import { db } from "../components/config/config";

export const createOrder = async (order: orderProps) => {
  const orderRef = collection(db, "Orders");
  const orderDocRef = doc(orderRef);
  await setDoc(orderDocRef, order);
  const orderIdd = orderDocRef.id;
  console.log(orderIdd);
  return orderIdd;
};

export const getShowOrder = async () => {
  const showOrder = collection(db, "Orders");
  const q = query(showOrder);
  const querySnapshot = await getDocs(q);

  console.log(querySnapshot);
  let orders = [] as orderProps[];

  querySnapshot.forEach((doc) => {
    orders.push({
      date: doc.data().date ?? doc.data().date,
      price: doc.data().price ?? doc.data().price,
      orderId: doc.data().orderId ?? doc.data().orderId,
      shippingAddress: doc.data().shippingAddress ?? doc.data().shippingAddress,
      paymentType: doc.data().paymentType ?? doc.data().paymentType,
      cart: doc.data().cart ?? doc.data().cart,
      firstName: doc.data().firstName ?? doc.data().firstName,
      lastName: doc.data().lastName ?? doc.data().lastName,
      email: doc.data().email ?? doc.data().email,
      phoneNo: doc.data().phoneNo ?? doc.data().phoneNo,
      userId: doc.data().UserId ?? doc.data().UserId,
    });
  });
  console.log(orders);
  return orders;
};

export const getShowOrderOfCurrentUser = async (userId: any) => {
  const showOrder = collection(db, "Orders");
  const q = query(showOrder, where("userId", "==", userId));

  try {
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
    let orders = [] as orderProps[];

    querySnapshot.forEach((doc) => {
      orders.push({
        date: doc.data().date ?? doc.data().date,
        price: doc.data().price ?? doc.data().price,
        orderId: doc.data().orderId ?? doc.data().orderId,
        shippingAddress:
          doc.data().shippingAddress ?? doc.data().shippingAddress,
        paymentType: doc.data().paymentType ?? doc.data().paymentType,
        cart: doc.data().cart ?? doc.data().cart,
        firstName: doc.data().firstName ?? doc.data().firstName,
        lastName: doc.data().lastName ?? doc.data().lastName,
        email: doc.data().email ?? doc.data().email,
        phoneNo: doc.data().phoneNo ?? doc.data().phoneNo,
        userId: doc.data().UserId ?? doc.data().UserId,
      });
    });

    console.log(orders);
    return orders;
  } catch (error) {
    console.error("Error fetching carts for current user:", error);
    return [];
  }
};
