import React from "react";
import { ReactNode } from "react";
interface props {
text: string;
abouttext: string;
children: ReactNode;
}
const Categorycopy =({text, abouttext, children}:props)=> {
    return (
    <>
    <div className="thewears max-[480px]:w-w-4/5 max-[1000px]:w-auto  max-[1220px]:p-0 flex flex-col justify-center w-fit text-center px-4 pt-4 cursor-pointer m-2 duration-300 ease-in transition-all hover:scale-110">
    <h1 className="text-white font-OpenSans text-xl font-medium leading-normal text-center">
      {text}
    </h1>
    <p className="text-[#DFDFDF] font-OpenSans text-sm font-normal leading-normal mt-0">
      {abouttext}
    </p>
    <div className="pt-4 max-[649px]:flex max-[649px]:justify-center max-[649px]:items-center ">
        {children}
    </div>
    </div>
    </>
    )
}
export default Categorycopy;