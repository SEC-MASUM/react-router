import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white shadow">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="sm:flex sm:items-center ">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1 className="text-3xl font-medium">Welcome to my fancy Routing Website!!!</h1>
    </div>
  );
};

export default Header;
