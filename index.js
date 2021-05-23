import React, { useState } from "react";
import ReactDOM from "react-dom";

function randomColor() {
  const color = `#${Math.random().toString(16).substr(-6)}`;
  console.log(color);
  return color;
}

function Card({ color, children }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        color: "white",
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const [color, setColor] = useState("skyblue");

  const style = {
    padding: "40px",
    textAlign: "center",
  };

  return (
    <>
      <div style={style}>Welcome to React!</div>
      <div style={{ padding: "20px" }}>
        <Card color={color}>
          <input
            type={"button"}
            value={"Randomize Color"}
            onClick={() => setColor(randomColor())}
          />
        </Card>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
