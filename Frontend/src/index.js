import React from "react";
import ReactDOM from "react-dom";
import IndexProvider from './context/index'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <IndexProvider>
    <App />
    </IndexProvider>
  </React.StrictMode>,
  rootElement
);
