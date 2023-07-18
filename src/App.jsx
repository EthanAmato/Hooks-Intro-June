import { useState } from "react";

function App() {
  // count -> reference to the value of our variable
  // setCount -> callback function that we have to use if we want
  //              to update our 'count' state. Let's react know
  //              our state variable has changed and that we need
  //              to rerender the dom with our new value in mind

  console.log("rerendered")

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1)
  }

  return (
    <>
      <h1 onClick={handleIncrement} >{count}</h1>
      <button onClick={handleIncrement}>Add to count</button>
      <input onChange={handleIncrement} />
    </>
  );
}

export default App;
