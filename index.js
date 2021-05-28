import React, { Children, useState } from "react";
import ReactDOM from "react-dom";

function List({ children }) {
  return (
    <>
      {Children.toArray(children).map((child, index, array) => {
        return (
          <>
            {child}
            {index < array.length - 1 && <hr key={`hr-${index}`} />}
          </>
        );
      })}
    </>
  );
}

function App() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <List>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </List>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
