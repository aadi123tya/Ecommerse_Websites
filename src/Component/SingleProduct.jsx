import React from "react";
import { useSelector } from "react-redux";

function SingleProduct() {
  const selector = useSelector(state=>state.Item)
  return (
    <>
      <div class="bg-gray-100 font-sans">
        {/* <!-- Navigation --> */}
        <nav class="bg-gray-800 text-white p-4">
          <div class="container mx-auto">
            {/* <!-- Your navigation content goes here --> */}
          </div>
        </nav>

        {/* <!-- Product Details --> */}
        <div class="container mx-auto my-8 p-4">
          {/* <!-- Product Image Gallery --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Display multiple product images here --> */}
            <img
              src="https://images.pexels.com/photos/3817497/pexels-photo-3817497.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product Image 1"
              class="w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/4164088/pexels-photo-4164088.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product Image 2"
              class="w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/5625041/pexels-photo-5625041.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product Image 3"
              class="w-full h-64 object-cover"
            />
          </div>

          {/* <!-- Product Information --> */}
          <div class="mt-8">
            <h1 class="text-3xl font-semibold">{selector.name}</h1>
            <p class="text-gray-600 mt-2">
            {selector.description}
            </p>

            {/* <!-- Price --> */}
            <div class="mt-4 text-2xl font-bold text-gray-800">${selector.price}</div>

            {/* <!-- Add to Cart Button --> */}
            <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Buy Now
            </button>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer class="bg-gray-800 text-white p-4 mt-8">
          <div class="container mx-auto">
            {/* <!-- Your footer content goes here --> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default SingleProduct;
