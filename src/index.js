import React from "react";
import ReactDOM  from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root")) // createRoot() function

// this is render function without the createroot function.
// ReactDOM.render(
//  <h1>Welcome to my webapp</h1>,
//  document.getElementById("root")
// )

import  "./index.css";

function Func1(){
  return <h1 className='myheader'>Welcome to my webapp</h1>; 
}

root.render(
  <Func1></Func1> // calling function as tag
)