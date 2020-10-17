import React, { useState } from "react";
import DoneState from "../CardStates/DoneState/DoneState";
import InitialState from "../CardStates/InitialState/InitialState";
import MiddleState from "../CardStates/MiddleState/MiddleState";
function Card(props) {
  const [stage, setStage] = useState(0);
  function moveStage() {
    setStage(stage + 1);
    console.log(stage);
  }
  async function logEvent(e) {
    console.log("e", e);
    // in here - need to do some logic
    e.type = props.type.value;
    const res = await fetch(`/toilet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });
    console.log(await res);
    setTimeout(function () {
      setStage(0);
    }, 1500);
  }
  return (
    <div>
      {stage === 0 ? (
        <InitialState type={props.type.name} moveStage={moveStage} />
      ) : stage === 1 ? (
        <MiddleState
          type={props.type.name}
          logEvent={logEvent}
          moveStage={moveStage}
        />
      ) : (
        <DoneState />
      )}
    </div>
  );
}

export default Card;
