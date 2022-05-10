import React from "react";
import ReactDOM from "react-dom/client";
import { RequestProvider } from "react-request-hook";
import axios from "axios";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

root.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <App />
    </RequestProvider>
  </React.StrictMode>
);
