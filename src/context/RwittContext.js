import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../firebaseInit";
import { LoginUserContext } from "./LoginUserContext";

const RwittContext = createContext();

const RwittContextProvider = (props) => {
  const [textRwitt, setTextRwitt] = useState("");
  const [textRwitts, setTextRwitts] = useState(null);
  const LoginUserValue = useContext(LoginUserContext);
  const { currentUserInfo } = LoginUserValue;

  useEffect(() => {
    firebaseFirestore.collection("rwitts").onSnapshot((eachSnapShot) => {
      firebaseFirestore.collection("rwitts").orderBy("creatAt", "desc");
      const rwittArr = eachSnapShot.docs.map((each) => {
        return {
          id: each.id,
          ...each.data(),
        };
      });
      setTextRwitts(rwittArr);
    });
  }, []);

  const onRrittSubmit = async (event) => {
    event.preventDefault();
    await firebaseFirestore.collection("rwitts").add({
      userId: currentUserInfo.uid,
      creatAt: Date.now(),
      text: textRwitt,
    });
    setTextRwitt("");
  };

  const onChangeRwitt = (event) => {
    const text = event.target.value;
    setTextRwitt(text);
  };

  const onDeleteClick = async (event) => {
    const rwittId = event.target.parentElement.getAttribute("postid");

    const isOk = window.confirm("정말로 삭제 하시겠습니까?");
    if (isOk) {
      await firebaseFirestore.doc(`rwitts/${rwittId}`).delete();
    }
  };

  const rwittValue = {
    textRwitt,
    textRwitts,
    onRrittSubmit,
    onChangeRwitt,
    onDeleteClick,
  };

  return (
    <RwittContext.Provider value={rwittValue}>
      {props.children}
    </RwittContext.Provider>
  );
};

export { RwittContextProvider, RwittContext };
