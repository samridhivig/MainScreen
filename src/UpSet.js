import "./styles.css";
import UpSetJS, {
  extractCombinations
} from "@upsetjs/react";
import elems from './ModifiedVennData.js'
import { useState } from 'react';

export default function App() {

  const { sets, combinations } = extractCombinations(elems);
  const [selection, setSelection] = useState([]);

  return (
    <div className="App">
      <h1> Monthly Overview</h1>
      <UpSetJS
        sets={sets}
        combinations={combinations}
        width={500}
        height={300}
        selection={selection}
      onHover={setSelection}
      />
      {/* <VennDiagram sets={sets} width={500} height={300} />; */}
    </div>
  );
}
