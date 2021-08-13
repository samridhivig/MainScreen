import "./styles.css";
import {
  VennDiagram,
  extractCombinations
} from "@upsetjs/react";
import elems from "./ModifiedVennData.js";
import { useState } from "react";
import { ContactSupportOutlined, Smartphone } from "@material-ui/icons";

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

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
  const temp = " "
  const temp2 = " days of "
  return (
    <div className="App">
      <h1> Monthly Overview </h1>
      <VennDiagram
        sets={sets}
        selection={selection}
        onHover={setSelection}
        width={500}
        height={300}
      />
      {
        console.log("img:",selection)
      }
     <p> {selection == null ? temp : selection.cardinality + temp2 + selection.name} </p> 
    </div>
  );
}
