import React from "react";
import ReactDOM from "react-dom";

import { Button } from "ui";

import "./index.scss";

const App = () => (
  <div>
    <Button onClick={() => console.log("clicked")}>Details</Button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
