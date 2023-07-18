import { useEffect, useState } from "react";

export default function EffectExample() {
  // useEffect is a hook that is designed to
  // synchronize a component with some external
  // system/thing. This will be, for the most part,
  // an API but it can also be used for modifying
  // and manipulating things like the title of your
  // html document

  // Takes 2 pieces of info as input:
  // 1. A callback function to run upon changes of
  //    the aforementioned system it is trying to sync
  //    to
  // 2. Dependency Array -> A series of state variables that
  //    this particular useEffect is paying attention to.
  //    Whenever one of these 'dependency' variables changes,
  //    React will rerun the callback function in input slot
  //    #1. Leaving the dependency array empty will result in
  //    The callback function being only run once upon its first
  //    render. Omitting the dependency array will make the callback
  //    function run on EVERY SINGLE RENDER.
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  console.log("rerendered");
  return (
    <>
      <h1>useEffect example {count}</h1>
      {data && (
        <ul>
          <li>{data.userId}</li>
          <li>{data.title}</li>
        </ul>
      )}
      <button onClick={() => setCount(count + 1)}>Add To Test</button>
    </>
  );
}
