//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter";

//render your react application

ReactDOM.render(<Home/>, document.querySelector("#app"));
