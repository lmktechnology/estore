import React from "react";

import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import MainCategories from "../components/MainCategories/MainCategories";
import Banner from "../components/CTA/Banner";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <MainCategories />
      <Banner />
      <Features />
      <Testimonials />
      <Blog />
      <Newsletter />
    </Layout>
  );
};

export default Home;
