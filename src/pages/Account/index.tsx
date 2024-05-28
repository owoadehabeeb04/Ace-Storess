import React from "react";
import SideBar from "../../components/Account/sidebar";
import Navbarsign from "../../containers/nav_bar/navbarsign";
import CTA from "../../components/footer/CTA";

const index = () => {
  return (
    <div>
      <Navbarsign />
      <div className="lg:py-4 md:py-4 mt-[5rem]  py-2 px-4 lg:px-[6.25rem] md:px-4">
        <SideBar />
      </div>
      <CTA />
    </div>
  );
};

export default index;
