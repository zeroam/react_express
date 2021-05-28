import React, { useState } from "react";
import ReactDOM from "react-dom";

// Uncontrolled components
function UTextInput({ onSubmit }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        onSubmit(value);
        setValue("");
        event.preventDefault();
      }}
    >
      <input
        name="input"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </form>
  );
}

// Controlled components
function CTextInput({ value, setValue, onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        onSubmit()
        setValue('')
        event.preventDefault()
      }}
    >
      <input
        name="input"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </form>
  )
}

function App() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <div>
        <UTextInput onSubmit={setSubmitted} />
        You submitted: {submitted}
      </div>
      <div>
        <CTextInput
          value={value}
          setValue={setValue}
          onSubmit={() => setSubmitted(value)} />
        You submitted: {submitted}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
