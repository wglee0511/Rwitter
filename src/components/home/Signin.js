import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const Signin = () => {
  const [stateMessage, setStateMessage] = useState("");

  const loginValue = useContext(LoginContext);
  const {
    onInputChange,
    onSetLogin,
    email,
    firstPassword,
    secondPasssword,
    setStateValue,
    onSignInSubmit,
    onGoogleClick,
  } = loginValue;

  useEffect(() => {
    if (firstPassword === secondPasssword && firstPassword !== "") {
      setStateMessage("비밀번호가 일치합니다.");
      setStateValue(true);
    } else {
      setStateMessage("비밀번호가 불일치합니다.");
      setStateValue(false);
    }
  }, [firstPassword, secondPasssword]);

  return (
    <>
      <div>
        <h1>르위터 회원가입</h1>
      </div>
      <div>
        <form onSubmit={onSignInSubmit}>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={onInputChange}
            value={email}
            required
          />
          <input
            type="password"
            name="password1"
            placeholder="비밀번호"
            onChange={onInputChange}
            value={firstPassword}
            required
          />
          <input
            type="password"
            name="password2"
            placeholder="비밀번호 확인"
            onChange={onInputChange}
            value={secondPasssword}
            required
          />
          <span>{stateMessage}</span>
          <button>회원가입</button>
        </form>
      </div>
      <div>
        <button onClick={onGoogleClick}>구글 회원가입</button>
        <button onClick={onSetLogin}>로그인 하기</button>
      </div>
    </>
  );
};

export default Signin;
