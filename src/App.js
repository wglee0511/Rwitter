import React, { useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import AppRouter from "./components/router/AppRouter";
import { LoginProvider } from "./context/LoginContext";
import { LoginUserContext } from "./context/LoginUserContext";

function App() {
  const LoginUserValue = useContext(LoginUserContext);
  const { init } = LoginUserValue;
  return (
    <LoginProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            {init ? <AppRouter /> : "Loading..."}
          </Route>
        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;
