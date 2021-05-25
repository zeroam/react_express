import React, { useState } from "react";
import ReactDOM from "react-dom";

function TextInput() {
  const [state, setState] = useState("");

  return (
    <div>
      <label htmlFor={"my-input"}>Enter text: </label>
      <input
        id={"my-input"}
        type={"text"}
        value={state}
        placeholder={"Type here"}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <br />
      <br />
      You entered: {state}
    </div>
  );
}

function App() {
  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <TextInput />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
