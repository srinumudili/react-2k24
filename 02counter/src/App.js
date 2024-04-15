import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addButton = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeButton = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <div className="container">
      <h1>Counter Value: {counter}</h1>
      <button onClick={addButton}>Add Value</button>
      <button onClick={removeButton}>Remove Value</button>
    </div>
  );
}
export default App;
