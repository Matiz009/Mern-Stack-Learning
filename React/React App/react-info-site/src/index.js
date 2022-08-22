import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./react-logo.png";
import "./index.css";

const page = (
  <div>
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" className="img" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <main>
      <h1> Fun facts about React </h1>
      <ul className="main--facts">
        <li> Was first released in 2013 </li>
        <li> Was originally created by Jordan Walke </li>
        <li> Has well over 100 K stars on GitHub </li>
        <li> Is maintained by Facebook </li>
        <li> Powers thousands of enterprise apps, including mobile apps </li>
      </ul>
    </main>
    <footer>©2022 Matiz development.</footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
