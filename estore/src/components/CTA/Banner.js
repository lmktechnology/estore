import React from "react";

const Banner = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-large title-font text-white">
            GET 20% DISCOUNT ON ALL PURCHASES ABOVE $300 !!!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
