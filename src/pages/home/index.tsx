import React, { Fragment, ReactElement, useEffect, useState } from "react";
import Navbar from "../../containers/nav_bar";
import Hero from "../../containers/hero";
import SecondHero from "../../components/hero/secondHero";
import Categories from "../../containers/categories/categories";
import Collections from "../../containers/collections/collections";
import Semiifooter from "../../components/footer/semiifooter";
import Footer from "../../containers/footer";
import CTA from "../../components/footer/CTA";
import Navbarsign from "../../containers/nav_bar/navbarsign";
import { useStateContext } from "../../context/stateContext";
import { auth } from "../../components/config/config";
import { getShowUser } from "../../api/user";
import { userProps } from "../../dataTypes";
import Preloader from "../../components/PreLoader";

function Home(): ReactElement {
  const { currentUserIdData, setCurrentUserIdData }: any = useStateContext();
  const { userDetails, setUserDetails }: any = useStateContext();
  const [loading, setloading] = useState(false);
  const userId = auth.currentUser?.uid;
  useEffect(() => {
    async function fetchData() {
      // You can await here
      setloading(true);
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
        setloading(false);
        // localStorage.setItem("currentuserdata", currentuserdata);
      } else {
        console.log("User not found in userDetails array");
      }
      // ....
    }
    fetchData();
  }, []);
  console.log(currentUserIdData);
  console.log(currentUserIdData);
  return (
    <Fragment>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          {currentUserIdData === undefined || currentUserIdData.length === 0 ? (
            <Navbar />
          ) : (
            <Navbarsign />
          )}
          <Hero></Hero>
          <SecondHero></SecondHero>
          <Categories></Categories>
          <Collections></Collections>
          <Semiifooter></Semiifooter>
          <Footer></Footer>
          {/* <Loader/> */}
          <CTA></CTA>
        </div>
      )}
    </Fragment>
  );
}

export default Home;
