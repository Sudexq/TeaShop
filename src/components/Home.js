import React from "react";
import "../css/home.css";

export const Home = () => {
  return (
    <div className="welcome-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="welcome-title">Welcome To Teashop</h1>
        <p className="welcome-text">
          Welcome to the fascinating world of fresh and natural teas. Enjoy
          nature in every sip.
        </p>
        <button className="cta-button">Discover</button>
      </div>
    </div>
  );
};
