import { createContext, useState } from "react";
import { firebaseAuth, firebaseInstance } from "../firebaseInit";

const LoginContext = createContext();

const LoginProvider = (props) => {
  const [logIn, setLogIn] = useState(true);
  const [email, setEmail] = useState("");

  /// login state
  const [password, setPassword] = useState("");

  /// signin  state
  const [stateValue, setStateValue] = useState(false);
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

  const onGoogleClick = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await firebaseAuth.signInWithPopup(provider);
  };

  const onSetLogin = () => {
    setLogIn(!logIn);
  };

  const onLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      window.alert(error.message);
    }
  };

  const onSignInSubmit = async (event) => {
    event.preventDefault();
    if (stateValue) {
      try {
        await firebaseAuth.createUserWithEmailAndPassword(email, firstPassword);
      } catch (error) {
        console.error(error);
        window.alert(error.message);
      }
    } else if (!stateValue) {
      window.alert("비밀번호가 일치하지 않습니다.");
    }
  };

  /// signin  function

  const loginValue = {
    onInputChange,
    onSetLogin,
    logIn,
    email,
    onGoogleClick,

    ///log in
    password,
    onLoginSubmit,

    ///sign in
    firstPassword,
    secondPasssword,
    onSignInSubmit,
    stateValue,
    setStateValue,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
