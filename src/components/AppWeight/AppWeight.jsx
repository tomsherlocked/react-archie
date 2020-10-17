import React, { useState } from "react";

function Weight(props) {
  const [value, SetValue] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // value is what we need
    if (value < 50) {
      setSubmitted(true);
      const res = await fetch(`/weight`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight: value }),
      });
      console.log(await res);
      setTimeout(function () {
        setSubmitted(false);
      }, 1500);
    }
  }
  function handleChange(evt) {
    SetValue(evt.target.value);
  }
  return !submitted ? (
    <div className="weight-card">
      <div className="card-contents">
        <span>Weight (kg)</span>
        <div className="input-container">
          <input type="number" value={value} onChange={handleChange} />
        </div>
        <button className="weight-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  ) : (
    <div className="weight-card">
      <div className="card-contents">
        <span>Submitted - thanks!</span>
      </div>
    </div>
  );
}

export default Weight;
