import React from "react";
import "../../css/semifooter.css";
const Semiifooter = () => {
  const unveil = "Unveil a World of Remarkable Services";
  const immerse =
    "Immerse yourself in a treasure trove of exceptional products, handpicked to enrich your life and cater to your unique preferences. Explore our online emporium, where convenience meets delight, and discover the perfect additions to elevate your everyday moments";
const btnexplore = 'Explore Now'
  return <div className="relative ">
    <section className=" innersemifooter flex flex-col items-center justify-center mx-auto mt-12 w-4/5 bg-[1.2em] bg-no-repeat max-[900px]:bg-none  after:content-['*'] after:absolute after:top-0 after left-0 after:w-full after:h-full after:bg-no-repeat after:bg-[72em] after:-z-10 max-[1200px]:after:content-['*'] max-[1350px]:after:hidden">
  <h1 className="text-black text-center font-OpenSans text-4xl font-semibold leading-normal max-[640px]:text-[1.7rem]">
    {unveil}
  </h1>
<p className=" text-[#818181] mt-2 text-center font-OpenSans text-base font-normal leading-[1.5625rem] max-[640px]:text-base">
  {immerse}
</p>
<button className="btnexplor mt-2 rounded-[1.9375rem] backdrop-blur-sm inline-flex px-9 py-4 justify-center items-center font-extrabold gap-[0.625rem] text-[#363636] font-OpenSans text-[1.125rem] leading-normal max-[640px]:text-[0.7rem] max-[640px]:font-semibold border-2 border-white border-solid">{btnexplore}</button>
</section>
  </div>;
};

export default Semiifooter;
