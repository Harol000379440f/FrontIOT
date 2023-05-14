import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { consumoContext } from "./context/consumoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <consumoContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </consumoContext>
  </React.StrictMode>
);
