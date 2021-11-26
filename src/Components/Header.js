import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <header className="sticky top-0 z-30 bg-gray-800 text-2xl flex justify-between items-center px-8 text-white py-4">
      <div className="logo">
        <Link to="/"> My Shop</Link>
      </div>
      <Link to="/cart">
        <div className="cart flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-yellow-400 pl-2">{total}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
