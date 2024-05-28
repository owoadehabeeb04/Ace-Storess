import React, { useEffect, useState } from "react";

// import firebase from "firebase";
import { storage } from "../config/config";
import { db } from "../config/config";
import "firebase/storage";
import {
  createProducts,
  getShowProducts,
  uploadImageFile,
} from "../../api/products";
import { useStateContext } from "../../context/stateContext";
import { toast } from "react-toastify";

// import React from "react";

// console.log(theProducts);
const Addproducts = () => {
  const [productname, setproductname] = useState("");
  const [productcategory, setproductcategory] = useState("");
  const [productprice, setproductprice] = useState(0);
  const [productImg, setproductImg] = useState<File | null>(null);
  const [error, setError] = useState(" ");
  const [productDetails, setProductDetails] = useState("");

  const { gottenProducts, setGottenProducts }: any = useStateContext();

  // console.log(handledate)
  const types: string[] = ["image/png", "image/jpeg"];
  console.log(types);
  types.forEach((element) => {
    console.log(element);
  });
  console.log(db);
  console.log(storage);

  const productImgHandler = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    // setFileName(files?.item(0)?.name);
    const selectedFile = target.files?.item(0);
    if (selectedFile && types.includes(selectedFile.type)) {
      setproductImg(selectedFile);
      setError("");
    } else {
      setproductImg(null);
      setError("Please select a valid image type (jpg, png)");
    }
    console.log("working");
  };

  // function
  const [isLoading, setIsLoading] = useState(false);
  const addProducts = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (productImg) {
      try {
        let url = await uploadImageFile(
          `product-images/${productImg?.name}`,
          productImg
        );
  
        await createProducts({
          productName: productname,
          productPrice: Number(productprice),
          ProductCategory: productcategory,
          productDetails: productDetails,
          productImage: url,
          id: new Date().toISOString(),
          subid: gottenProducts.length + 1,
        });
  
        // Reset form values
        setproductname("");
        setproductcategory("");
        setproductprice(0);
        setProductDetails("");
        setproductImg(null);
        setError("");
      } catch (error) {
        setError("Error adding product. Please try again.");
        console.error('Error adding product:', error);
      }
    }
  
    setIsLoading(false);
    toast.success("Added New Product successfully!");
  };
  

  useEffect(() => {
    async function fetchData() {
      // You can await here
      setIsLoading(true);
      let products = await getShowProducts();

      setGottenProducts(products);
      setIsLoading(false);
      console.log(products);
      // ...
    }
    fetchData();
  }, []);
  console.log(gottenProducts);
  return (
    <div className="  flex flex-col justify-center items-center">
      <h1 className="uppercase text-black font-OpenSans text-2xl font-bold ">
        Add products
      </h1>

      <div className="form border-2 border-black rounded-[5%] p-8 max-[390px]:px-2 mt-4">
        <form
          autoComplete="off"
          action=""
          className="flex justify-center flex-col "
          onSubmit={addProducts}
        >
          <div>
            <label htmlFor="productname ">Product Name :</label> <br />
            <input
              className="w-full border-[grey] rounded-lg border-2 px-2 py-1"
              type="text"
              required
              onChange={(e) => setproductname(e.target.value)}
              value={productname}
            />{" "}
            <br />
          </div>
          <div className="mt-2">
            <label htmlFor="productname ">Product Category :</label> <br />
            <input
              className="w-full border-[grey] rounded-lg border-2 px-2 py-1"
              type="text"
              required
              onChange={(e) => setproductcategory(e.target.value)}
            />{" "}
            <br />
          </div>
          <div className="mt-2">
            <label htmlFor="ProductPrice">Product Price :</label> <br />
            <input
              type="number "
              className="w-full border-[grey] rounded-lg border-2 px-2 py-1"
              required
              onChange={(e) => setproductprice(parseFloat(e.target.value))}
            />{" "}
            <br />
          </div>
          <div className="mt-2">
            <label htmlFor="ProductPrice">Product Details :</label> <br />
            {/* <input
              type="number "
              className="w-full border-[grey] rounded-lg border-2 px-2 py-1"
              required
              onChange={(e) => setproductprice(parseFloat(e.target.value))}
            />{" "} */}
            <textarea
              className="w-full h-[104px] outline-none border-[2px] border-[grey]  px-2 py-1 rounded-lg"
              value={productDetails}
              name=""
              id=""
              onChange={(e) => setProductDetails(e.target.value)}
            ></textarea>
            <br />
          </div>
          <div className="mt-2 mb-4">
            <label htmlFor="">Add Product Image</label> <br />
            <input
              type="file"
              className="w-full border-[grey] rounded-lg border-2 px-2 py-1"
              required
              id="file"
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              onChange={productImgHandler}
            />
          </div>
          <div className="mt-2 mb-4">
            <label htmlFor="">Add Sample Product Images</label>{" "}
            <span className="text-[tomato]">(Optional)</span> <br />
            <div className="w-full border-[grey] rounded-lg border-2 px-2 py-2">
              <input
                type="file"
                className="w-full border-[grey] rounded-lg border-2 px-2 py-1"
                placeholder="min of 2 sample and max of 4 sample"
                id="file"
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onChange={productImgHandler}
              />{" "}
              <br />
              <input
                type="file"
                className="w-full border-[grey] rounded-lg border-2 px-2 py-1 mt-2"
                placeholder="min of 2 sample and max of 4 sample"
                id="file"
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onChange={productImgHandler}
              />{" "}
              <br />
              <input
                type="file"
                className="w-full border-[grey] rounded-lg border-2 px-2 py-1 mt-2"
                placeholder="min of 2 sample and max of 4 sample"
                id="file"
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onChange={productImgHandler}
              />
            </div>
          </div>
          {/* <p>Added {currentDateTime.toString()}</p> */}

          <button
            className={`flex gap-[0.5rem]  items-center justify-center font-bold rounded-[1.9375rem] text-[white] 
            bg-[black] py-4 px-10    max-[1024px]:p-4   max-[480px]:w-[100%] max-[480px]:mb-[0rem] ${
              isLoading ? "opacity-10" : ""
            }`}
            onClick={addProducts}
          >
            {isLoading && (
              <div className="border-4  animate-spin border-black p-2 w-fit flex  justify-center items-center text-center rounded-full"></div>
            )}
            <span className={`${isLoading ? "hidden" : ""}`}>Add Products</span>
          </button>
        </form>

        {error && <span className="text-[red]">{error}</span>}
      </div>
      {/* <Products></Products> */}
    </div>
  );
};

export default Addproducts;
