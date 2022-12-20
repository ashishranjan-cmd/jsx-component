import React from "react";
import ReactDOM  from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")) // createRoot() function

// this is render function without the createroot function.
// ReactDOM.render(
//  <h1>Welcome to my webapp</h1>,
//  document.getElementById("root")
// )

import './index.css';

root.render(
  <h1 className="myheader">Welcome to my webapp</h1>
)