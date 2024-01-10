import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
   <>
    <footer class="  bg-gray-900 text-white p-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <!-- About Us --> */}
        <div>
            <h3 class="text-lg font-semibold mb-4">About Us</h3>
            <p class="text-gray-400">Welcome to Your Ecommerce, your trusted online shopping destination. We provide high-quality products and a seamless shopping experience.</p>
        </div>

        {/* <!-- Quick Links --> */}
        <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="list-none">
                <li><NavLink to="home" class="text-gray-400 hover:text-white">Home</NavLink></li>
                <li><NavLink to="about" class="text-gray-400 hover:text-white">About</NavLink></li>
                <li><NavLink to="product" class="text-gray-400 hover:text-white">Products</NavLink></li>
                <li><NavLink to="contact" class="text-gray-400 hover:text-white">Contact</NavLink></li>
            </ul>
        </div>

        {/* <!-- Contact Us --> */}
        <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <p class="text-gray-400">123 Main Street, City</p>
            <p class="text-gray-400">Email: info@yourcommerce.com</p>
            <p class="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* <!-- Social Media Links --> */}
        <div>
            <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                {/* <!-- Add more social media icons as needed --> */}
            </div>
        </div>
    </div>
</footer>
   </>
  )
}

export default Footer