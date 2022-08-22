import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const page = (
  <div>
    <header>
      <nav className="nav">
        <img
          src="https://th.bing.com/th/id/OIP.JU4qreGiDoB2bzfyCfJYRQHaHa?pid=ImgDet&w=500&h=500&rs=1"
          alt="logo"
          className="img"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

    <h1> Fun facts about React </h1>
    <ol>
      <li> Was first released in 2013 </li>
      <li> Was originally created by Jordan Walke </li>
      <li> Has well over 100 K stars on GitHub </li>
      <li> Is maintained by Facebook </li>
      <li> Powers thousands of enterprise apps, including mobile apps </li>
    </ol>
    <footer>
      <small> ©2021 Matiz development.All rights reserved. </small>
    </footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
