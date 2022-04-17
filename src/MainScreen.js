import AddButton from "./assets/AddButton.png"
import "./styles.scss";
import {
  Link
} from "react-router-dom";
import WeeklyOverview from "./weekly-overview";

export default function MainScreen() {

  return (
    <div className="main-screen-container">
      {/* <h2>Input Screen</h2>
      <div className="add-button-container">
        <Link to="/Mood">
          <img className="add-button--image" src={AddButton} alt="Add button" />
        </Link>
      </div> */}
      <WeeklyOverview />
    </div>
  );
}