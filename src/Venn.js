import "./Venn.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import FullVenn from './Full-venn';
import Calendar from './Calendar';
import Data from './Data';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '5px',
},
    label: {
      fontSize: '13px',
  },
});

function App() {
  const classes = useStyles();
  const [dates, setDate] = useState([]);
  const [state, setState] = useState({
    checkedPositive: true,
    checkedNegative: true, 
    checkedPain: true,
    checkedFatigue: true
  });  
 
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("toggle pressed");
  };

  function getDates(Dates){
    console.log('here', Dates);
    setDate(Dates);
  }

  return (
    <div className="App">
      <div className="App-header">
      <p>Monthly Overview</p>
      </div>
      <div className="App-checkbox">
      <FormGroup className={classes.root} row>
        <FormControlLabel
          classes={{
            label: classes.label, 
            icon: classes.icon,
            checkedIcon: classes.icon, 
          }}
          control={
            <Checkbox
              checked={state.checkedPositive}
              onChange={handleChange}
              name="checkedPositive"
              color="primary"
              style={{
                transform: "scale(1)",
                color: "hotpink"
            }}
            />
          }
          label={<span style={{ fontSize: '1rem' }}>Positive</span>}
        />

      <FormControlLabel
          classes={{
              label: classes.label, 
              icon: classes.icon,
              checkedIcon: classes.icon, 
          }}
          control={
            <Checkbox
              checked={state.checkedNegative}
              onChange={handleChange}
              name="checkedNegative"
              color="primary"
              style={{
                transform: "scale(1)",
                color: "hotpink"
            }}
            />
          }
          label={<span style={{ fontSize: '1rem' }}>Negative</span>}
        />

<FormControlLabel
          classes={{
              label: classes.label, 
              icon: classes.icon,
              checkedIcon: classes.icon, 
          }}
          control={
            <Checkbox
              checked={state.checkedPain}
              onChange={handleChange}
              name="checkedPain"
              color="primary"
              style={{
                transform: "scale(1)",
                color: "hotpink"
            }}
            />
          }
          label={<span style={{ fontSize: '1rem' }}>Pain</span>}
        />

<FormControlLabel
          classes={{
            label: classes.label, 
            icon: classes.icon,
            checkedIcon: classes.icon, 
          }}
          control={
            <Checkbox
              checked={state.checkedFatigue}
              onChange={handleChange}
              name="checkedFatigue"
              color="primary"
              style={{
                transform: "scale(1)",
                color: "hotpink"
            }}
            />
          }
          label={<span style={{ fontSize: '1rem' }}>Fatigue</span>}
        />

      </FormGroup>
      </div>
      {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === true && <p className="positive"> Positive </p> }
      {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === true && <p className="pain">Pain</p> }
      {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === true && <p className="fatigue">Fatigue</p> }
      {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === true && <p className="negative">Negative</p> }
      <div className="App-venn"> 
        {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.FullVennSets} /> }
        {state.checkedPositive === true && state.checkedNegative === false && state.checkedPain === true && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.PosPainFatigueSets} />}
        {state.checkedPositive === false && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.NegPainFatigueSets} />}
        {state.checkedPositive === false && state.checkedNegative === false && state.checkedPain === true && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.PainFatigueSets} />}
        {state.checkedPositive === true && state.checkedNegative === false && state.checkedPain === true && state.checkedFatigue === false
        && <FullVenn callbackFromParent={getDates} Data={Data.PosPainSets} />}
        {state.checkedPositive === true && state.checkedNegative === false && state.checkedPain === false && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.PosFatigueSets} />}
        {state.checkedPositive === false && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === false
        && <FullVenn callbackFromParent={getDates} Data={Data.NegPainSets} />}
        {state.checkedPositive === false && state.checkedNegative === true && state.checkedPain === false && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.NegFatigueSets} />}
        {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === true && state.checkedFatigue === false
        && <FullVenn callbackFromParent={getDates} Data={Data.PosNegPainSets} />}
        {state.checkedPositive === true && state.checkedNegative === true && state.checkedPain === false && state.checkedFatigue === true
        && <FullVenn callbackFromParent={getDates} Data={Data.PosNegFatigueSets} />}
      </div>
      <div className="App-calendar">
        <Calendar Dates={dates} />
      </div>
    </div>
  );
}

export default App; 
