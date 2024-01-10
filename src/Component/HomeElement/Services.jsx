import React from "react";
import { GrDeliver } from "react-icons/gr";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";

import { RiSecurePaymentLine } from "react-icons/ri";
function Services() {
  return (
    <>
      <section class="mb-4 border border-solid border-t-4 border-l-4 border-gray-300 p-4 rounded-lg ">
      <div class=" flex justify-center"><h1 class=" font-extrabold text-2xl">Services</h1></div>
        <div class=" flex justify-center gap-0 ">
          <div class="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-72 mx-auto mt-8">
            <div class="mt-20">
              <div class="flex justify-center">
                {" "}
                <GrDeliver />{" "}
              </div>
              <div class="flex justify-center">
                <p class=" text-black mt-2  inline-block">
                  SuperFast and Free Delivery
                </p>
              </div>
            </div>
          </div>

          <div class=" grid grid-rows-2">

          <div class="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-32 mx-auto mt-8">
            <div class="mt-10 ">
              <div class="flex justify-center">
                {" "}
                <IoShieldCheckmarkSharp />{" "}
              </div>
              <div class="flex justify-center">
                <p class=" text-black mt-2  inline-block">
                  Non-Contacting Shipping
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-32 mx-auto mt-8">
            <div class="mt-10 ">
              <div class="flex justify-center">
                {" "}
                <GiReceiveMoney />{" "}
              </div>
              <div class="flex justify-center">
                <p class=" text-black mt-2  inline-block">
                  Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
          </div>

          <div class="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-72 mx-auto mt-8">
            <div class="mt-20">
              <div class="flex justify-center">
                {" "}
                <RiSecurePaymentLine />{" "}
              </div>
              <div class="flex justify-center">
                <p class=" text-black mt-2  inline-block">
                  Super Secure Payment System
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
