import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);

  const canvasRef = useRef();

  console.log("rendering");

  useEffect(() => {
    /* mutable value example */
    intervalRef.current = setInterval(() => setCount(count => count + 1), 1000);
    // variable = setInterval(() => setCount(count => count + 1), 1000);

    /* DOM example */
    const canvas = canvasRef.current
    const context = canvas.getContext("2d");

    context.fillStyle = 'rgba(59, 108, 212, 0.5)'
    context.fillRect(10, 10, 50, 50)

    context.fillStyle = 'rgba(59, 108, 212)'
    context.fillRect(30, 30, 50, 50)
  }, []);

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <div style={{ fontSize: 120 }}>{count}</div>
      <button
        onClick={() => {
          clearInterval(intervalRef.current)
          // clearInterval(variable)
        }}
      >
        Stop
      </button>
      <canvas ref={canvasRef} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
