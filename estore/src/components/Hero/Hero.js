import React from "react";
import heroImage from "../../assets/images/floralSleevelessMaxi.jpg";

const Hero = () => {
  return (
    <section className="text-gray-700 body-font bg-local" style={imageStyle}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Women Trending Fashion
          </h1>
          <p className="mb-8 leading-relaxed">
            Get the trending fashion from our store and have your signature look
            on point.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const imageStyle = {
  backgroundImage: `url(${heroImage})`,
  height: "500px",
};

export default Hero;
