import React from "react";
import ReactDOM from "react-dom";

const myElement = (
  <div foo="bar">
    <button>Test</button>
    <span>Hello</span>
  </div>
)

function App() {
  const style = {
    padding: '40px',
    textAlign: 'center',
  }

  console.log(JSON.parse(JSON.stringify(myElement)))

  return <div style={style}>Welcome to React!</div>
}

ReactDOM.render(<App />, document.querySelector("#app"))
