import React, { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainCategories = () => {
  const [activeTab, setActiveTab] = useState("1");

  const viewTab = (e) => {
    if (activeTab !== e) setActiveTab(e);
  };

  return (
    <div>
      <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <li className="-mb-px mr-1 items-center">
          <button
            className={classnames(
              "inline-block py-2 px-4 text-gray-900 hover:text-blue-700 hover:no-underline hover:font-semibold",
              { "border-solid border-b-2 pb": activeTab === "1" }
            )}
            onClick={() => {
              viewTab("1");
            }}
          >
            Men
          </button>
        </li>
        <li className="mr-1 items-center">
          <button
            className={classnames(
              "inline-block py-2 px-4 text-gray-900 hover:text-blue-700 hover:no-underline hover:font-semibold",
              { "border-solid border-b-2 pb": activeTab === "2" }
            )}
            onClick={() => {
              viewTab("2");
            }}
          >
            Women
          </button>
        </li>
        <li className="-mb-px mr-1 items-center">
          <button
            className={classnames(
              "inline-block py-2 px-4 text-gray-900 hover:text-blue-700 hover:no-underline hover:font-semibold",
              { "border-solid border-b-2 pb": activeTab === "3" }
            )}
            onClick={() => {
              viewTab("3");
            }}
          >
            Toddlers
          </button>
        </li>
      </ul>

      <div className="container">
        <div
          className={classnames(
            { hidden: activeTab !== "1" },
            { block: activeTab === "1" }
          )}
        >
          <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className={classnames(
            { hidden: activeTab !== "2" },
            { block: activeTab === "2" }
          )}
        >
          <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The New Stuff
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Star Shoes
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Mars
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Denva Boot
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className={classnames(
            { hidden: activeTab !== "3" },
            { block: activeTab === "3" }
          )}
        >
          <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The New Stuff
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Star Shoes
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      The New Stuff
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/250x300"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-white title-font text-lg font-medium">
                      Star Shoes
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <button className="flex items-center inline-block my-4 mx-auto p-3 hover:bg-blue-500 text-blue-900 hover:text-white border-2 border-blue-500 border-solid rounded-full">
        Browse all Products
        <div className="mx-auto inline-block">
          <FontAwesomeIcon icon="arrow-circle-right" />
        </div>
      </button>
    </div>
  );
};

export default MainCategories;
