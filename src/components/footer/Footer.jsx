import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Footer = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <>
      <footer class=" pt-12 pb-6" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-bold mb-4">ShopEase</h3>
              <p class="text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Your one-stop destination for the latest trends in fashion,
                electronics, and more.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-gray-400  hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Customer Service</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
              <p class="text-gray-400 mb-4">
                Subscribe for updates and discounts.
              </p>
              <form class="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  class="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900" style={{ placeholder: mode === 'dark' ? 'white' : '' }}
                />
                <button
                  type="submit"
                  class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(17, 24, 39)' : '', color: mode === 'dark' ? 'white' : '', }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr class="border-gray-700 my-6" />
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex space-x-4 mb-4 md:mb-0">
              <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <i class="fab fa-instagram"></i>
              </a>
            </div>

            <p class="text-gray-400 text-sm" style={{ color: mode === 'dark' ? 'white' : '' }}>
              &copy; 2023 ShopEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
