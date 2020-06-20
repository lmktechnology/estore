import React from "react";

const Brand = (props) => {
  return (
    <div className="slide">
      <img
        src={props.src}
        height={props.height}
        width={props.width}
        alt={props.alt}
      />
    </div>
  );
};

export default Brand;
