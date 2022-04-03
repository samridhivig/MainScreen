import InputMoodScreen from "./InputScreens/InputMoodScreen.js";
import InputFatigueScreen from "./InputScreens/InputFatigueScreen.js";
import InputPainScreen from "./InputScreens/InputPainScreen.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function MainScreen() {

  return (
    <div>
      <h2>Input Screen</h2>
  
      <Router>
        <button>
          <Link to="/Mood">Add Data</Link>
        </button>
        <Switch>
          <Route path="/Mood">
            <InputMoodScreen />
          </Route>
          <Route path="/Fatigue">
            <InputFatigueScreen />
          </Route>
          <Route path="/Pain">
            <InputPainScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}