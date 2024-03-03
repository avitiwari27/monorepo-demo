import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Details />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
