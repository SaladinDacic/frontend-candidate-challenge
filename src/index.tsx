import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// import ReactDOM from "react-dom";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
