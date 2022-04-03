import "./styles.scss";
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
      <div className="App-header">
        <p>Monthly Overview</p>
      </div>
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
