//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import react from "react";
import ReactDOM from "react-dom";

const fname = "Sanidhya";
const lname = "Varshney";
const currentyear = new Date();
ReactDOM.render(
  <div>
    <p>Created by {`${fname}${lname}`}</p>
    <p>Copyright {currentyear.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
