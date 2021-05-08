import React, { createContext, useContext, useEffect, useState } from 'react'
import { firebaseFirestore } from '../firebaseInit';
import { LoginUserContext } from './LoginUserContext';

const RwittContext = createContext();

const RwittContextProvider = (props) => {
  const [textRwitt, setTextRwitt] = useState("");
  const [textRwitts, setTextRwitts] = useState(null);
  const LoginUserValue = useContext(LoginUserContext);
  const {currentUserInfo} = LoginUserValue;

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
  

    const rwittValue = {
        textRwitt,
        textRwitts,
        onRrittSubmit,
        onChangeRwitt
    }
    return (
        <RwittContext.Provider value={rwittValue}>
            {props.children}
        </RwittContext.Provider>
    )
}

export {RwittContextProvider, RwittContext}
