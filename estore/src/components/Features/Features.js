import React from "react";
import Feature from "./Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = () => {
  return (
    <section className="text-gray-500 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <Feature
            ikon={<FontAwesomeIcon icon="arrow-circle-right" />}
            heading={"Shooting Stars"}
          >
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </Feature>

          <Feature
            ikon={<FontAwesomeIcon icon="arrow-circle-right" />}
            heading={"Shooting Stars"}
          >
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </Feature>

          <Feature
            ikon={<FontAwesomeIcon icon="arrow-circle-right" />}
            heading={"Shooting Stars"}
          >
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </Feature>
        </div>
      </div>
    </section>
  );
};

export default Features;
