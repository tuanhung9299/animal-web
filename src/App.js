import React from "react";
import { Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import "./assets/sass/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRouter from "./pages/Features/HomeRouter";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="HomeRouter/*" element={<HomeRouter />} />
      </Routes>
    </div>
  );
}

export default App;
