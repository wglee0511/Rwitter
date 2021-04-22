import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/home/Login";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;
