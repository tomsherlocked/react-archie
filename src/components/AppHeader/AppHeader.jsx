import React from "react";
function Header(props) {
  return (
    <div>
      <header className="App-header">
        <h3>{props.title}</h3>
      </header>
    </div>
  );
}

export default Header;
