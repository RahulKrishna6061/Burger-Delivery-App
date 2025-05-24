import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import Menu from "./Menu";
import Promotion from "./Promotion";
import Shop from "./Shop";
const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Hero />

        {/* Home Section About */}
        <About />

        {/* Home Section Menu */}
        <Menu />

        {/* Home Section Promotion */}
        <Promotion />

        {/* Home Section Shop */}
        <Shop />

        {/* Home Section Blog */}
        <Blog />

        {/* Home Section Contact */}
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
