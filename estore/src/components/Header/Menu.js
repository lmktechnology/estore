import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/men">
            Men
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/women">
            Women
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/kids">
            Kids
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/blog">
            Blog
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/about">
            About Us
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/contact-us">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
