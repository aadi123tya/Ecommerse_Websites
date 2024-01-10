import React from "react";
import { NavLink } from "react-router-dom";

function EmptyCartPage() {
  return (
    <div class=" bg-gray-100 h-screen flex justify-center ">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Your Cart</h1>
        <p class="text-xl text-gray-600 mb-4">
          Your shopping cart is currently empty.
        </p>
        <img
          src="/images/53530.jpg"
          alt="Empty Cart"
          class="w-full h-56 mx-auto mb-6"
        />
        <NavLink to="/product" class="text-blue-500 hover:underline">
          <button type="click" class=" mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded">Explore our products</button>
        </NavLink>
      </div>
    </div>
  );
}

export default EmptyCartPage;
