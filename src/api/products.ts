import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  getDocs,
  
  query,
  doc,
  setDoc,
  
} from "firebase/firestore";
import { db } from "../components/config/config";
// import { product } from "../constants";
// import Products from "../containers/collections/products";
import { productsProps } from "../dataTypes";

export const h1 = "productsapi";
// Showing the products

//  uploading image files and returning their download URLs from a cloud storage service.
export const uploadImageFile = async (path: string, file: any) => {
  const storage = getStorage();
  const storageRef = ref(storage, path);
  let url = "";
  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, file).then(async (snapshot) => {
    await getDownloadURL(snapshot.ref).then((downloadURL) => {
      url = downloadURL;
    });
  });
  return url;
};

//  creating product documents within a specific collection in a database
export const createProducts = async (product: productsProps) => {
  const productRef = collection(db, "Products");
  await setDoc(doc(productRef), product);
  return;
};

export const getShowProducts = async () => {
  const showProduct = collection(db, "Products");
  const q = query(showProduct);
  const querySnapshot = await getDocs(q);

  // console.log(querySnapshot
  let products = [] as productsProps[];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    products.push({
      productName: doc.data().ProductName ?? doc.data().productName,
      productImage: doc.data().ProductImg ?? doc.data().productImage,
      productPrice: doc.data().ProductPrice ?? doc.data().productPrice,
      ProductCategory: doc.data().ProductCategory ?? doc.data().ProductCategory,
      productDetails: doc.data().productDetails,
      id: doc.data().id,
      subid: doc.data().subid,
    });
  });
  return products;
};
