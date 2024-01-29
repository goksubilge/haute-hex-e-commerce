import React from "react";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-center px:[5%]">
      <div className="inline-flex justify-between flex-wrap  gap-36">
        <header className="flex justify-between items-center p-4 ">
          <h1 className=" z-10 text-papayas-textblack pr-10">HauteHex</h1>
          <nav className="inline-flex list-none ml-10 mr-32 text-papayas-textgray gap-4 p-0 mr-0;">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/blog">Contect</a>
            <a href="/pages">Pages</a>
          </nav>
          <div className="inline-flex flex-1 justify-between text-mainblue">
            <div className="inline-flex items-center ">
              <a href="/login" className="w-4 h-4">
                <IoPersonOutline />
              </a>
              <a href="/login" className="inline-flex items-baseline">
                Login
              </a>
              <span>/</span>
              <a href="/login">Register</a>
            </div>
            <div className="flex flex-row items-center">
              <a href="/search" className="w-4 h-4">
                <CiSearch />
              </a>
              <a href="/basket" className=" w-4 h-4">
                <SlBasket />
              </a>
              <a href="/likes" className="w-4 h-4">
                <CiHeart />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
