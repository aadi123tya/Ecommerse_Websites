import React from "react";

function HomeProducts() {


  
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 flex justify-center">
        Featured Products
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {/* <!-- Product Cards Go Here --> */}
        {/* p1 */}

        <div className="bg-white p-4 rounded shadow-md">
          <img
            src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-full h-40 object-cover mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">Product Name 1</h3>
          <p className="text-gray-600 mb-2">Product description goes here.</p>
          <span className="text-green-500 font-bold">$49.99</span>
          <button className="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

        {/* p2 */}

        <div className="bg-white p-4 rounded shadow-md">
          <img
            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-full h-40 object-cover mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">Product Name 1</h3>
          <p className="text-gray-600 mb-2">Product description goes here.</p>
          <span className="text-green-500 font-bold">$49.99</span>
          <button className="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

        {/* p3 */}

        <div className="bg-white p-4 rounded shadow-md">
          <img
            src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-full h-40 object-cover mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">Product Name 1</h3>
          <p className="text-gray-600 mb-2">Product description goes here.</p>
          <span className="text-green-500 font-bold">$49.99</span>
          <button className="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

        {/* p4 */}
        <div className="bg-white p-4 rounded shadow-md">
          <img
            src="https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-full h-40 object-cover mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">Product Name 1</h3>
          <p className="text-gray-600 mb-2">Product description goes here.</p>
          <span className="text-green-500 font-bold">$49.99</span>
          <button className="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;
