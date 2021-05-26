import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function randomColor() {
  return `#${Math.random().toString(16).substr(-6)}`;
}

function App() {
  const [count, setCount] = useState(0);
  const color = count % 5 === 0 ? randomColor() : "blue";

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  // undefined dependencies
  // useEffect(() => {
  //   document.body.style.backgroundColor = randomColor()
  // })

  // Empty dependencies -> only once
  // useEffect(() => {
  //   document.body.style.backgroundColor = randomColor()
  // }, [])

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click HERE to increment: {count}
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
