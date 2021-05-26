import React, { memo, useMemo, useState } from "react";
import ReactDOM from "react-dom";

const Heading = memo(({ style, title }) => {
  console.log("Rendered:", title);

  return <h1 style={style}>{title}</h1>;
});

function App() {
  const [count, setCount] = useState(0);

  const normalStyle = {
    backgroundColor: "teal",
    color: "white",
  };

  const memoizedStyle = useMemo(() => {
    return {
      backgroundColor: "red",
      color: "white",
    };
  }, []);

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
      <Heading style={memoizedStyle} title="Memoized" />
      <Heading style={normalStyle} title="Normal" />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
