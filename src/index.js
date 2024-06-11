import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // /**
  //  * Wraps the App component in a React StrictMode component, which activates additional
  //  * checks and warnings for potential issues in the application.
  //  * @returns The App component wrapped in a React StrictMode component.
  //  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
