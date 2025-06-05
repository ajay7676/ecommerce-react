import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Footer = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <>
      <footer className=" pt-12 pb-6" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopEase</h3>
              <p className="text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Your one-stop destination for the latest trends in fashion,
                electronics, and more.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400  hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for updates and discounts.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900" style={{ placeholder: mode === 'dark' ? 'white' : '' }}
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(17, 24, 39)' : '', color: mode === 'dark' ? 'white' : '', }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <p className="text-gray-400 text-sm" style={{ color: mode === 'dark' ? 'white' : '' }}>
              &copy; 2024 Ajay Chauahn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
