import React from "react";
import Topbar from "./TopBar";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex flex-col">
      <Topbar />
      <Menu />
    </header>
  );
};

export default Header;
