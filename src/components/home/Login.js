import React, { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import Signin from "./Signin";

const Login = () => {
  const loginValue = useContext(LoginContext);
  const { onInputChange, onSetLogin, logIn, onGoogleClick } = loginValue;
  return (
    <>
      {logIn && (
        <>
          <div>
            <h1>르위터 로그인</h1>
          </div>
          <div>
            <form>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                onChange={onInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={onInputChange}
                required
              />
              <button>로그인</button>
            </form>
          </div>
          <div>
            <button onClick={onGoogleClick}>구글 로그인</button>
            <button onClick={onSetLogin}>가입하기</button>
          </div>
        </>
      )}
      {!logIn && <Signin />}
    </>
  );
};

export default Login;
