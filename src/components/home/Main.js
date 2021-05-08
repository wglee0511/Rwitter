import React, { useContext, useState } from "react";
import { LoginUserContext } from "../../context/LoginUserContext";
import { firebaseFirestore } from "../../firebaseInit";

const Main = () => {
  const [textRwitt, setTextRwitt] = useState("");
  const [textRwitts, setTextRwitts] = useState(null);
  const LoginUserValue = useContext(LoginUserContext);
  const {currentUserInfo} = LoginUserValue
  console.log(currentUserInfo);
  const onRrittSubmit = async (event) => {
    event.preventDefault();
    await firebaseFirestore.collection("rwitts").add({
      userId : currentUserInfo.uid,
      creatAt : Date.now(),
      text: textRwitt
    })
    setTextRwitt("");
  }

  const onChangeRwitt = (event) => {
    const text = event.target.value;
    setTextRwitt(text);
  }
  
  return (<div>
    <form onSubmit={onRrittSubmit}>
      <input type="text" placeholder="무슨 일이 일어나고 있나요?"  onChange={onChangeRwitt} value={textRwitt} />
      <button>르윗</button>
    </form>
  </div>);
};

export default Main;
