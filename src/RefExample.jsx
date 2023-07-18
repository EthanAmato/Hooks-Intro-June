import { useRef } from "react";

function FancyInput() {
  const inputRef = useRef();

  console.log("rerendered");

  function printChange() {
    console.log("Changed");
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  }

  return (
    <>
      <h1>Fancy Input:</h1>
      <input ref={inputRef} onChange={printChange} />
    </>
  );
}

export default FancyInput;
