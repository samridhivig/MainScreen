import InputMoodScreen from "./InputMoodScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function MainScreen() {

  return (
    <div>
      <h2> Input Screen</h2>
  
      <Router>
        <button>
          <Link to="/Mood"> Add Data</Link>
        </button>
        <Switch>
          <Route path="/Mood">
            <InputMoodScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}