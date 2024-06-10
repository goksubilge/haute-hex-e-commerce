import React from "react";
import Hero from "../mainpages/Hero";
import Footer from "../layout/Footer";
import ShopCardAOne from "../components/ShopCardAOne";
import ShopCardBTwo from "../components/ShopCardBTwo";
import ShopCardCThree from "../components/ShopCardCThree";

function Homepage() {
  return (
    <div>
      <Hero />
      <ShopCardAOne />
      <ShopCardBTwo />
      <ShopCardCThree />
      <Footer />
    </div>
  );
}

export default Homepage;
