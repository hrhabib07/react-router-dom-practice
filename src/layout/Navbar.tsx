import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <div>
      <nav className="flex justify-between py-2 bg-gray-50 px-4">
        <Link to="/" className="text-lg font-medium">
          <h2>MyApp</h2>
        </Link>

        <div className="md:hidden absolute top-0 right-2 bg-gray-50">
          <button onClick={() => setShowNavigation(!showNavigation)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <ul
              className={` ${
                showNavigation ? "flex gap-4 flex-col" : "hidden"
              }`}
            >
              <li className="hover:bg-gray-100 p-2">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-gray-100 p-2">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:bg-gray-100 p-2">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-gray-100 p-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </button>
        </div>

        <ul className="hidden md:flex gap-4 ">
          <li className="hover:bg-gray-100 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-100 p-2">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:bg-gray-100 p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-gray-100 p-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
