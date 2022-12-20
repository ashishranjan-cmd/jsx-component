import React from "react";
import ReactDOM  from "react-dom/client";

import  "./index.css";
import { Func1 } from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("root")) // createRoot() function

// this is render function without the createroot function.
// ReactDOM.render(
//  <h1>Welcome to my webapp</h1>,
//  document.getElementById("root")
// )

root.render(
  <div>
  <Func1 />
  <Func1 />

  </div>
)