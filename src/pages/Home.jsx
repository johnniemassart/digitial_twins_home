import React from "react";
import "../css/Home.css";
import Moon from "../r3f/Moon";
import HomeHeader from "../components/Home/HomeHeader";
import HomeNav from "../components/Home/HomeNav";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Moon />
      <HomeHeader />
      <HomeNav />
    </div>
  );
};

export default Home;
