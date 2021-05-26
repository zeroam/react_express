import React from "react";
import ReactDOM from "react-dom";

function App() {
  const data = [
    { id: "a", name: "Devin" },
    { id: "b", name: "Gabe" },
    { id: "c", name: "Kim" },
  ];

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      {data.map(item => {
        return <div key={item.id}>{item.name}</div>
      })}
      {data.map((item, index) => {
        return <div key={index}>{item.name}</div>
      })}
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
