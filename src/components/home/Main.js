import React, { useContext } from "react";
import { LoginUserContext } from "../../context/LoginUserContext";
import { RwittContext } from "../../context/RwittContext";

const Main = () => {
  const rwittValue = useContext(RwittContext);
  const LoginUserValue = useContext(LoginUserContext);
  const {currentUserInfo} = LoginUserValue;
  const currentUid = currentUserInfo.uid;
  const {onRrittSubmit,onChangeRwitt,textRwitt,textRwitts} = rwittValue;
  
  console.log(textRwitts);
  return (<div>
    <form onSubmit={onRrittSubmit}>
      <input type="text" placeholder="무슨 일이 일어나고 있나요?"  onChange={onChangeRwitt} value={textRwitt} required />
      <button>르윗</button>
    </form>
    {textRwitts?.map(each => {
      return (
        <div key={each.id}>
          <div>{each.text}</div>
          {currentUid === each.userId && 
          <>
          <button>수정</button>
          <button>삭제</button>
          </>
        }
        </div>
      )
    })}
  </div>);
};

export default Main;
