import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="bg-gray-100 font-sans w-full m-0">
        <div class="bg-white shadow">
          <div class="container max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between py-4">
              <div class="sm:flex sm:items-center">
                <Link
                  to="/"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Home
                </Link>
                <Link
                  to="/friends"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Friends
                </Link>
                <Link
                  to="/about"
                  class="text-gray-800 text-sm font-semibold hover:text-purple-600"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1>Welcome to my fancy Routing Website!!!</h1>
    </div>
  );
};

export default Header;
