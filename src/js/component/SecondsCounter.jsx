import React from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";

export const SecondsCounter = (props) => {
    return (
        <div className="container-fluid d-flex justify-content-center bg-black text-white mt-5 w-25">
            <div className="clock">
                <i className="far fa-clock"></i>
            </div>
            <div className="numbers">{props.positionFour % 10}</div>
            <div className="numbers">{props.positionThree % 10}</div>
            <div className="numbers">{props.positionTwo % 10}</div>
            <div className="numbers">{props.positionOne % 10}</div>
        </div>
    );

};

SecondsCounter.propTypes = {
    positionFour: propTypes.number,
    positionThree: propTypes.number,
    positionTwo: propTypes.number,
    positionOne: propTypes.number,
}

let counter = 0
setInterval (function() {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(four, three, two, one);
    counter++;
    ReactDOM.render(<SecondsCounter positionOne={one} positionTwo={two} positionThree={three} positionFour={four} />, document.querySelector("#app"));
}, 1000);