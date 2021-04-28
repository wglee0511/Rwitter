import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LoginUserProvider } from "./context/LoginUserContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginUserProvider>
      <App />
    </LoginUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
