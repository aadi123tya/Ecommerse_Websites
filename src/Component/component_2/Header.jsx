import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";

function Header() {
  const [size, setSize] = useState(0);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setSize(cart.length);
  }, [cart]);
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* <!-- Logo --> */}
        <div className="flex">
          <NavLink to="home">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-12 w-auto mr-2 rounded-2xl"
            />
          </NavLink>
          {/* <span className="text-lg font-bold">Your Ecommerce</span> */}
        </div>

        {/* <!-- Navigation Links --> */}
        <nav className="hidden md:flex justify-center space-x-5">
          <NavLink to="home" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="about" className="hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="product" className="hover:text-gray-300">
            Products
          </NavLink>
          <NavLink to="contact" className="hover:text-gray-300">
            Contact
          </NavLink>
        </nav>

        {/* <!-- Search Bar -->
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div> */}

        {/* <!-- User Account Section --> */}
        <div className="flex items-center">
          <NavLink to="#" className="mr-4 hover:text-gray-300">
            <VscAccount class="fas fa-shopping-cart text-3xl text-white-600" />
          </NavLink>
          <NavLink to="/cart" className="hover:text-gray-300">
            <div class="flex justify-center back relative">
              {" "}
              <FaCartShopping class="fas fa-shopping-cart text-3xl text-white-600" />
              <span class="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-1 py-0.4 text-xs font-bold">
                {size}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
