import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerSetStateFunction } from "./StateEngine";

/*
Experiment A: connecting local state to a central data manager by registering the setState function
*/

const App: React.FC<{}> = () => {
  const [num, setNum] = React.useState<number>(0);
  registerSetStateFunction(setNum);
  return <div>Component A: {num}</div>;
};

ReactDOM.render(<App />, document.getElementById("rootA"));
