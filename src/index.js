import React from "react";

import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "2rem",

  border: "2px solid black",
};
customStyle.color = "blue";
customStyle.backgroundColor = "pink";

ReactDOM.render(
  <h1 style={customStyle} contentEditable>
    Hello World!
  </h1>,
  document.getElementById("root")
);
