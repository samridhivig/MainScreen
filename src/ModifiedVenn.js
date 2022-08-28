import "./styles.scss";
import "./ModifiedVenn.css";
import {
  VennDiagram,
  extractCombinations
} from "@upsetjs/react";
import elems from "./ModifiedVennData.js";
import { useState } from "react";
import Calendar from './Calendar';

export default function App() {
  const { sets, combinations } = extractCombinations(elems);
  const [selection, setSelection] = useState([]);

  /* const sets = useMemo(() => {
    const colors = ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494'];
    return elems.sets.map((s, i) => ({ ...s, color: colors[i] }));
  }, []);
  const combinations = useMemo(() => ({ mergeColors }), []); */
   
  //const temp = selection.name;
  //const new_temp = temp.replaceAll('∩',',');

  return (
    <div className="App">
      {/* <div className="App-header">
        <p>Monthly Overview</p>
      </div> */}
      <VennDiagram
        sets={sets}
        selection={selection}
        onHover={setSelection}
        width={350}
        height={300}
      />
      <div className="modified-venn-tooltip">
        <p> {selection == null ? " " : (selection.cardinality !== undefined) ? selection.cardinality + " days of " + selection.name.replaceAll('∩', ',') : " "} </p> 
      </div>
     <div className="App-calendar">
        <Calendar Dates={selection?.elems?.[0]?.dates} />
      </div>
    </div>
  );
}
