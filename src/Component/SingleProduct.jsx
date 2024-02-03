import React from "react";
import { useSelector } from "react-redux";

function SingleProduct() {
  const selector = useSelector(state=>state.Item)
  return (
    <>
      <div className="bg-gray-100 font-sans">
        {/* <!-- Navigation --> */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            {/* <!-- Your navigation content goes here --> */}
          </div>
        </nav>

        {/* <!-- Product Details --> */}
        <div className="container mx-auto my-8 p-4">
          {/* <!-- Product Image Gallery --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Display multiple product images here --> */}
            <img
              src="https://images.pexels.com/photos/3817497/pexels-photo-3817497.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product Image 1"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/4164088/pexels-photo-4164088.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product Image 2"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/5625041/pexels-photo-5625041.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product Image 3"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* <!-- Product Information --> */}
          <div className="mt-8">
            <h1 className="text-3xl font-semibold">{selector.name}</h1>
            <p className="text-gray-600 mt-2">
            {selector.description}
            </p>

            {/* <!-- Price --> */}
            <div className="mt-4 text-2xl font-bold text-gray-800">${selector.price}</div>

            {/* <!-- Add to Cart Button --> */}
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Buy zNow
            </button>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto">
            {/* <!-- Your footer content goes here --> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default SingleProduct;
