import { useParams } from "react-router";
import { BackspaceIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setProducts } from "../actions/shop";

const demo = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

const ProductPage = () => {
  const params = useParams();

  const product = useSelector(
    (state) => state.products.products[params.id - 1]
  );

  const { id, title, price, category, description, image, rating } = product;
  return (
    <>
      <section className="w-full min-h-full py-10 bg-gray-200">
        <section className="sm:flex mx-auto bg-white p-4 w-10/12 shadow-lg">
          {/* Product Image  */}
          <div className="lg:w-2/6 w-full">
            <img src={image} alt={title} />
          </div>
          {/* Product Info  */}
          <div className="mt-6 sm:mt-0 ml-8 flex flex-col items-start">
            <h1 className="text-xl font-bold sm:mt-20">{title}</h1>
            <h1 className="text-2xl font-bold text-gray-800">$ {price}</h1>
            <p className="bg-black w-full h-1 my-2"></p>
            <div className="flex items-center">
              {Array(Math.ceil(rating.rate))
                .fill(0)
                .map((index) => {
                  return (
                    <div className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  );
                })}
              ({rating.count})
            </div>
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <p className="text-justify">{description}</p>
            <div>
              <Link to="/">
                <button
                  type="button"
                  className=" m-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <BackspaceIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  to Home
                </button>
              </Link>
              <Link to="/cart">
                <button
                  type="button"
                  className="my-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <BackspaceIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  to Cart
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductPage;
