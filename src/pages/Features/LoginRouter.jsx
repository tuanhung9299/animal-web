import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Auth/Login";

function LoginRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default LoginRouter;
