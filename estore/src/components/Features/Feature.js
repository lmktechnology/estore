import React from "react";

const Feature = (props) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            {props.ikon}
          </div>
          <h2 className="text-white text-lg title-font font-medium">
            {props.heading}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
