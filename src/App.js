import React from "react";

import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppCard from "./components/AppCard/AppCard.jsx";
import AppWeight from "./components/AppWeight/AppWeight.jsx";
function App() {
  const APP_TITLE = "Tinkle Time!";
  const buttonTypes = [
    { name: "Wee", value: `wee` },
    { name: "Poop", value: `poo` },
  ];
  return (
    <div className="App">
      <AppHeader title={APP_TITLE} />
      {buttonTypes.map(function (type, index) {
        return <AppCard type={type} key={index} />;
      })}
      <AppWeight />
    </div>
  );
}

export default App;
