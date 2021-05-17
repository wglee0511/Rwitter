import React, { useContext } from "react";
import { LoginUserContext } from "../../context/LoginUserContext";
import { RwittContext } from "../../context/RwittContext";
import Rwitt from "../fragment/Rwitt";

const Main = () => {
  const rwittValue = useContext(RwittContext);
  const LoginUserValue = useContext(LoginUserContext);
  const { currentUserInfo } = LoginUserValue;
  const currentUid = currentUserInfo.uid;
  const {
    onRrittSubmit,
    onChangeRwitt,
    textRwitt,
    textRwitts,
    stringImage,
    onFIleChange,
    onFileClear,
  } = rwittValue;

  console.log(textRwitts);
  return (
    <div>
      <form onSubmit={onRrittSubmit}>
        <input
          type="text"
          placeholder="무슨 일이 일어나고 있나요?"
          onChange={onChangeRwitt}
          value={textRwitt}
          required
        />
        <input type="file" accept="image/*" onChange={onFIleChange} />
        {stringImage && (
          <div>
            <img src={stringImage} width="50px" height="50px" />
            <button onClick={onFileClear}>❌</button>
          </div>
        )}
        <button>르윗</button>
      </form>
      {textRwitts?.map((each) => {
        return <Rwitt eachInfo={each} isowner={currentUid === each.userId} />;
      })}
    </div>
  );
};

export default Main;
