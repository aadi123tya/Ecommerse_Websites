import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { addItem, setpathName } from "../feature/Slices";
import { useDispatch } from "react-redux";

function Product() {
  const url = window.location.pathname.toString();
  const dispatch = useDispatch();
  dispatch(setpathName(url));
  const data = useLoaderData();
  // const [CountItems,setCountItems] = useState(0);


  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          id="searchInput"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <img
              src={item.image}
              alt="Product 1"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}.</p>
            <span className="text-green-500 font-bold"> Rs{item.price}</span>
            <button
              onClick={() => {
                dispatch(addItem(item));
                // alert("item is added in cart")
              }}
              className="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>


            {/* <div className=" flex justify-normal">
            <button className="w-6 border rounded  mx-2 py-2 px-3 border-black "><p>-</p></button>
            <div type="number"  placeholder="0" className="w-8 border rounded py-2 px-3 "> {CountItems}</div>
            <button onClick ={increament}  className="w-6 border rounded mx-2 py-2 px-3   border-black"><p>+</p></button>

            </div> */}





          </div>
        ))}
      </div>
    </>
  );
}
export const rootloader = async () => {
  const response = await fetch("https://api.pujakaitem.com/api/products");
  return response.json();
};

export default Product;
