import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <div className="mr-1 inline-block">
              <FontAwesomeIcon icon="store" size="lg" />
            </div>
            <span className="ml-3 text-xl">tailblocks</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 tailblocks —
            <Link
              to="/"
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://facebook.com/" className="text-gray-500">
              <div className="mr-1 inline-block">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </div>
            </a>
            <Link to="https://twitter.com/" className="ml-3 text-gray-500">
              <div className="mr-1 inline-block">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </div>
            </Link>
            <Link to="https://instagram.com/" className="ml-3 text-gray-500">
              <div className="mr-1 inline-block">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </div>
            </Link>
            <Link to="https://youtube.com/" className="ml-3 text-gray-500">
              <div className="mr-1 inline-block">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </div>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
