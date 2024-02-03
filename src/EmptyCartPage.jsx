import React from "react";
import { NavLink } from "react-router-dom";

function EmptyCartPage() {
  return (
    <div className=" bg-gray-100 h-screen mx-10 flex justify-center ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart</h1>
        <p className="text-xl text-gray-600 mb-4">
          Your shopping cart is currently empty.
        </p>
        <img
          src="/images/53530.jpg"
          alt="Empty Cart"
          className="w-full h-56 mx-auto mb-6"
        />
        <NavLink to="/product" className="text-blue-500 hover:underline">
          <button type="click" className=" mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded">Explore our products</button>
        </NavLink>
      </div>
    </div>
  );
}

export default EmptyCartPage;
