import { useState, useEffect } from 'react';
function ExampleEffect() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  function increment() {
    // count = count + 1;
    setCount(count + 1);
    console.log("click event")
  }

  function increment2() {
    setCount2(count2 + 1);
  }

  useEffect(function () {
    console.log("Render");
  }, [count]);

  // useEffect(function () {
  //   console.log("Render 2");
  // }, [count2]);

  console.log("rerender");
  return (
    <div>
      <button onClick={increment}>increment</button>
      <span>{count}</span>
      <button onClick={increment2}>increment</button>
      <span>{ count2 }</span>
    </div>
  )
}

export default ExampleEffect