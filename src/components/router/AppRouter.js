import React, { useContext } from "react";
import { LoginUserContext } from "../../context/LoginUserContext";
import Login from "../home/Login";
import Main from "../home/Main";

const AppRouter = () => {
  const LoginUserValue = useContext(LoginUserContext);
  const { currentUserInfo, isLoggedIn } = LoginUserValue;

  return (
    <>
      {isLoggedIn && <Main currentUserInfo={currentUserInfo} />}
      {!isLoggedIn && <Login />}
    </>
  );
};

export default AppRouter;
