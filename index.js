import React, { memo, useCallback, useState } from "react";
import ReactDOM from "react-dom";

const Logger = memo((props) => {
  props.log();
  return null;
});

function App() {
  const [count, setCount] = useState(0);
  const count5 = Math.floor(count / 5)

  const memoizedFunction = useCallback(() => {
    console.log("useCallback");
  }, [count5])

  const normalFunction = () => {
    console.log("normal");
  }

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
        Increment
      </button>
      <Logger log={memoizedFunction} />
      <Logger log={normalFunction} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
