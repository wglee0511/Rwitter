import React, { useContext } from "react";
import { RwittContext } from "../../context/RwittContext";

const Main = () => {
  const rwittValue = useContext(RwittContext);
  const {onRrittSubmit,onChangeRwitt,textRwitt,textRwitts} = rwittValue;
  
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
