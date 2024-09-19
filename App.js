import React from "react";
import ReactDOM from "react-dom";
import RestaurantCard from "./src/components/RestaurantCard";
import Header from "./src/components/Header";
import Body from "./src/components/Body";



const Footer = () => <div className="footer"></div>;

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
