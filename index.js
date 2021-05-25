import React, { useState } from "react";
import ReactDOM from "react-dom";

// Custom Components and Events
function CounterButton({ style, title, onPress }) {
  return (
    <button style={style} onClick={onPress}>
      {title}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const style = {
    display: "block",
    padding: "40px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  };

  return (
    <>
      <div style={style}>Welcome to React!</div>
      <button
        style={style}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click HERE to increment: {count}
      </button>
      <CounterButton
        style={style}
        title={`Click HERE to increment: ${count}`}
        onPress={() => setCount(count + 1)}
      />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
