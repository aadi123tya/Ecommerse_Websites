import React from "react";
import { GrDeliver } from "react-icons/gr";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";

import { RiSecurePaymentLine } from "react-icons/ri";
function Services() {
  return (
    <>
      <section className="mb-4 border border-solid border-t-4 border-l-4 border-gray-300 p-4 rounded-lg ">
      <div className=" flex justify-center"><h1 className=" font-extrabold text-2xl">Services</h1></div>
        <div className=" flex justify-center gap-0 ">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-72 mx-auto mt-8">
            <div className="mt-20">
              <div className="flex justify-center">
                {" "}
                <GrDeliver />{" "}
              </div>
              <div className="flex justify-center">
                <p className=" text-black mt-2  inline-block">
                  SuperFast and Free Delivery
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-rows-2">

          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-32 mx-auto mt-8">
            <div className="mt-10 ">
              <div className="flex justify-center">
                {" "}
                <IoShieldCheckmarkSharp />{" "}
              </div>
              <div className="flex justify-center">
                <p className=" text-black mt-2  inline-block">
                  Non-Contacting Shipping
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-32 mx-auto mt-8">
            <div className="mt-10 ">
              <div className="flex justify-center">
                {" "}
                <GiReceiveMoney />{" "}
              </div>
              <div className="flex justify-center">
                <p className=" text-black mt-2  inline-block">
                  Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow-md w-72 h-72 mx-auto mt-8">
            <div className="mt-20">
              <div className="flex justify-center">
                {" "}
                <RiSecurePaymentLine />{" "}
              </div>
              <div className="flex justify-center">
                <p className=" text-black mt-2  inline-block">
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
