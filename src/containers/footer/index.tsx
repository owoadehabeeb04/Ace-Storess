import React from "react";
import "../../css/footer.css";
import clothing from "../../img/clothing.svg";
import accesaories from "../../img/accesories.svg";
import sport from "../../img/sport.svg";
import bags from "../../img/bags.svg";
import delivery from "../../img/delivery.svg";

interface props {
  text: string;
  images: string;
}
// arrays to loop through
const imagesAndTexts: props[] = [
  {
    images: clothing,
    text: "clothing",
  },
  {
    images: accesaories,
    text: "accessories",
  },
  {
    images: sport,
    text: "sport",
  },
  {
    images: bags,
    text: "bags",
  },
  {
    images: delivery,
    text: "delivery",
  },
];
const Footer = () => {
  return (
    <div className="flex justify-between bg-white rounded-[100%] w-full pb-[10em] relative pt-[10em] shadow-md max-[640px]:hidden">
      {imagesAndTexts.map((item, i) => (
        <div className="itemsfooter w-fit" key={i}>
          <div className="p-[1.5em] rounded-[50%] bg-white w-fit shadow-[0px 8px 24px 0px rgba(0, 0, 0, 0.08)] shadow-black max-[1024px]:p-2rem">
            <img src={item.images} alt={item.text} />
          </div>
          <div>
            <h1 className="text-[#818181] font-OpenSans text-center text-base font-medium leading-none mb-0 mt-0">
              {item.text}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
