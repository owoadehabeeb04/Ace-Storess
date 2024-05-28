import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/stateContext";
import { getShowProducts } from "../../api/products";
import rate from "../../img/rate.svg";
import searchlogo from "../../img/searchlogo.svg";
import carticon from "../../img/carticon.svg";
import { Link } from "react-router-dom";
// import Loader from "../../components/Loader";
import noproductfound from "../../img/no product found.jpg";
import Preloader from "../../components/PreLoader";
type productsProps = {
  productName: string;
  productImage: string;
  productPrice: Number;
  ProductCategory: string;
  productDetails: string;
  id: string;
  subid: string;
};
const Products = () => {
  const { setGottenProducts }: any = useStateContext();
  const [searchInput, setSearchInput] = useState("");
  const [filteredproduct, setFilteredproduct] = useState<productsProps[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setloading(true);

      // You can await here
      let products = await getShowProducts();

      setGottenProducts(products);

      // ....
      if (searchInput) {
        const filtered = products.filter(
          (product) =>
            product.productName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            product.ProductCategory.toLowerCase().includes(
              searchInput.toLowerCase()
            )
        );
        console.log(filtered);
        setFilteredproduct(filtered);
      } else {
        setFilteredproduct(products);
      }

      setloading(false);
    }
    fetchData();
  }, [searchInput, setGottenProducts]);
  return (
    <>
      <div className="searchcollection">
        <div className="search">
          <img
            className="searchlogocollection"
            src={searchlogo}
            alt={searchlogo}
            onClick={() => {}}
          />
          <input
            className="searchinput w-full md:w-2/4 outline-0 "
            type="text"
            placeholder="Search..."
            onChange={(e: any) => setSearchInput(e.target.value)}
          />
        </div>
        <div></div>
      </div>
      <div className="d grid grid-cols-4 gap-10 ">
        {/* {gottenProducts.map((product: productsProps, i: any) => (

        ))} */}
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-8 mb-8">
          <Preloader />{" "}
        </div>
      )}

      {filteredproduct.length === 0 && !loading && (
        <div className="flex justify-center items-center mt-16 mb-16">
          <img className="w-2/4" src={noproductfound} alt="no product found" />
        </div>
      )}

      {!loading && (
        <div className=" griid grid grid-cols-4 gap-10  ">
          {filteredproduct.map((product: productsProps, i: any) => (
            <div className="the-prod mt-8 w-full sm:w-[16rem]" key={i}>
              <Link to={`/product/${product.subid}`}>
                <img
                  className=" w-full cursor-pointer duration-300 ease-in object-cover transition-all hover:rotate-3 h-[20rem] "
                  src={product.productImage}
                  alt=""
                  key={product.productImage}
                />
              </Link>
              <p className="text-black font-bold leading-[normal] text-base font-OpenSans">
                {product.productName}
              </p>
              <p className="text-[#818181] font-medium leading-normal">
                {" "}
                &#8358;{product.productPrice + ".00"}
              </p>
              <div className="flex justify-between">
                <img src={rate} alt={rate + "img"} />
                <img
                  className="w-[20%]"
                  src={carticon}
                  alt={carticon + "img"}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
