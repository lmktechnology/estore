import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <Testimonial
            selfie={"https://dummyimage.com/106x106"}
            name={"Holden Caulfield"}
            title={"UI DEVELOPER"}
          >
            Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
            neutra before they sold out fixie 90's microdosing. Tacos pinterest
            fanny pack venmo, post-ironic heirloom try-hard pabst authentic
            iceland.
          </Testimonial>

          <Testimonial
            selfie={"https://dummyimage.com/106x106"}
            name={"Alper Kamu"}
            title={"Graphics Designer"}
          >
            Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
            neutra before they sold out fixie 90's microdosing. Tacos pinterest
            fanny pack venmo, post-ironic heirloom try-hard pabst authentic
            iceland.
          </Testimonial>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
