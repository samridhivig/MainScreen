import "./styles.scss";
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Venn from './Venn';
import ModifiedVenn from './ModifiedVenn';
import UpSet from './UpSet';
import MainScreen from "./MainScreen";
import InputMoodScreen from "./InputScreens/InputMoodScreen.js";
import InputFatigueScreen from "./InputScreens/InputFatigueScreen.js";
import InputPainScreen from "./InputScreens/InputPainScreen.js";

export default function App() {

  return (
    <div className="App">
      {/* <Button variant="contained" color="primary">Venn</Button> */}
      {/* <Button variant="contained" color="primary">Modified Venn</Button> */}
      {/* <Button variant="contained" color="primary">UpSet</Button> */}
      <Router> 
        <ul class="app--header">
          <li>
            <Link to="/Venn">Venn</Link>
          </li>
          <li>
            <Link to="/ModifiedVenn">Modified Venn</Link>
          </li>
          <li>
            <Link to="/UpSet">UpSet</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route path="/Venn">
            <Venn />
          </Route>
          <Route path="/ModifiedVenn">
            <ModifiedVenn /> 
          </Route>
          <Route path="/UpSet">
            <UpSet />
          </Route>
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
