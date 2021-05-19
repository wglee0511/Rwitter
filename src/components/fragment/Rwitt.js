import React, { useContext, useState } from "react";
import { RwittContext } from "../../context/RwittContext";
import { firebaseFirestore } from "../../firebaseInit";

const Rwitt = (props) => {
  const { eachInfo, isowner } = props;
  const rwittValue = useContext(RwittContext);
  const { onDeleteClick } = rwittValue;
  const [changeRwitt, setChangeRwitt] = useState(false);
  const [newRwitt, setNewRwitt] = useState(eachInfo.text);

  const onToggleChange = () => {
    setChangeRwitt((prev) => !prev);
  };

  const onRwittSubmit = async (event) => {
    event.preventDefault();
    await firebaseFirestore.doc(`rwitts/${eachInfo.id}`).update({
      text: newRwitt,
    });
    setChangeRwitt(false);
  };

  const onRwittChange = (event) => {
    const rwittValue = event.target.value;
    setNewRwitt(rwittValue);
  };

  return (
    <div postid={eachInfo.id} posturl={eachInfo.imageUrl}>
      {changeRwitt ? (
        <>
          <form onSubmit={onRwittSubmit}>
            <input
              type="text"
              placeholder="무슨 일이 일어나고 있나요?"
              value={newRwitt}
              onChange={onRwittChange}
              required
            />
            <input type="submit" value="리르윗하기" />
          </form>
          <button onClick={onToggleChange}>취소</button>
        </>
      ) : (
        <>
          {eachInfo.imageUrl && (
            <img
              src={eachInfo.imageUrl}
              width="100px"
              height="100px"
              alt={eachInfo.text}
            />
          )}
          <div>{eachInfo.text}</div>
          {isowner && (
            <>
              <button onClick={onToggleChange}>수정</button>
              <button onClick={onDeleteClick}>삭제</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Rwitt;
