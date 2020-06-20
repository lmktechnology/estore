import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogItem = (props) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={props.image}
          alt="blogImage"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {props.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed mb-3">{props.children}</p>
          <div className="flex items-center flex-wrap ">
            <Link
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              to={props.learnMore}
            >
              Learn More
              <div className="ml-2">
                <FontAwesomeIcon icon="arrow-right" />
              </div>
            </Link>
            <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <div className="mr-1 inline-block">
                <FontAwesomeIcon icon="eye" />
              </div>
              {props.viewCount}
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm">
              <div className="mr-1 inline-block">
                <FontAwesomeIcon icon="comment" />
              </div>
              {props.commentsCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
