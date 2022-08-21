import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const page = (
  <div>
    <img
      src="https://th.bing.com/th/id/OIP.JU4qreGiDoB2bzfyCfJYRQHaHa?pid=ImgDet&w=500&h=500&rs=1"
      alt="logo"
    />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);

reportWebVitals();
