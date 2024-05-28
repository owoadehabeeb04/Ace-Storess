import React, { useEffect } from "react";
import Navbar from "../../containers/nav_bar";
import Collections from "../../containers/collections/collections";
import CTA from "../../components/footer/CTA";
import Navbarsign from "../../containers/nav_bar/navbarsign";
import { useStateContext } from "../../context/stateContext";
import { getShowUser } from "../../api/user";
import { auth } from "../../components/config/config";
import { userProps } from "../../dataTypes";
const Shop = () => {
  // const handleonlinkclicked = () => {
  //   console.log("you clicked ");
  // }
  // const { userDetails, setUserDetails }: any = useStateContext();
  // const { loggedIn, setLoggedIn }: any = useStateContext();
  // console.log(loggedIn);
  const { currentUserIdData, setCurrentUserIdData }: any = useStateContext();
  const { userDetails, setUserDetails }: any = useStateContext();

  const userId = auth.currentUser?.uid;
  useEffect(() => {
    async function fetchData() {
      // You can await here

      let users = await getShowUser();
      setUserDetails(users);
      console.log(users);

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
  console.log(currentUserIdData);
  useEffect(() => {
    // Check local storage for login status on component mount
    // const storedLoginStatus = localStorage.getItem("loggedIn");
    // if (storedLoginStatus) {
    //   setLoggedIn(JSON.parse(storedLoginStatus));
    // }
  }, []);

  // localStorage.setItem("loggedIn", JSON.stringify(true));
  // console.log(loggedIn);
  // console.log(userDetails);
  return (
    <div>
      {currentUserIdData === undefined || currentUserIdData.length === 0 ? (
        <Navbar />
      ) : (
        <Navbarsign />
      )}
      {/* <Navbar /> */}
      <Collections></Collections>
      <CTA></CTA>
    </div>
  );
};

export default Shop;

{
  /* <Navbarsign /> */
}
{
  /* {loggedIn ? <Navbarsign /> : <Navbar />} */
}
