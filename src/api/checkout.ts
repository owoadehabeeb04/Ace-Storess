// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { collection, getDocs, query, doc, setDoc } from "firebase/firestore";
import { checkoutProps } from "../dataTypes";
import { auth, db } from "../components/config/config";

//  creating checkout documents within a specific collection in a database
export const createCheckout = async (checkout: checkoutProps) => {
  const checkoutRef = collection(db, "checkouts");
  await setDoc(doc(checkoutRef), checkout);
  return;
};
const userId = auth.currentUser?.uid;
console.log(userId);
// show the checkout information
export const getShowCheckouts = async () => {
  const showCheckout = collection(db, "checkouts");
  const q = query(showCheckout);
  const querySnapshot = await getDocs(q);

  console.log(querySnapshot);
  let checkouts = [] as checkoutProps[];

  querySnapshot.forEach((doc) => {
 
    checkouts.push({
      firstName: doc.data()?.firstName ?? "",
      lastName: doc.data()?.lastName ?? "",
      city: doc.data()?.city ?? "",
      state: doc.data()?.state ?? "",
      address: doc.data()?.address ?? "",
      additionalInfo: doc.data()?.additionalInfo ?? "",
      phoneNo: doc.data()?.phoneNo ?? "",
      Email: doc.data()?.Email ?? "",
      cardOrDelivery: doc.data().cardOrDelivery,
      userId: doc.data().userId ?? "",
    });
  });
  console.log(checkouts);
  return checkouts; // Return the checkouts array
};
