import "./styles.css";
import {
  VennDiagram,
  extractCombinations
} from "@upsetjs/react";
import elems from "./ModifiedVennData.js";
import { useState } from "react";

export default function App() {
  const { sets, combinations } = extractCombinations(elems);
  const [selection, setSelection] = useState([]);

  /* const sets = useMemo(() => {
    const colors = ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494'];
    return elems.sets.map((s, i) => ({ ...s, color: colors[i] }));
  }, []);
  const combinations = useMemo(() => ({ mergeColors }), []); */
   
  return (
    <div className="App">
      <h1> Monthly Overview </h1>
      <VennDiagram
        sets={sets}
        selection={selection}
        onHover={setSelection}
        width={500}
        height={300}
        selectionColor=""
      />
    </div>
  );
}
