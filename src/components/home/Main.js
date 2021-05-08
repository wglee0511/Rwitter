import React, { useContext, useEffect, useState } from "react";
import { LoginUserContext } from "../../context/LoginUserContext";
import { firebaseFirestore } from "../../firebaseInit";

const Main = () => {
  const [textRwitt, setTextRwitt] = useState("");
  const [textRwitts, setTextRwitts] = useState(null);
  const LoginUserValue = useContext(LoginUserContext);
  const {currentUserInfo} = LoginUserValue

  useEffect( () => {
    firebaseFirestore.collection("rwitts").onSnapshot(eachSnapShot => {
      const rwittArr = eachSnapShot.docs.map(each => {
        return {
          id: each.id,
          ...each.data()
        }
      });
      setTextRwitts(rwittArr);
    })
  },[])

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
    {textRwitts?.map(each => {
      return (
        <div key={each.id}>{each.text}</div>
      )
    })}
  </div>);
};

export default Main;
