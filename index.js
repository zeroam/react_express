import React, { useState } from "react";
import ReactDOM from "react-dom";

const randomDiceRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

function App() {
  const [diceRolls, setDiceRolls] = useState([1, 2, 3]);

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <button
        onClick={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()]);
        }}
      >
        Roll dice
      </button>
      <ul>
        {diceRolls.map((diceRoll, index) => {
          return <li key={index}>{diceRoll}</li>
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
