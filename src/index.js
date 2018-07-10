import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
let count = 1;
const rootElement = document.getElementById("root");
setInterval(() => ReactDOM.render(<App count={count++} />, rootElement), 1000);
