import React from "react";
import {Routes, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import News from "../News/News";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomeRouter() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="News" element={<News />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeRouter;
