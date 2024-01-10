import React, { useEffect } from "react";
import { addItem, removeItem, setItem } from "../feature/Slices";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartPage from "../EmptyCartPage";
import { NavLink } from "react-router-dom";

function Cart() {
  const Cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Cart.length != 0 ? (
        Cart.map((item) => (
          <>
            <>
              <div>
                <div key={item.id} class="bg-white p-4 rounded shadow-md ">
                  <img
                    src={item.image}
                    alt="Product 1"
                    class="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 class="text-lg font-semibold mb-2">{item.name}</h3>
                  <p class="text-gray-600 mb-2">{item.description}.</p>
                  <span class="text-green-500 font-bold flex justify-center">
                    {" "}
                    Rs{item.price}
                  </span>
                  <div class=" mt-3 flex justify-center">
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(addItem(item));
                      }}
                      class="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Buy Now
                    </button>
                    <NavLink to='/s'>
                    <button class="mt-2 mx-8 bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{
                      dispatch(setItem(item))
                    }}>
                      Veiw Details
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          </>
        ))
      ) : (
        <>
          {" "}
          <EmptyCartPage />
        </>
      )}
    </div>
  );
}

export default Cart;
