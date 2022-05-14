import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../../components/Helmet";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.history.pushState(null, document.title, window.location.href);
  //   window.addEventListener("popstate", function (event) {
  //     window.history.pushState(null, document.title, window.location.href);
  //   });
  // }, []);

  const adminUser = {
    email: "admin@gmail.com",
    passwork: "123",
  };

  const login = (details) => {
    if (
      details.email == adminUser.email &&
      details.passwork == adminUser.passwork
    ) {
      details.isCheck = navigate("/HomeRouter/Home", {replace: true});
    } else {
      alert("Tài khoản sai");
      details.isCheck = false;
    }
    console.log(details);
  };

  return (
    <Helmet title="Login">
      <LoginForm login={login} />
    </Helmet>
  );
};

export default Login;
