// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  // getDocs,
  // where,
  // query,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
// import { checkoutProps } from "../dataTypes";
import { db } from "../components/config/config";
import { userProps } from "../dataTypes";
//   import { db } from "../components/config/config

// create a collection for each user when they sign in

export async function createUser(userData: userProps) {
  // Assuming `db` is your Firestore database
  const docRef = doc(db, "Users", userData.userId); // Create a document reference
  await setDoc(docRef, userData);
  return; // Set the data for the document
}

// show the user information
export const getShowUser = async () => {
  const showUser = collection(db, "Users");
  const q = query(showUser);
  const querySnapshot = await getDocs(q);

  console.log(querySnapshot);
  let users = [] as userProps[];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    // doc.data() is never undefined for query doc snapshots

    users.push({
      firstName: data.firstName || "",
      // Use fallback value if undefined
      lastName: data.lastName || "",
      email: data.email || "",
      userId: data.userId || "",
      password: data.password || "",
      phoneNo: data.phoneNo || "",
    });
    // const currentUserData = users.find((user) => user.userId === currentUserId);
  });
  console.log(users);
  return users;
};

// useEffect(() => {
//   async function fetchData() {
//     try {
//       let users = await getShowUser();
//       if (users) {
//       }
//       setUserDetails(users);
//       console.log(users);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//     // You can await here

//     // ...
//   }
//   fetchData();
// }, [signbtn]);
// console.log("userdetails", firstName, lastName, email);
