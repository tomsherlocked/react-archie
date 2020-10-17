import React from "react";
function MiddleState(props) {
  const buttonTypes = [
    { name: "Yes", value: true },
    { name: "No", value: false },
  ];

  return (
    <div className="card-clicked" onClick={props.moveStage}>
      <div className="card-contents">
        <span>Was it on target?</span>
        <div className="yes-no-button-holder">
          {buttonTypes.map(function (type, index) {
            return (
              <button
                key={index}
                className="yes-no-button"
                onClick={() =>
                  props.logEvent({ type: props.type, target: type.value })
                }
              >
                {type.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MiddleState;
