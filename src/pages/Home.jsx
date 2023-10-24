import React from "react";
import Footer from "../Layouts/Footer";
import HomeIntro from "../Layouts/Main/Home/HomeIntro";
import HomeMain from "../Layouts/Main/Home/HomeMain";
import Navbar from "../Layouts/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeIntro />
      <HomeMain />
      <Footer />
    </div>
  );
}

export default Home;
