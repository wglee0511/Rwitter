import React, { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebaseInit";

const LoginUserContext = createContext();

const LoginUserProvider = (props) => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      try {
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            setIsLoggedIn(true);
            setUserInfo(user);
            console.log(user);
          } else {
            setIsLoggedIn(false);
          }
          setInit(true);
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const LoginUserValue = { currentUserInfo, init, isLoggedIn };
  return (
    <LoginUserContext.Provider value={LoginUserValue}>
      {props.children}
    </LoginUserContext.Provider>
  );
};

export { LoginUserContext, LoginUserProvider };
