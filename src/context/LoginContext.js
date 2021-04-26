import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = (props) => {
  const [logIn, setLogIn] = useState(true);
  const [email, setEmail] = useState("");

  /// login state
  const [password, setPassword] = useState("");

  /// signin  state
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPasssword, setSecondPasssword] = useState("");

  const onInputChange = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    if (targetName === "email") {
      setEmail(targetValue);
    } else if (targetName === "password") {
      setPassword(targetValue);
    } else if (targetName === "password1") {
      setFirstPassword(targetValue);
    } else if (targetName === "password2") {
      setSecondPasssword(targetValue);
    }
  };

  const onSetLogin = () => {
    setLogIn(!logIn);
  };

  /// signin  function

  const loginValue = {
    onInputChange,
    onSetLogin,
    logIn,
    email,

    ///log in
    password,

    ///sign in
    firstPassword,
    secondPasssword,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
