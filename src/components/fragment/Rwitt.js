import React, { useContext } from "react";
import { LoginUserContext } from "../../context/LoginUserContext";
import { RwittContext } from "../../context/RwittContext";

const Rwitt = (props) => {
  const { eachInfo } = props;
  const LoginUserValue = useContext(LoginUserContext);
  const rwittValue = useContext(RwittContext);
  const { currentUserInfo } = LoginUserValue;
  const currentUid = currentUserInfo.uid;
  const { onDeleteClick } = rwittValue;

  return (
    <div key={eachInfo.id} postid={eachInfo.id}>
      <div>{eachInfo.text}</div>
      {currentUid === eachInfo.userId && (
        <>
          <button>수정</button>
          <button onClick={onDeleteClick}>삭제</button>
        </>
      )}
    </div>
  );
};

export default Rwitt;
