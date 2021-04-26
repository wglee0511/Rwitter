import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { firebaseAuth } from "../../firebaseInit";

const Signin = () => {
  const [stateMessage, setStateMessage] = useState("");
  const [stateValue, setStateValue] = useState(false);
  const loginValue = useContext(LoginContext);
  const {
    onInputChange,
    onSetLogin,
    email,
    firstPassword,
    secondPasssword,
  } = loginValue;

  useEffect(() => {
    if (firstPassword === secondPasssword) {
      setStateMessage("비밀번호가 일치합니다.");
      setStateValue(true);
    } else {
      setStateMessage("비밀번호가 불일치합니다.");
      setStateValue(false);
    }
  }, [firstPassword, secondPasssword]);

  const onSignInSubmit = async (event) => {
    event.preventDefault();
    if (stateValue) {
      try {
        const data = await firebaseAuth.createUserWithEmailAndPassword(
          email,
          firstPassword
        );
        console.log(data);
      } catch (error) {
        console.error(error);
        window.alert(error.message);
      }
    } else if (!stateValue) {
      window.alert("비밀번호가 일치하지 않습니다.");
    }
  };

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
        <button>구글 회원가입</button>
        <button onClick={onSetLogin}>로그인</button>
      </div>
    </>
  );
};

export default Signin;
