import { createContext } from "react";

const LoginContext = createContext();

const LoginProvider = (props) => {
  const onInputChange = (event) => {
    console.log(event.target.type);
  };

  const loginValue = {
    onInputChange,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
