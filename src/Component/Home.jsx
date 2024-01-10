import React from "react";
import HomeProducts from "./HomeElement/HomeProducts";
import Services from "./HomeElement/Services";
import TrustedCom from "./HomeElement/TrustedCom";

function Home() {
  return (
    <>
      {/* <section class="bg-black-500 text-white text-center py-16">
        <h1 class="text-4xl font-bold mb-2">Welcome to Our E-Commerce Store</h1>
        <p class="text-lg">Discover the best deals on quality products.</p>
    </section> */}
      <section class="relative h-screen bg-cover bg-center flex items-center bg-[image]">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto text-center relative z-10 text-white">
          <h1 class="text-4xl lg:text-6xl font-semibold leading-tight mb-4">
            Discover Our Latest Collection
          </h1>
          <p class="text-lg lg:text-xl mb-6">
            Explore the trends and find your perfect style.
          </p>
          <a
            href="#shop-now"
            class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>
      {/* <!-- Main Content Section --> */}

      {/* <!-- Product Cards --> */}
      <Services />
      <HomeProducts />
      <TrustedCom/>
    </>
  );
}

export default Home;
