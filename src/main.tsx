import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/index";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home navigateTo={() => { /* TODO: implement navigation */ }} />
  </React.StrictMode>
);