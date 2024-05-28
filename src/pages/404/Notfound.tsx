import React from "react";
import notfound from "../../img/404.svg";
const Notfound = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <img className="flex justify-center items-center w-[60%] sm:w-[45%] lg:w-[30%]" src={notfound} alt="404" />
      <h1 className="text-center text-[3rem] text-black font-semibold">404 Not Found</h1>
      <p  className="text-center">Sorry, the page you are looking for does not exist.</p>
      
    </div>
  );
};

export default Notfound;
