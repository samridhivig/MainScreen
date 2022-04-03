import nextButton from "../assets/NextButton.png";

import {
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";

export default function InputFatigueScreen() {

  const initialState = {
    isNoneClicked: false,
    isMediumClicked: false,
    isHighClicked: false
  };

  const [inputState, setInputState] = useState(initialState);

  useEffect(() => { setInputState(inputState) }, [ inputState ] )

  function isAnyItemSelected() {
    return Object.values(inputState).some((elem) => elem === true);
  } 

  function itemClicked(propertyName) {

    if (propertyName === "none") {
      setInputState({ ...inputState, isNoneClicked: !inputState.isNoneClicked });
    } else if (propertyName === "medium") {
      setInputState({ ...inputState, isMediumClicked: !inputState.isMediumClicked });
    } else {
      setInputState({ ...inputState, isHighClicked: !inputState.isHighClicked });
    }

    isAnyItemSelected() && setInputState(initialState);
  }

  return (
    <div className="input-screen-container">
      <h2> Fatigue </h2>

      <div className="item-options">
        <div className={`item ${inputState.isNoneClicked ? "item-alone__highlighted" : ""}`}>
          <p className="item--alone-text" onClick={() => itemClicked("none")}> none </p>
        </div>

        <div className={`item ${inputState.isMediumClicked ? "item-alone__highlighted" : ""}`}>
          <p className="item--alone-text" onClick={() => itemClicked("medium")}> medium </p>
        </div>

        <div className={`item ${inputState.isHighClicked ? "item-alone__highlighted" : ""}`}>
          <p className="item--alone-text" onClick={() => itemClicked("high")}> high </p>
        </div>
      </div>

      <div className="next-button-container">
        <Link to="/Pain">
          <img className="next-button--image" src={nextButton} alt="Next Button" />
        </Link>
      </div> 

    </div>
  );
}