import React from "react"; 
import ReactDOM from "react-dom/client";
import RestaurantCard from "./src/components/RestaurantCard";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Footer = () => <div className="footer"></div>;

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> , errorElement:<Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);
