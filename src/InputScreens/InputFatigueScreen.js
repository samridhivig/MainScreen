import nextButton from "../assets/NextButton.png";

import {
  Link
} from "react-router-dom";

export default function InputFatigueScreen() {

  function itemClicked(propertyName) {
    console.log('clicked', propertyName);
  }

  return (
    <div className="input-screen-container">
      <h2> Fatigue </h2>

      <div className="item-options">
        <div className="item">
          <p className="item--alone-text" onClick={() => itemClicked("highNegative")}> none </p>
        </div>

        <div className="item">
          <p className="item--alone-text" onClick={() => itemClicked("mediumNegative")}> medium </p>
        </div>

        <div className="item">
          <p className="item--alone-text" onClick={() => itemClicked("neutral")}> high </p>
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