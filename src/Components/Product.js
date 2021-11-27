import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shop";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const { id, title, price, category, image } = product;

  const cartButton = () => {
    dispatch(addToCart(product));
    setIsClicked(true);
    setCount((count) => count + 1);
  };

  return (
    <div className="border shadow flex flex-col items-center justify-between p-2">
      <div key={id} className="group relative mb-1">
        <div className="product-img">
          <img
            src={image}
            alt={title}
            // className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" />
                {title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
            <p className="text-sm font-medium text-gray-900">$ {price}</p>
          </div>
        </div>
      </div>
      <div className="w-full mb-2">
        {isClicked ? (
          <button
            onClick={() => cartButton()}
            type="button"
            className="inline-flex items-center justify-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium w-full shadow-sm text-white bg-gray-800 "
          >
            Added{" "}
            <span className="py-1 px-2 text-gray-800 ml-1 bg-yellow-400 rounded-full">
              {count}
            </span>
          </button>
        ) : (
          <button
            onClick={() => cartButton()}
            type="button"
            className="inline-flex items-center justify-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium w-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 "
          >
            Add to Cart
          </button>
        )}
      </div>
      <Link className="w-full" to={`/product/${id}`}>
        <button
          type="button"
          className="inline-flex items-center justify-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium w-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 "
        >
          View More
        </button>
      </Link>
    </div>
  );
};

export default Product;
