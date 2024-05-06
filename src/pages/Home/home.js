import React from "react";
import logo from "../../img/reactlogo.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="center">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Home;
