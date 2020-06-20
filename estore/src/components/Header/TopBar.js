import React, { useState } from "react";
import Dropdown from "../UI/Dropdown";

const TopBar = () => {
  const [lang, setLang] = useState("english");

  const changeLang = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="ml-12 h-8 border body-font text-sm-center">
      <ul className="flex space-x-4 ">
        <li>
          <select value={lang} onChange={changeLang}>
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </li>
        <li>
          <Dropdown />
        </li>
        <li>
          <a class="text-blue-500 hover:text-blue-800" href="/">
            Link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
