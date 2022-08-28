import "./styles.scss";
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
import WeeklyOverview from "./weekly-overview";
import HighchartsVennOverview from "./highcharts-venn-overview";
import { useState } from "react";
import Hamburger from "./assets/hamburger.png"
import AddButton from "./assets/AddButton.png"

export default function App() {
  const [navBarState, toggleNavBar] = useState(false);

  var toggleBar = navBarState ?
  <>
  <div className='overlay' onClick={() => toggleNavBar(!navBarState)} />
  <div className="topnav">
    <Link className='nav-link' to="/Venn">Euler</Link>
    <Link className='nav-link' to="/ModifiedVenn">Symmetric Venn</Link>
    <Link className='nav-link' to="/UpSet">UpSet</Link>
  </div>
  </>
  :
  ''

  return (
    <div className='App'>
      <Router>
        {/* top nav menu to navigate between difference visualisations */}
        <div onClick={() => toggleNavBar(!navBarState)}>
          <img className="hamburger-icon" src={Hamburger} alt="Add button" />
        </div>
        <span className="month-title">SEPTEMBER 2022</span>

        {toggleBar}

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
          <Route path="/WeekOverview">
            <WeeklyOverview />
          </Route>
          <Route path="/HighchartsVennOverview">
            <HighchartsVennOverview />
          </Route>
        </Switch>

        <ul className="app--footer">
          <li>
            <Link to="/WeekOverview">Weekly Overview</Link>
          </li>
          <li>
            <Link className="add-icon" to="/">
              <img className="add-icon" src={AddButton} alt="Add button" />
            </Link>
          </li>
        </ul>
      </Router>
  
  
    </div>
  );
}
