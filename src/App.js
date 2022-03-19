import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<h1>Hello World</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
