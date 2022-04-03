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

export default function InputMoodScreen() {

  function itemClicked(propertyName) {
    console.log('clicked', propertyName);
  }

  return (
    <div className="input-screen-container">
      <h2> Mood </h2>

      <div className="item-options">
        <div className="item">
          <div className="item--image-container">
            <img className="item--image" src={highNegative} alt="High negative" onClick={() => itemClicked("highNegative")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("highNegative")}> high negative</p>
        </div>

        <div className="item">
          <div className="item--image-container">
            <img className="item--image" src={mediumNegative} alt="Medium negative" onClick={() => itemClicked("mediumNegative")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("mediumNegative")}> medium negative</p>
        </div>

        <div className="item">
          <div className="item--image-container">
            <img className="item--image" src={neutral} alt="Neutral" onClick={() => itemClicked("neutral")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("neutral")}> neutral </p>
        </div>

        <div className="item">
          <div className="item--image-container">
            <img className="item--image" src={mediumPositive} alt="High negative" onClick={() => itemClicked("mediumPositive")} />
          </div>
          <p className="item--text" onClick={() => itemClicked("mediumPositive")}> medium positive </p>
        </div>

        <div className="item">
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