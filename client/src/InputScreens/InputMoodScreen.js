import highNegative from "../assets/moods/HighNegative.png";
import mediumNegative from "../assets/moods/MediumNegative.png";
import neutral from "../assets/moods/NeutralMood.png";
import mediumPositive from "../assets/moods/MediumPositive.png";
import highPositive from "../assets/moods/HighPositive.png";
import nextButton from "../assets/NextButton.png";

import "./InputScreen.scss";

import {
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";

export default function InputMoodScreen() {

  const initialState = {
    isHighNegativeClicked: false,
    isMediumNegativeClicked: false,
    isNeutralClicked: false,
    isMediumPositiveClicked: false,
    isHightPositiveClicked: false
  };

  const [inputState, setInputState] = useState(initialState);

  useEffect(() => { setInputState(inputState) }, [ inputState ] )

  function isAnyItemSelected() {
    return Object.values(inputState).some((elem) => elem === true);
  } 

  function itemClicked(propertyName) {

    if (propertyName === "highNegative") {
      setInputState({ ...inputState, isHighNegativeClicked: !inputState.isHighNegativeClicked });
    } else if (propertyName === "mediumNegative") {
      setInputState({ ...inputState, isMediumNegativeClicked: !inputState.isMediumNegativeClicked });
    } else if (propertyName === "neutral") {
      setInputState({ ...inputState, isNeutralClicked: !inputState.isNeutralClicked });
    } else if (propertyName === "mediumPositive") {
      setInputState({ ...inputState, isMediumPositiveClicked: !inputState.isMediumPositiveClicked });
    } else {
      setInputState({ ...inputState, isHightPositiveClicked: !inputState.isHightPositiveClicked });
    }

    isAnyItemSelected() && setInputState(initialState);
  }

  return (
    <div className="input-screen-container">
      <h2> Mood </h2>

      <div className="item-options">
        <div className={`item ${inputState.isHighNegativeClicked ? "item__highlighted" : ""}`}>
          <div className="item--image-container">
            <img className="item--image" src={highNegative} alt="High negative" onClick={() => itemClicked("highNegative")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("highNegative")}> high negative</p>
        </div>

        <div className={`item ${inputState.isMediumNegativeClicked ? "item__highlighted" : ""}`}>
          <div className="item--image-container">
            <img className="item--image" src={mediumNegative} alt="Medium negative" onClick={() => itemClicked("mediumNegative")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("mediumNegative")}> medium negative</p>
        </div>

        <div className={`item ${inputState.isNeutralClicked ? "item__highlighted" : ""}`}>
          <div className="item--image-container">
            <img className="item--image" src={neutral} alt="Neutral" onClick={() => itemClicked("neutral")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("neutral")}> neutral </p>
        </div>

        <div className={`item ${inputState.isMediumPositiveClicked ? "item__highlighted" : ""}`}>
          <div className="item--image-container">
            <img className="item--image" src={mediumPositive} alt="High negative" onClick={() => itemClicked("mediumPositive")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("mediumPositive")}> medium positive </p>
        </div>

        <div className={`item ${inputState.isHightPositiveClicked ? "item__highlighted" : ""}`}>
          <div className="item--image-container">
            <img className="item--image" src={highPositive} alt="High negative" onClick={() => itemClicked("highPositive")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("highPositive")}> high positive </p>
        </div>
      </div>

      <div className="next-button-container">
        <Link to="/Fatigue">
          <img className="next-button--image" src={nextButton} alt="Next Button" />
        </Link>
      </div>
    </div>
  );
}