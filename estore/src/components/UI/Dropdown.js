import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = () => {
  return (
    <div className="flex flex-col">
      <button>
        English
        <FontAwesomeIcon icon="angle-down" size="lg" className="ml-1 pt-1" />
      </button>
      <ul
        className="absolute z-10 bg-white border border-solid w-15"
        style={{ top: "1.6rem" }}
      >
        <li>English</li>
        <li>French</li>
      </ul>
    </div>
  );
};

export default Dropdown;
