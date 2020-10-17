import React from "react";
function InitialState(props) {
  return (
    <div className="card" onClick={props.moveStage}>
      <span>{props.type}</span>
    </div>
  );
}

export default InitialState;
