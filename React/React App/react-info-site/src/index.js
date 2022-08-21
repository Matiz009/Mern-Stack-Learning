import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const page = (
  <div>
    <h1>~Matiz</h1>
    <h4>My name is Mati ul Rehman</h4>
    <h6>Fruits which I like:</h6>
    <ol>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ol>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
