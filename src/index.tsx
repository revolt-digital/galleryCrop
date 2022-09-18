import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Component />
  // </React.StrictMode>
);
