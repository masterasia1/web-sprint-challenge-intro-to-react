// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { worker } from "./mocks/browser";
import Character from "./components/Character";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Character />, document.getElementById("root"));

