import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";

ReactDOM.render(
  <div><App name="Rehan Khan" age={33} is ReactDevelopper={true}/></div>,
  document.getElementById("root")
);

/*
ReactDOM.render(
  React.createElement('div',null,React.createElement('span',null,"hello in span create element")),
  document.getElementById("root")
);
*/