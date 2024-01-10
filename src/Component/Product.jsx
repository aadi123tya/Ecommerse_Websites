import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../feature/Slices";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
function Product() {
  const data = useLoaderData();
  console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <div  class="mb-8">
        <input
          type="text"
          id="searchInput"
          placeholder="Search products..."
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div
      key={Date.now()}
        id="productList"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((item,index) => {
          return (
            <>
              <>
                <div key={index} class="bg-white p-4 rounded shadow-md">
                  <img
                    src={item.image}
                    alt="Product 1"
                    class="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 class="text-lg font-semibold mb-2">{item.name}</h3>
                  <p class="text-gray-600 mb-2">{item.description}.</p>
                  <span class="text-green-500 font-bold"> Rs{item.price}</span>
                  <button
                    onClick={()=>{
                      dispatch(addItem(item))
                      // alert("item is added in cart")
                    }}
                    class="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            </>
          );
        })}
      </div>
    </>
  );
}
export const rootloader = async () => {
  const response = await fetch("https://api.pujakaitem.com/api/products");
  return response.json();
};

export default Product;
