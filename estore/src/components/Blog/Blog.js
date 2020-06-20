import React from "react";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <BlogItem
            image={"https://dummyimage.com/720x400"}
            category={"News"}
            title={"The Catalyzer"}
            learnMore={"/blog"}
            viewCount={"1.2K"}
            commentsCount={"9"}
          >
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </BlogItem>

          <BlogItem
            image={"https://dummyimage.com/720x400"}
            category={"Trends"}
            title={"The 400 Blows"}
            learnMore={"/blog"}
            viewCount={"2.5K"}
            commentsCount={"15"}
          >
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </BlogItem>

          <BlogItem
            image={"https://dummyimage.com/720x400"}
            category={"News"}
            title={"Shooting Stars"}
            learnMore={"/blog"}
            viewCount={"8.9K"}
            commentsCount={"67"}
          >
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </BlogItem>
        </div>
      </div>
    </section>
  );
};

export default Blog;
