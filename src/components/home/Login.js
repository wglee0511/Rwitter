import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
  const loginValue = useContext(LoginContext);
  const { onInputChange } = loginValue;
  return (
    <div>
      <div>
        <h1>르위터 로그인</h1>
      </div>
      <div>
        <form>
          <input type="email" placeholder="이메일" onChange={onInputChange} />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={onInputChange}
          />
          <button>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
