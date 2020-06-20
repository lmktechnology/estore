import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSearch,
  faDollarSign,
  faArrowCircleRight,
  faArrowRight,
  faEye,
  faComment,
  faStore,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

library.add(
  fab,
  faEnvelope,
  faSearch,
  faDollarSign,
  faArrowCircleRight,
  faArrowRight,
  faEye,
  faComment,
  faStore,
  faAngleDown
);

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
